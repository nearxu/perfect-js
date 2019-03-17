function printLabel(obj: LabelVal) {
  console.log(obj.label);
}

interface LabelVal {
  label: string;
}

let myObj = { size: 10, label: 'size is 10' };
printLabel(myObj);

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


// 泛型
function identity<T>(arg: T): T {
  return arg;
}

function identitys(arg: number): number {
  return arg;
}

const fillArray = <T>(len: number, ele: T) => {
  return new Array<T>(len).fill(ele)
}

const newArr = fillArray<string>(3, 'h1');


// 枚举
enum response {
  // no = 0,
  // yes = 1
  NO,
  YES
}

response.NO
response.YES


function padLeft(value: string, padding: string | number | any) {
  if (padding === 'number') {
    return Array(padding + 1).join(" ") + value;
  }
  if (padding === 'string') {
    return padding + value;
  }
  throw new Error('string and number')
}
