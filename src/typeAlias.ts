// 타입 별칭
//// 타입을 정의해서 사용할 수 있음.

type TypeA = string
type TypeB = string | number | boolean

type AliasUser = {
  name: string
  age: number
} | [string, number]

const aliasUserA: AliasUser = {
  name: "kim",
  age: 23
}
const aliasUserB: AliasUser = ["lee", 34]

// 인터페이스와 타입의 차이
type TypeUser = {
  name: string
  age: number
}
interface InterfaceUser {
  name: string
  age: number
}

// 위 두 타입을 아래 객체의 타입으로 지정해도 기능적으로 다른 부분은 없지만
// 기본적으로 인터페이스는 객체를 전제하고 사용하기 때문에 
// 객체에 지정하는 타입일 경우에는 보통 인터페이스,
// 타입 키워드의 경우 유니온 타입을 지정하는데 사용하는것이 좋다고 한다.
const newObject = {
  name: "lee",
  age: 123
}