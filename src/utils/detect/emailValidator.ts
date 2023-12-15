/**
 * email vaildator
 * Expression source: https://github.com/any86/any-rule/blob/master/packages/www/src/RULES.js
 * @param {string} value
 * @returns {boolean}
 * e.g. emailValidator('123@123') => false
 * e.g. emailValidator('123@123.com') => true
 */

export const emailValidator = (value: string): boolean => {
  const rule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rule.test(value);
};
