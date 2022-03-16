import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';
import { NotificationType, ResponseObj } from '../interface';
import { API_CONFIG, getUrl, URLS } from '../constants/constants';
import AuthStorage from '../util/authStorage';
import { Dispatch } from 'redux';
import actionTypes from '../../store/action-types';
import storageService from './storage.service';

const axiosInstance: AxiosInstance = axios.create();

export interface AxiosParams {
  method: Method;
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
 * @param data
 * @param queryParams
 * @param otherData
 */
const post = (
  url: string,
  data: any = {},
  queryParams = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'POST', url: getUrl(url, queryParams), data, ...otherData });
};

/**
 * put method
 * @param url
 * @param data
 * @param queryParams
 * @param otherData
 */
const put = (
  url: string,
  data: any = {},
  queryParams = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'PUT', url: getUrl(url, queryParams), data, ...otherData });
};

/**
 * deleteRequest method
 * @param url
 * @param data
 * @param queryParams
 * @param otherData
 */
const del = (
  url: string,
  data: any = {},
  queryParams = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'DELETE', url: getUrl(url, queryParams), data, ...otherData });
};

/**
 * patch method
 * @param url
 * @param data
 * @param queryParams
 * @param otherData
 */
const patch = (
  url: string,
  data: any = {},
  queryParams = {},
  otherData: MiscellaneousRequestParams = {}
) => {
  return commonAxios({ method: 'PATCH', url: getUrl(url, queryParams), data, ...otherData });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type
 */
const commonAxios =
  ({ method, url, data, contentType = 'application/json', headers = {} }: AxiosParams) =>
    (dispatch?: Dispatch, showLoader = true): Promise<any> => {
      headers['Content-Type'] = contentType;
      const token = AuthStorage.getAccessToken();

      if (token) {
        headers.authorization = `JWT ${token}`;
      }
      let body: any = null;
      if (contentType === 'application/json') {
        body = JSON.stringify(data);
      } else {
        body = data;
      }

      if (dispatch) {
        dispatch({ type: actionTypes.API_REQUEST_INIT, payload: { loading: showLoader } });
      }

      return new Promise((resolve, reject) => {
        axiosInstance({ method, url, headers, data: body })
          .then((response: AxiosResponse<ResponseObj<any>>) => {
            if (dispatch) {
              dispatch({ type: actionTypes.API_REQUEST_SUCCESS });
            }
            /**
             * sample JSON response :
             * {
             *		"error": false,
             *		"message": "some message",
             *		"data": { ... some data }
             *	}
             */
            return resolve(response.data);
          })
          .catch((error: AxiosError) => {
            let message: string | string[] = '';

            if (!error.response || !error.response.status) {
              // Network error occurred, means could not connect to the server for some reason,
              // Just ignore this
              if (process.browser) {
                console.log(error.message);
              }
              if (dispatch) {
                dispatch({ type: actionTypes.API_REQUEST_FAIL });
              }
              return;
            }

            if (error.response.status === 401 && !url.includes(API_CONFIG.PATH.JWT_LOGIN)) {
              if (process.browser) {
                storageService.clear();
                let loginUrl = URLS.LOGIN as string;
                if (!window.location.pathname.includes(URLS.LOGIN)) {
                  // eslint-disable-next-line max-len
                  loginUrl = `${URLS.LOGIN}?next=${window.location.pathname}${window.location.search}`;
                }
                return window.location.replace(loginUrl);
              }
            }
            if (error.response.data) {
              message =
                error.response.data.message ||
                error.response.data.detail ||
                error.response.data.error ||
                (error.response.data.nonFieldErrors && error.response.data.nonFieldErrors[0]);
            }

            if (!message && error.response.status >= 500) {
              message = 'Un Oh! Server Error';
            }

            if (!message) {
              if (error.response.status >= 500) {
                message = 'Un Oh! Server Error';
              } else {
                if (typeof error.response?.data === 'object') {
                  // eslint-disable-next-line prefer-destructuring
                  message = Object.entries(error.response.data).map(([k, v]) => {
                    return `${k}: ${v}`;
                  })[0];
                } else {
                  message =
                    error.message ||
                    'Uh Oh! An Error occurred, we are working to get this resolved ASAP.';
                }
              }
            }

            reject(message);

            if (dispatch) {
              dispatch({ type: actionTypes.API_REQUEST_FAIL });
              dispatch({
                type: actionTypes.SET_NOTIFICATION,
                payload: { message, type: NotificationType.ERROR }
              });
            }
          });
      });
    };

const httpService = {
  get,
  post,
  put,
  del,
  patch
};

const fetcher = async (url: string, params: any = {}, otherData: any = {}) => {
  try {
    // eslint-disable-next-line no-param-reassign
    params = JSON.parse(params);
    // eslint-disable-next-line no-param-reassign
    otherData = JSON.parse(otherData);
  } catch (e) {}

  return httpService.get(url, params, otherData)();
};

export { fetcher };
export default httpService;
