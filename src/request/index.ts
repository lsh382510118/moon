import Core from './core';
import { mergeRequestOptions } from './utils';

const createInstance = (initOptions = {}) => {
  const coreInstance = new Core(initOptions);
  const instance: any = (
    url: string,
    data?: Record<string, any>,
    options?: Record<string, any>,
  ) => {
    const mergeOptions = mergeRequestOptions(coreInstance.initOptions, options);
    return coreInstance.request(url, data, mergeOptions);
  };

  return instance;
};

const request = createInstance({});

request.create = (options: Record<string, any>) => createInstance(options);

export default request;
