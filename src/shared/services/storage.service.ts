import * as CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/constants';

class StorageServiceImpl {
  localStorage = localStorage;

  get = (key: string): string | null | any => {
    if (!this.localStorage) {
      return false;
    }
    const d = this.localStorage.getItem(key) || '';
    try {
      const bytes = CryptoJS.AES.decrypt(d, SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      return d;
    }
  };

  set = (key: string, value: any): void => {
    if (!this.localStorage) {
      return;
    }
    if (typeof value !== 'string') {
      // eslint-disable-next-line no-param-reassign
      value = JSON.stringify(value);
    }
    const bytes = CryptoJS.AES.encrypt(value, SECRET_KEY);
    this.localStorage.setItem(key, bytes.toString());
  };

  delete(key: string): void {
    if (!this.localStorage) {
      return;
    }
    this.localStorage.removeItem(key);
  }

  clear(): void {
    if (!this.localStorage) {
      return;
    }
    this.localStorage.clear();
  }
}

let storageService = {
  get: (key: string) => ({} as any),
  set: (key: string, value: any) => {},
  delete: (key: string) => {},
  clear: () => {}
};

if (process.browser) {
  storageService = new StorageServiceImpl();
}

export default storageService;
