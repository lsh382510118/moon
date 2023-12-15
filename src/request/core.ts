import { stringify } from 'qs';
import baseFetch from './internal/baseFetch';
import paramsSerialize from './internal/paramsSerialize';
import {
  mergeRequestOptions,
  removeQuestionMarkFromUrl,
} from './utils';

const ua = window.navigator.userAgent;
const IS_IN_BROWSER_DEBUG = /inbrowserdebug/i.test(ua);
class Core {
  static requestInterceptors: any[] = [];

  static responseInterceptors: any[] = [];

  static requestUse(handler: () => Record<string, any>) {
    Core.requestInterceptors.push(handler);
  }

  static responseUse(handler: () => any) {
    Core.responseInterceptors.push(handler);
  }

  initOptions: any;


  constructor(initOptions: any) {
    this.initOptions = initOptions;
  }

  extendOptions(options: Record<string, any>) {
    this.initOptions = mergeRequestOptions(this.initOptions, options);
  }

  // 执行请求前拦截器
  dealRequestInterceptors(ctx: Record<string, any>) {
    const reducer = (p1: Promise<any>, p2: any) =>
      p1.then((ret: Record<string, any> = {}) => {
        ctx.req.url = ret.url || ctx.req.url;
        ctx.req.options = ret.options || ctx.req.options;
        return p2(ctx.req.url, ctx.req.options);
      });
    const allInterceptors = [...Core.requestInterceptors];
    return allInterceptors
      .reduce(reducer, Promise.resolve())
      .then((ret: Record<string, any> = {}) => {
        ctx.req.url = ret.url || ctx.req.url;
        ctx.req.options = ret.options || ctx.req.options;
        return Promise.resolve();
      });
  }

  async request(url: string, data = {}, options: Record<string, any>) {
    const { noContainer } = options;
    /**
     * 1、配置参数、config
     * 2、调用请求方式fetch、RPC
     * 3、处理返回结果
     */

    const originOptions = this.initOptions;
    let tokenData: any = {};
    if (IS_IN_BROWSER_DEBUG) {
      tokenData.accessToken = sessionStorage.getItem('developToken');
    } else {
      tokenData &&
        sessionStorage.setItem('developToken', tokenData?.accessToken || '');
    }
    data = {
      ...data,
      ...options?.data,
      ...options?.params,
      ...originOptions?.data,
    };
    // 先合并所有的config
    let newConfig: any = {
      ...originOptions,
      ...options,
      url,
      headers: {
        ...originOptions.headers,
        ...options.headers,
        AT: tokenData?.accessToken || '',
        'client-language': 'ES',
        'Request-Time': Date.now(),
      },
      data,
    };

    // 处理请求方法，请求参数
    const { requestType = 'json' } = newConfig;
    const method = (newConfig.method || 'POST').toUpperCase();
    if (method === 'GET') {
      const urlSign = url.indexOf('?') !== -1 ? '&' : '?';
      const serializedParams = paramsSerialize(data);
      newConfig.url = removeQuestionMarkFromUrl(
        `${newConfig.url}${urlSign}${serializedParams}`,
      );
      delete newConfig.body;
    } else {
      const dataType = Object.prototype.toString.call(data);
      if (dataType === '[object Object]' || dataType === '[object Array]') {
        if (requestType === 'json') {
          newConfig.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            ...newConfig.headers,
            ...options.headers,
          };
          newConfig.body = JSON.stringify(data);
        } else if (requestType === 'form') {
          newConfig.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            ...options.headers,
          };
          newConfig.body = stringify(data, {
            arrayFormat: 'repeat',
            strictNullHandling: true,
          });
        }
      } else {
        // 其他 requestType 自定义header
        newConfig.headers = {
          Accept: 'application/json',
          ...newConfig.headers,
        };
        newConfig.body = data;
      }
    }


    // fetch sofaapi
    if (originOptions.sofaConfig?.gatewayUrl) {
      newConfig = {
        ...newConfig,
        url: originOptions.sofaConfig.gatewayUrl,
        headers: {
          ...newConfig.headers,
          'Content-Type': 'application/json',
          'Operation-Type': url,
          Version: '2.0',
          [`X-CORS-${originOptions.sofaConfig?.appId}-${originOptions.sofaConfig?.workspaceId}`]:
            '1',
        },
      };
      delete newConfig.sofaConfig;
    }

    let promise: Promise<any>;
    try {
      promise = baseFetch(newConfig);
    } catch (error) {
      promise = Promise.reject(error);
    }

    return promise;
  }
}

export default Core;
