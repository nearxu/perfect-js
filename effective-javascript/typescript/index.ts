interface A {
  a: string;
}

interface B {
  b: string
}

let x: A & B; // x.a x.b

interface DateConstructor {
  new(value: number | string | Date): Date
}

interface NoEmpty<T> {
  data: T
}

let x1: NoEmpty<number>;
let y1: NoEmpty<string>;


enum Direction {
  Up,
  Down,
  Left,
  Right
}

const a = Direction.Down;
console.log(a) // 2