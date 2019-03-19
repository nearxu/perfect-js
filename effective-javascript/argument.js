function sumArguments() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function iterator() {
  var i = 0;
  var len = arguments.length;
  var args = arguments;
  return {
    hasNext: function () {
      return i < len;
    },
    pre: function () {
      if (i >= len) {
        throw new Error('end')
      }
      return args[i++]
    }
  }
}