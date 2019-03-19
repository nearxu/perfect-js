function container() {
  var store = [];
  return {
    getItem: function (index) {
      return store[index];
    },
    addItem: function (item) {
      var index = store.push(item);
      return index - 1;
    },
    length: function () {
      return store.length;
    }
  }
}

var c = container();
console.log(c);
var index = c.addItem({ name: 'tom' });
console.log(index)
console.log(c.length());
console.log(c.getItem(index))