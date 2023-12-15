export const tryParseJson = (
  jsonString: string,
  defaultResult?: any,
): any | undefined => {
  try {
    return JSON.parse(jsonString) || defaultResult;
  } catch {
    return defaultResult;
  }
};
