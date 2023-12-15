const { toString } = Object.prototype;

/**
 * assert type
 * @param type
 * @return {function(*=): boolean}
 */
type IsReturnType = (obj: any) => boolean;
const is = (type: string): IsReturnType => {
  return (obj) => {
    return toString.call(obj) === `[object ${type}]`;
  };
};

export const isRegExp = is('RegExp');
export const isString = is('String');
export const isFunction = is('Function');
export const isObject = is('Object');
export const isBoolean = is('Boolean');
export const isNumber = (value: any) =>
  typeof value === 'number' && isFinite(value);

// check if an object is empty (all prop is empty)
export const isObjectEmpty = (object: any) => {
  for (const prop in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, prop) &&
      object[prop] !== ''
    ) {
      return false;
    }
  }
  return true;
};

/**
 * check is string is null or only contain a single space
 * @param str
 * @return {boolean}
 */
export const isEmptyOrSpaces = (str: string | null): boolean => {
  return str === null || str.match(/^ *$/) !== null;
};

/**
 * checking if a string is valid url
 * @function
 * @param str {string}
 * @example
 * isValidURL('https:www.hello-inc.com')---> true
 * isValidURL('hello-inc')---> false
 * @return {boolean}
 */
export const isValidURL = function (str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '?(\\/#)?(\\/[-a-z\\d%_.~+]*)*' + // hash
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locater

  return pattern.test(str);
};

/**
 * @param str
 * @return {boolean}
 */
export const isValidSvg = function (str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\?:svg)?$',
    'i',
  ); // fragment locater

  return pattern.test(str);
};
