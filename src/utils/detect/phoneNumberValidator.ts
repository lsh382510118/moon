import type { CountryCode } from '../constants/phoneNumberConfigs';
import { PHONE_NUMBER_CONFIGS } from '../constants/phoneNumberConfigs';

/**
 * phoneNumberValidator
 * @param {string} value
 * @returns {boolean}
 * e.g. phoneNumberValidator('12345678', '27') => false
 * e.g. phoneNumberValidator('123456789', '27') => true
 * e.g. phoneNumberValidator('023456789', '27') => true
 * e.g. phoneNumberValidator('1234567890', '27') => false
 * e.g. phoneNumberValidator('0123456789', '27') => true
 */

export const phoneNumberValidator = (
  value: string,
  countryCode?: CountryCode,
): boolean => {
  const code = (countryCode ||
    Object.keys(PHONE_NUMBER_CONFIGS)[0]) as CountryCode;
  const phoneNumberConfig = PHONE_NUMBER_CONFIGS[code];
  if (phoneNumberConfig) {
    return phoneNumberConfig.validateExpression.test(value);
  }
  return false;
};
