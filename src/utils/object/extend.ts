function allkeys(obj: any) {
  const type = typeof obj;
  if (!obj || (type !== 'function' && type !== 'object')) {
    return [];
  }
  const keys = Object.keys(obj);
  return keys;
}

export function extend(obj: Record<any, any>, ...args: any[]) {
  const { length } = args;
  if (length === 0 || obj == null) return obj;
  for (let index = 0; index < length; index++) {
    const source = args[index];
    const keys = allkeys(source);
    const l = keys.length;
    for (let i = 0; i < l; i++) {
      const key = keys[i];
      obj[key] = source[key];
    }
  }
  return obj;
}
