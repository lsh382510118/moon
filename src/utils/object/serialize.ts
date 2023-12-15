import { isObject } from '../detect';

/**
 * Serialize Query String
 * @function
 * @param obj {object}
 * @return {string}
 * @example
 * serialize({
 *   a:b, c:d
 * }) --->  'a=b&c=d'
 */
export const serialize = (obj?: any): string => {
  if (isObject(obj)) {
    const keys = Object.keys(obj);
    return keys
      .map((key) => {
        const k = encodeURIComponent(key);
        const v = encodeURIComponent(obj[key] == null ? '' : obj[key]);
        return `${k}=${v}`;
      })
      .join('&');
  }
  return '';
};
