import { isObjectEmpty, isString } from '../detect/typeDetect';
import { serialize } from '../object/serialize';

/**
 * Add params to an url
 * @param url the target href or querystring
 * @param params the new added params
 * @example
 * formatObjToParamStr('/path', {a: 3, b: 4}) // '/path?a=3&b=4'
 * formatObjToParamStr('/path?z=2', {a: 3, b: 4}) // '/path?z=2&a=3&b=4'
 * formatObjToParamStr('/path?z=2', 'a=3&b=4') // '/path?z=2&a=3&b=4'
 */
export function formatObjToParamStr(
  url = '',
  params: Record<string, any> | string,
) {
  if (!isString(params)) {
    params = !isObjectEmpty(params)
      ? serialize(params as Record<string, any>)
      : '';
  }
  if (params) {
    return `${url}${url.indexOf('?') === -1 ? '?' : '&'}${params}`;
  }
  return url;
}
