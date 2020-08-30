import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

const prefix = 'v1';

const API_CONFIG = {
  BASE_URL: `${process.env.BASE_URL}`,
  PATH: {
    LOGIN: `${prefix}/user/login`
  }
};

const getUrl = (url: string, params: any = {}): string => {
  let urlString = `${API_CONFIG.BASE_URL}/api/${url}`;
  if (params && !isEmpty(params)) {
    urlString += `?${queryString.stringify(params)}`;
  }
  return urlString;
};

export { API_CONFIG, getUrl };

export const SECRET_KEY = 'adsfghjkla2312safaaszAS';
