/**
 * get url params
 * @function
 * @param url {string} like www.hello.com?key=val&k2=v2
 * @return {object} as { key:value }
 */
export const queryString = (url = ''): Record<string, string> => {
  const qs: Record<string, string> = {};
  url.replace(
    /([^?=&]+)(=([^&]*))?/g,
    (substring: string, $1: string, _$2: string, $3: string): string => {
      if ($3 !== undefined) {
        try {
          qs[$1] = decodeURIComponent($3);
        } catch (e) {
          qs[$1] = $3;
        }
      }
      return substring;
    },
  );
  return qs;
};
