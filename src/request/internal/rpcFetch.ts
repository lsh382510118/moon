import { ERROR, TIMEOUT } from '../constents';
import { sleep } from '../utils';

export default function rpcFetch(config: any) {
  const data = config?.data ?? {};
  return new Promise((resolve) => {
    // log
    const promise = fetch({
      operationType: config.url,
      requestData: Array.isArray(data) ? data : [data],
      headers: config?.headers ?? {},
      ...config,
    })
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        // 网络异常或网关异常都会进入catch中
        if (err?.success === false) {
          if (err?.errorCode === '2000') {
            err.errorCode = ERROR.LOGIN;
          } else if (err?.errorCode === '4001') {
            err.errorCode = ERROR.TIMEOUT;
          }
          return err;
        }
        // 未知、网络异常
        return {
          success: false,
          errorCode: ERROR.NETWORK,
          result: {
            httpStatus: err,
          },
        };
      });

    /**
     * add timeout for fetch.
     * if fetch timeout, resove with {errorCode: TIMEOUT}
     */
    Promise.race([
      promise,
      sleep(config.timeout || TIMEOUT).then(() => ({
        success: false,
        errorCode: ERROR.TIMEOUT,
        errorMessage: ERROR.NETWORK,
      })),
    ])
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        resolve({
          success: false,
          errorCode: ERROR.NETWORK,
          errorMessage: ERROR.NETWORK,
          result: {
            httpStatus: e,
          },
        });
      });
  });
}
