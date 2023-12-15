/**
 * safe get property of object to avoid npe
 * @example
 * 1. get({}, 'a.b.c') will return undefined
 * 2. get({a: {b: {c: 1}}}, 'a.b.c') will return 1
 * 3. get({}, 'a.b.c', 1) will return 1 as default value
 * @function
 * @param obj {object} source object
 * @param nestedProp {string} path
 * @param def {*} default find value
 * @return {*}
 */
export const get = (
  obj: Record<any, any>,
  nestedProp: string,
  def?: any,
): any => {
  if (!obj || !nestedProp) {
    return def;
  }

  const rxAccess = new RegExp('[\\[\\]\\.]+');
  const props = nestedProp.split(rxAccess).filter(Boolean);

  let curr = obj;
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (i === props.length - 1) {
      return curr[prop];
    }
    if (!curr[prop]) {
      return def;
    }
    curr = curr[prop];
  }

  return curr;
};
