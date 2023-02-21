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

/// Any
let thisIsAny: any = "123"
thisIsAny = 123
thisIsAny = false // any 타입은 아무 타입의 데이터를 할당할 수 있다.

/// Unknown
//// any 타입보다 좀 더 엄격하게 unknown 타입을 사용하자.
const u: unknown = 123

/// Tuple
/// 반드시 타입의 개수, 위치와 동일하게 데이터가 들어와야 한다.
const tuple: [string, number, boolean] = ['a', 1, true]

/// Void
//// 리턴 타입을 명시하지 않은 함수에서 반환되는 타입

/// Never 절대 발생하지 않을 값을 의미.
//// 아래는 배열 내부에 타입을 지정할 수 없으므로 Never 타입 에러가 발생한다.
const nev: [] = []
// nev.push(3)

/// Union
let unionType: string | number | boolean
unionType = "123"
unionType = 123
unionType = true

/// Intersection
interface person {
  name: string,
  age: number
}
interface validation {
  isValid: boolean
}
//// 여러 인터페이스를 합쳐서 사용하는 것을 인터섹션이라고 한다.
const lee: User & validation = { // 만약 모든 인터페이스의 속성이 선언되어있지 않으면 에러가 발생한다.
  name: "lee",
  age: 12,
  isValid: true
}

// 타입 추론
//// 타입스크립트는 타입을 추론하기 때문에 모든 부분에 타입을 선언할 필요는 없음.

// 1) 초기화 된 변수
let num = 123 // 변수 num의 타입은 number로 초기화
// num = "hello" 에러 발생

// 2) 기본값이 설정된 매개 변수, 3) 반환 값이 있는 함수
function addd(a: number, b = 2) {
  return a + b
}

