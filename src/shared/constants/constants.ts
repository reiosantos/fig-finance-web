import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

const prefix = 'v1';

export const SECRET_KEY = process.env.SECRET_KEY || '';

const API_CONFIG = {
  BASE_URL: `${process.env.BASE_URL}`,
  PATH: {
    LOGIN: `${prefix}/user/login`,
    JWT_LOGIN: `${prefix}jwt/login`,
    EVENTS: `${prefix}events/recommendations`,
  }
};

export const STRINGS = {
  USER_KEY: 'user',
  TOKEN_KEY: 'token'
};

export enum URLS {
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  DASHBOARD = '/dashboard',
  HOME = '/dashboard'
}


const getUrl = (url: string, params: any = {}): string => {
  let urlString = `${API_CONFIG.BASE_URL}/api/${url}`;
  if (params && !isEmpty(params)) {
    urlString += `?${queryString.stringify(params)}`;
  }
  return urlString;
};

export { API_CONFIG, getUrl };
