/**
 * Add params to an url
 * @param url the target href or querystring
 * @param params the new added params
 * @example
 * sortUrlParams('/path?b=1&a=2') // '/path?a=2&b=1'
 */

import { queryString } from "./queryString";

// export function sortUrlParams(url: string): string {
//   const paramsStartIndex = url.indexOf('?');
//   if (paramsStartIndex === -1) {
//     return url;
//   }

//   const paramsString = url.slice(paramsStartIndex + 1);
//   const searchParams = new URLSearchParams(paramsString);

//   const sortedParams = Array.from(searchParams.entries())
//     .sort((a, b) => a[0].localeCompare(b[0]));

//   const sortedQueryString = sortedParams
//     .map(param => param.join('='))
//     .join('&');

//   return url.slice(0, paramsStartIndex + 1) + sortedQueryString;
// }

export function sortUrlParams(url: string) {
  // 获取参数部分
  const paramsStartIndex = url.indexOf('?');
  if (paramsStartIndex === -1) {
    return url; // 没有参数则直接返回原始URL
  }
  const query = queryString(url);
  // 排序参数
  const sortedParams = Object.entries(query).sort((a, b) => a[0].localeCompare(b[0]));
  // 构建排序后的查询字符串
  const sortedQueryString = sortedParams
    .map((param) => param.join('='))
    .join('&');
  // 返回结果
  return url.slice(0, paramsStartIndex + 1) + sortedQueryString;
}

/**
 * Add params to an url
 * @param url the target href or querystring
 * @param params the new added params
 * @example
 * sortUrlParams('/path?b=1&a=2') // '/path?a=2&b=1'
 */
// export function sortUrlParams(url: string): string {
//   const paramsStartIndex = url.indexOf('?');
//   if (paramsStartIndex === -1) {
//     return url;
//   }

//   const paramsString = url.slice(paramsStartIndex + 1);
//   const searchParams = new URLSearchParams(paramsString);
//   const sortedParams: string[][] = [];

//   // for (const [key, value] of Array.from(searchParams.entries())) {
//   //   if (value) { // 如果参数值存在且不为空
//   //     sortedParams.push([key, value]);
//   //   }
//   // }

//   sortedParams.sort((a, b) => a[0].localeCompare(b[0]));

//   if (sortedParams.length === 0) {
//     return url.slice(0, paramsStartIndex); // 如果没有有效的参数，则删除参数部分
//   }

//   const sortedQueryString = sortedParams.map(param => param.join('=')).join('&');
//   return url.slice(0, paramsStartIndex + 1) + sortedQueryString;
// }
