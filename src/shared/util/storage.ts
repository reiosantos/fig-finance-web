import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/constants';

export const saveData = (key: string, data: any) => {
  const bytes = CryptoJS.AES.encrypt(JSON.stringify(data.toString()), SECRET_KEY);
  localStorage.setItem(key, bytes.toString());
};

export const getData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return false;
  } catch (e) {
    return false;
  }
};

const Storage = {
  saveData,
  getData
};

export default Storage;
