/**
 * update param value from url
 * @function
 * @param uri like 'hello-inc.com?a=b'
 * @param key
 * @param value
 * @return {string}
 * @example updateQuery('hello-inc.com?a=b','a','c') ---> 'hello-inc.com?a=c'
 */
export const updateQuery = (
  uri: string,
  key: string,
  value: number | string,
): string => {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }
  return `${uri + separator + key}=${value}`;
};
