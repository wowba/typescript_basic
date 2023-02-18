// 타입 종류

/// 문자
let str: string = "Hello world"
console.log("string :", str)

/// 숫자
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity

/// 불린
let isBoolean: boolean = false

/// Null / Undefined (두 경우 직접 타입을 지정하는 일은 거의 없음)
let nul: null
let und: undefined

/// 배열
const fruits: string[] = ["Apple", "Banana", "Tomato"]
const numbers: number[] = [1,2,3,4,5,6]
const union: (string|number)[] = [1,"qwer", 2, 3] // | 을 이용한 유니온 타입. 유니온 타입을 선언할 경우 소괄호로 항상 묶어줘야 한다

/// 객체
const obj: object = {} //// object 타입의 경우 typeof 키워드 사용시 여러개가 나옴. 잘 사용하지 않음.
//// 객체의 경우 아래와 같이 각 속성에 대한 타입을 지정해서 사용한다.
const user: {
  name: string,
  age: number
} = {
  name: "lee",
  age: 1
}
//// 각 객체 선언시 타입을 지정하지 않고, 인터페이스를 사용한다.
//// 인터페이스는 타입처럼 선언할 수 있다.
interface User {
  name: string,
  age: number
}
const userA: User = {
  name: "lee",
  age: 1
}

/// 함수
const add: (x: number, y: number) => number = function (x, y) {
  return x + y
}
const a: number = add(1, 2)

const hello = function (): void {
  console.log("hello world")
}
const h: void = hello() // ts는 js와 달리 함수가 return 값이 없을 경우 void 타입을 리턴한다.