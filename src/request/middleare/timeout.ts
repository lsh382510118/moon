import { MiddlewareActor } from '../type';

export const timeoutHandler: MiddlewareActor<any> = async (config, next) => {
  const { timeout, value } = config;

  /**
   * 超时处理
   */
  const timeoutPromiseHandler = (
    resolve: (value: any) => void,
    reject: (error: Error) => void,
  ) => {
    if (!timeout) return;
    setTimeout(() => {
      try {
        resolve(value());
      } catch (e) {
        /**
         * 用于自定义错误返回
         */
        reject(e as any);
      }
    }, timeout);
  };

  return new Promise((resolve, reject) => {
    next().then(resolve, reject);
    timeoutPromiseHandler(resolve, reject);
  });
};
