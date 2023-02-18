// 타입 단언(Assertion)

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
/// ts 는 body 태그가 실제로 존재하는지 모름.
/// 따라서 어떤 타입이 리턴되는지 단언해주면 에러를 표시하지 않음.
const el1 = document.querySelector('body') as HTMLBodyElement
el1.textContent = "hello world"

const el2 = document.querySelector('body')
el2!.textContent = "hello world" // el2 는 null 이 아니다 라고 선언

const el3 = document.querySelector("notExist")
/// 아래와 같이 존재하지 않는 데이터는 false 를 반환하므로 자바스크립트 if 구문을 통해 예방 가능.
if (el3) {
  el3.textContent = "it will never show up"
}

/// 아래와 같이 유니온 타입인 경우 어떤 타입에서 메소드를 호출하는지
/// 타입 단언을 통해 명시해야 할 필요가 있음.

// 2)
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2))
  }
}

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}

// 할당 단언
let num1!: number // ! 를 이용하여 값이 할당된 것 처럼 ts 를 속이는것.
console.log(num1)