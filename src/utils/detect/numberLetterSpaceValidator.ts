/**
 * numberLetterSpaceValidator
 * @param {string} value
 * @returns {boolean}
 * e.g. numberLetterSpaceValidator('12345678') => true
 * e.g. numberLetterSpaceValidator('name') => true
 * e.g. numberLetterSpaceValidator('test123') => true
 * e.g. numberLetterSpaceValidator('My home') => true
 * e.g. numberLetterSpaceValidator('wang_ ppu') => false
 */

export const numberLetterSpaceValidator = (value: string): boolean => {
  return /^[a-zA-Z0-9 ]*$/.test(value);
};
