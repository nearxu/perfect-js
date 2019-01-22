// == vs  ===     typeof vs instanceof    Object.prototype.toString.call(1) === [object,number]

//typeof  基本类型可以使用

// typeof null   object
// null === null  true NaN == NaN  false

// instanceof

function a(params) {}
function b(){}

var o= new a();

//
// 判断一个实例是否是其父类型或者祖先类型的实例。
o instanceof a // true 用来判断某个构造函数的prototype属性是否存在于另外一个要检测对象的原型链上