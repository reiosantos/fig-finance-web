import { STRINGS } from '../constants/constants';
import storageService from '../services/storage.service';

/**
 * function to get user access token
 */
const getAccessToken = (): false | string => {
  try {
    const data = storageService.get(STRINGS.TOKEN_KEY);
    return data && data.token ? data.token : false;
  } catch (e) {
    return false;
  }
};

const AuthStorage = { getAccessToken };

export default AuthStorage;
