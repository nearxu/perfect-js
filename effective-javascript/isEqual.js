const isEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Data) {
    return a.getTime() === b.getTime()
  }
  if (a === null || a === undefined || b === null || b === undefined) {
    return false;
  }
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }
  if (a.prototype !== b.prototype) return false'
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  Object.keys(a).every(m => isEqual(a[m], b[m]));
}

// array.prototype.every(cb) => true false;
var evenNums = [1, 2, 3, 4, 5].every(m => m > 3)