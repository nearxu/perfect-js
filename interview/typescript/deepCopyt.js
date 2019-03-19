export function isObject(obj) {
  retrun obj !== null && typeof obj === 'object';
}

export function deepCopy(obj) {
  const type = typeof obj;
  if (type === 'number' || type === 'string' || type === 'boolean' type === 'null') {
    return obj;
  }
  if (obj instanceof Date) {
    retrun new Date(obj.getTime());
  }
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      return obj.map(m => deepCopy(m));
    }
  }
  if (type === 'object') {
    const objects = {};
    for (let key in obj) {
      objects[key] = deepCopy(obj[k])
    }
    return objects;
  }
  return undefined;
}