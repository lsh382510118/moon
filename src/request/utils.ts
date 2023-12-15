import { sortUrlParams } from '@/utils/url';
import { parse } from 'qs';

interface ObjectType {
  [key: string]: string;
}
export function isURLSearchParams(val: string | ObjectType) {
  return (
    typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams
  );
}

export function isDate(val: string): boolean {
  return (
    typeof val === 'object' &&
    Object.prototype.toString.call(val) === '[object Date]'
  );
}

export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object';
}

export function getParamObject(val: any) {
  if (isURLSearchParams(val)) {
    return parse(val.toString(), { strictNullHandling: true });
  }
  if (typeof val === 'string') {
    return [val];
  }
  return val;
}

export function mergeRequestOptions(
  options: Record<string, any>,
  options2Merge: Record<string, any> = {},
) {
  return {
    ...options,
    ...options2Merge,
    headers: {
      ...options.headers,
      ...options2Merge.headers,
    },
    data: {
      ...getParamObject(options.params),
      ...getParamObject(options2Merge.params),
    },
    method: (options2Merge.method || options.method || 'post').toLowerCase(),
  };
}

/**
 * 请求异常
 */
export class RequestError extends Error {
  request: any;

  type: any;

  constructor(text: string, request: any, type: any = 'RequestError') {
    super(text);
    this.name = 'RequestError';
    this.request = request;
    this.type = type;
  }
}

/**
 * 响应异常
 */
export class ResponseError extends Error {
  data: any;

  response: any;

  request: any;

  type: string;

  constructor(
    response: any,
    text: string,
    data: Record<string, any>,
    request: any,
    type = 'ResponseError',
  ) {
    super(text || response.statusText);
    this.name = 'ResponseError';
    this.data = data;
    this.response = response;
    this.request = request;
    this.type = type;
  }
}

export function timeout2Throw(
  msec: number,
  timeoutMessage: string,
  request: any,
) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new RequestError(
          timeoutMessage || `timeout of ${msec}ms exceeded`,
          request,
          'Timeout',
        ),
      );
    }, msec);
  });
}

/**
 * Stringify object to query string。
 * opposite to `queryParse`.
 * @param params
 * @example
 * const querystring = queryStringify({
 *   name: 'Yo',
 *   ask: '你好吗?',
 * })
 * assert.equal(querystring, 'name=Yo&ask=%E4%BD%A0%E5%A5%BD%E5%90%97%3F')
 */
export function queryStringify(params: Record<string, string> = {}): string {
  return Object.keys(params)
    .map((key) => {
      let value = params[key];
      // only undefined/null be set to ''
      if (value == null) value = '';
      return `${key}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

/**
 * Add params to an url
 * @param url the target href or querystring
 * @param params the new added params
 * @example
 * addQuery('/path', {a: 3, b: 4}) // '/path?a=3&b=4'
 * addQuery('/path?z=2', {a: 3, b: 4}) // '/path?z=2&a=3&b=4'
 * addQuery('/path?z=2', 'a=3&b=4') // '/path?z=2&a=3&b=4'
 */
export function addQuery(
  url = '',
  params: Record<string, string> | string,
): string {
  if (typeof params !== 'string') {
    params = queryStringify(params);
  }
  const joinSymbol = url.indexOf('?') === -1 ? '?' : '&';
  return url + joinSymbol + params;
}

/**
 * safe get property of object to avoid npe
 * @example
 * 1. get({}, 'a.b.c') will return undefined
 * 2. get({a: {b: {c: 1}}}, 'a.b.c') will return 1
 * 3. get({}, 'a.b.c', 1) will return 1 as default value
 * @function
 * @param obj {object} source object
 * @param nestedProp {string} path
 * @param def {*} default find value
 * @return {*}
 */
export const get = (
  obj: Record<any, any>,
  nestedProp: string,
  def?: any,
): any => {
  if (!obj || !nestedProp) {
    return def;
  }

  const rxAccess = new RegExp('[\\[\\]\\.]+');
  const props = nestedProp.split(rxAccess).filter(Boolean);

  let curr = obj;
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (i === props.length - 1) {
      return curr[prop];
    }
    if (!curr[prop]) {
      return def;
    }
    curr = curr[prop];
  }

  return curr;
};

/**
 * Sleep for millisecond
 * @param ms millisecond
 * @param payload
 * @typeparam T type of the payload
 */
export function sleep<T>(ms: number, payload?: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, ms, payload));
}

// urlencode -> base64 -> rsa256
export function signatureParams(params: any) {
  const { method, url, data, headers } = params;
  if (!method || !url) return false;
  if (method.toUpperCase() === 'GET') {
    const sortUrl = sortUrlParams(url);
    const signStr = `GET ${sortUrl} ${headers.AT ? `${headers.AT}.` : ''}${headers['Request-Time']
      }`;
    return signStr;
  }
  // POST <HTTP_URI> [<AT>.][<Authorization>.]<Request-Time>.<HTTP_BODY>
  const signStr = `POST ${url} ${headers.AT ? `${headers.AT}.` : ''}${headers['Request-Time']
    }.${window.btoa(JSON.stringify(data))}`;
  console.log('🚀 ~ file: utils.ts:215 ~ signatureParams ~ signStr:', signStr);
  return JSON.parse(JSON.stringify(signStr));
}

export function removeQuestionMarkFromUrl(url: string) {
  if (url.endsWith('?')) {
    return url.slice(0, -1);
  }
  return url;
}
