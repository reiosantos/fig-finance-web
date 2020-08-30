import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/constants';

/**
 * function to get user access token
 */
const getAccessToken = (): boolean | string => {
  try {
    const data = localStorage.authData;
    if (data) {
      const bytes = CryptoJS.AES.decrypt(data.toString(), SECRET_KEY);
      const decryptedData: any = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData && decryptedData.access_token ? decryptedData.access_token : false;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const authService = {
  getAccessToken
};

export default authService;
