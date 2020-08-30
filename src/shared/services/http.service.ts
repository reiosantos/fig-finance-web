import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResponseObj } from '../interface';
import AuthService from './auth.service';
import { getUrl } from '../constants/constants';

const axiosInstance = axios.create();

export interface AxiosParams {
  method: string;
  url: string;
  data?: any;
  contentType?: string;
  headers?: any;
}

export interface MiscellaneousRequestParams {
  contentType?: string;
  headers?: any;
}

/**
 * get method
 * @param url
 * @param params
 * @param otherData
 */
const get = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
  return commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });
};

/**
 * post method
 * @param url
 * @param params
 * @param queryParams
 * @param otherData
 */
const post = (
  url: string,
  params: any = {},
  queryParams = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'POST', url: getUrl(url, queryParams), data: params, ...otherData });
};

/**
 * put method
 * @param url
 * @param params
 * @param otherData
 */
const put = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
  return commonAxios({ method: 'PUT', url: getUrl(url), data: params, ...otherData });
};

/**
 * deleteRequest method
 * @param url
 * @param params
 * @param otherData
 */
const deleteRequest = (
  url: string,
  params: any = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'DELETE', url: getUrl(url), data: params, ...otherData });
};

/**
 * patch method
 * @param url
 * @param params
 * @param otherData
 */
const patch = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
  return commonAxios({ method: 'PATCH', url: getUrl(url), data: params, ...otherData });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type
 */
const commonAxios = ({
  method,
  url,
  data,
  contentType = 'application/json',
  headers = {}
}: AxiosParams): Promise<any> => {
  headers['Content-Type'] = contentType;
  const token = AuthService.getAccessToken();
  if (token) {
    headers.authorization = `JWT ${token}`;
  }
  let body: any = null;
  if (contentType === 'application/json') {
    body = JSON.stringify(data);
  } else {
    body = data;
  }
  return new Promise((resolve, reject) => {
    axiosInstance({
      method,
      url,
      headers,
      data: body
    })
      .then((response: AxiosResponse<ResponseObj<any>>) => {
        /**
         * sample JSON response :
         * {
         *		"isError": false,
         *		"message": "some message",
         *		"data": { ... some data }
         *	}
         */
        if (response.headers['content-type'].includes('application/json')) {
          // if in case response contains raw data, instead of json, resolve data
          return resolve(response.data.data);
        } else if (response.data.isError && response.data.message) {
          reject(new Error(response.data.message));
        } else {
          resolve(response.data.data);
        }
      })
      .catch((error: AxiosError) => {
        if (error.response && error.response.status === 401) {
          if (process.browser) {
            localStorage.clear();
            return window.location.replace('/login');
          }
          return reject(error);
        }

        if (error.response) {
          if (error.response.data && error.response.data.message) {
            reject(new Error(error.response.data.message));
          } else {
            reject(error);
          }
        } else {
          reject(error);
        }
      });
  });
};

const httpService = {
  get,
  post,
  put,
  deleteRequest,
  patch
};

export default httpService;
