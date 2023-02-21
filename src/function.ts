// 함수 - 명시적 this
// this에 어떤 타입이 들어갈 지 모르기 때문에 명시적으로 정의하는 문법.
interface Cat {
  name: string
  age: number
}
const cat: Cat = {
  name: "lee",
  age: 5
}

// 일반함수 내에서의 this 는 호출 하는 위치에서 정의
// 타입스크립트에서는 this 라는 인자를 넣는것이 아닌, this에 들어갈 타입을 정의 가능한 문법.
function helloCat(this: Cat, message: string) {
  console.log(`hello ${this.name}, ${message}`)
}
// call() 메소드는 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출합니다.
helloCat.call(cat, "hello cat")


// 함수 - 오버로딩
// 1) 각기 다른 타입을 인자로 가진 함수를 각각 선언
function add1(a: string, b: string) {
  return a + b
}
function add2(a: number, b: number) {
  return a + b
}
add1("1", "2")
add2(1, 2)

// 2) 함수 오버로딩 사용
// 구현부를 따로 만들어 하나의 함수를 통해 각 타입을 지원하게 함.
function overAdd(a: string, b: string): string // 타입 선언 1
function overAdd(a: number, b: number): number // 타입 선언 2
function overAdd(a: any, b:any) { // 함수 구현
  return a + b
}
overAdd("1", "2")
overAdd(1, 2)