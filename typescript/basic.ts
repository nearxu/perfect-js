// class

class Foo {}
interface Foo1 {}
type Foo2 = {};

let bar: Foo | Foo1 | Foo2;

// T
function reverse<T>(items: T[]): T[] {
  const arr = [];
  for (let i = items.length; i--; i >= 0) {
    arr.push(items[i]);
  }
  return arr;
}

//

declare const myPoint: { x: number; y: number };
// ===
interface Point {
  x: number;
  y: number;
}

declare const myPoints: Point;

// interface Crazy{
//   new():{
//     hello:number
//   }
// }

// class CrazyClass implements Crazy{
//   constructor(){
//     return {hello:123}
//   }
// }

// const crazy = new CrazyClass();

enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red;
col = 0;

function foo(bar: number, bas?: string): void {
  console.log(bar + bas);
}

// 类型断言
interface Foo {
  bar: number;
  bas: string;
}
const foos = {} as Foo;
foos.bar = 123;
foos.bas = "123";

class Queue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

// fetch
const getJson = <T>(config: {
  url: string;
  header?: { [key: string]: string };
}): Promise<T> => {
  const fetchConfig = {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return fetch(config.url, fetchConfig).then<T>(response => response.json());
};

export interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface User {
  name: string;
  age: number;
}

import axios from "axios";

export function getUser<T>() {
  return axios
    .get<ResponseData<T>>("/some")
    .then(res => res.data)
    .catch(err => console.error(err));
}

async function getUserData() {
  const user = await getUser<User>();
}
