import { ERROR, TIMEOUT } from '../constents';
import { sleep } from '../utils';
import fomatGetwayError from './fomatGetwayError';

interface ConfigType {
  returnType?: 'result' | 'body';
  [key: string]: any;
}
export default function baseFetch(config: ConfigType) {
  return new Promise((resolve) => {
    const method = (config.method || 'POST').toUpperCase();
    const promise = fetch(config.url, {
      ...config,
      method,
      // credentials: 'include',
      body: method === 'GET' ? null : JSON.stringify(config.data),
      headers: {
        ...config.headers,
      },
    })
      .then(async (response) => {
        const { headers } = response;
        const error = fomatGetwayError({
          Tips: headers.get('Tips'),
          Memo: headers.get('Memo'),
        });
        if (error) {
          return error;
        }
        if (response.ok) {
          let body: any;
          try {
            body = await response.json();
            if (config?.returnType === 'body') return body;
            const { resultCode, result } = body;
            return result || body;
          } catch (e) {
            return {
              success: false,
              errorCode: ERROR.SYSTEM,
              result: {
                httpStatus: response.text(),
              },
            };
          }
        } else {
          return {
            success: false,
            errorCode: ERROR.SYSTEM,
            result: {
              httpStatus: response.status,
            },
          };
        }
      })
      .catch((res) => {
        return {
          success: false,
          errorCode: ERROR.NETWORK,
          result: {
            httpStatus: res,
          },
        };
      });

    /**
     * add timeout for fetch.
     * if fetch timeout, resove with {errorCode: TIMEOUT}
     */
    Promise.race([
      promise,
      sleep(config.timeout  || TIMEOUT).then(() => ({
        success: false,
        errorCode: ERROR.TIMEOUT,
        resultMsg: 'No pudimos completar tu solicitud.\nInténtalo más tarde.',
      })),
    ])
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        resolve({
          success: false,
          errorCode: ERROR.NETWORK,
          result: {
            httpStatus: e,
          },
        });
      });
  });
}
