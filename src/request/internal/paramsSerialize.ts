import { stringify } from 'qs';
import { isDate, isObject, isURLSearchParams } from '../utils';

export type paramsType = Record<string, any>;

function paramsSerialize(
  params: paramsType,
  paramsSerializer?: (e: paramsType) => {},
) {
  let serializedParams;
  let jsonStringifiedParams: any;
  // 支持参数自动拼装，其他 method 也可用，不冲突
  if (params) {
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else if (Array.isArray(params)) {
      jsonStringifiedParams = [];
      params.forEach((item: any) => {
        if (item === null || typeof item === 'undefined') {
          jsonStringifiedParams.push(item);
        } else {
          jsonStringifiedParams.push(
            isObject(item) ? JSON.stringify(item) : item,
          );
        }
      });
      // a: [1,2,3] => a=1&a=2&a=3
      serializedParams = stringify(jsonStringifiedParams, {
        arrayFormat: 'repeat',
        strictNullHandling: true,
      });
    } else {
      jsonStringifiedParams = {};

      Object.keys(params).forEach((value, key) => {
        let jsonStringifiedValue = value;
        if (value === null || typeof value === 'undefined') {
          jsonStringifiedParams[key] = value;
        } else if (isDate(value)) {
          jsonStringifiedValue = (value as unknown as Date).toISOString();
        } else if (Array.isArray(value)) {
          jsonStringifiedValue = value;
        } else if (isObject(value)) {
          jsonStringifiedValue = JSON.stringify(value);
        }
        jsonStringifiedParams[value] = params[value];
      });

      const tmp = stringify(jsonStringifiedParams, {
        arrayFormat: 'repeat',
        strictNullHandling: true,
      });
      serializedParams = tmp;
    }
  }
  return serializedParams;
}

export default paramsSerialize;
