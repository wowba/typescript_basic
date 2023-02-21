// 인터페이스

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
  name: string
  age: number
  isValid?: boolean
}

const me: User = {
  name: "lee",
  age: 12,
  isValid: true
}

const noValid: User = {
  name: 'no valid',
  age: 1
}

//// 인터페이스 함수 타입 - 호출 시그니처 (Call signature)

interface GetName {
  (message: string): string // 문자 데이터를 받아서 문자 데이터를 반환하는 함수.
}
interface NewUser {
  name: string
  age: number
  // getName: GetName
  getName: (message: string) => string
}
const newUser: NewUser = {
  name: "lee",
  age: 12,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}
newUser.getName("hi")

//// 인덱스 가능 타입 - 인덱스 시그니쳐(Index Signature)
//// 인덱스를 이용하여 속성 추가 가능.

// 배열
interface Fruits {
  [item: number]: string
}
const newFruits: Fruits = ['Apple', 'banana', 'tomato']
console.log(newFruits)

// 객체
interface ObjectUser {
  [key: string]: unknown // 대괄호 표기법을 활용하여 객체 내부에 [속성: 값] 추가 가능.
  name: string
  age: number
}
const newLee: ObjectUser = {
  name: "lee",
  age: 12
}
newLee['height'] = 181
console.log(newLee)

//// 인터페이스 확장(상속) - extends

interface Age {
  age: number
}
interface Name {
  name: string
}
interface Human extends Age, Name {
  height: number
}
const human: Human = {
  age: 15,
  name: "kim",
  height: 180
}
