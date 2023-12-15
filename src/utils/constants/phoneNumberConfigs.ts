// phone number config
export interface PhoneNumberConfigType {
  name: string;
  validateExpression: RegExp;
  format: string;
}
export type CountryCode = '27' | '62';
export const PHONE_NUMBER_CONFIGS: Record<CountryCode, PhoneNumberConfigType> =
  {
    27: {
      name: 'South Africa',
      validateExpression: /^[0]{1}\d{9}$|^[0-9]{9}$/,
      format: '{3} {3} {4}',
    },
    62: {
      name: 'Indonesia',
      validateExpression: /^[8|9]{1}\d{7,9}$/,
      format: '{3} {3} {4}',
    },
  };
