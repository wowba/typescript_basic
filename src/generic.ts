// 제네릭

/// 함수
interface Obk {
  x: number
}
type Arr = [number, number]

// 제너릭을 사용하여 동일한 타입을 가지게 설계
// 일반적으로 제너릭은 T 라고 명시한다.
function toArray<T>(a: T, b: T) {
  return [a, b]
}

console.log(
  toArray(123, 123), // 타입 추론 사용
  // toArray('lee', 123) // 인자가 동일한 타입이 아니여서 에러 발생
  toArray<string>("lee", "park"), // <> 내부에 타입 선언.
  toArray<Arr>([1,2],[3,4])
)

/// 클래스
//// 선언시 제네릭을 사용하여 입력할 속성(인터페이스)을 구분 가능.
class ClassUser<P> {
  constructor(public payload:P) {}
  getpayload() {
    return this.payload
  }
}
interface UserAType {
  name: string
  age: number
}
const userAType = new ClassUser<UserAType>({
  name: "lee",
  age: 12
})
console.log(userAType.getpayload())

/// 인터페이스, 제약 조건(Constraints)
//// 제네릭에 확장(상속) 키워드 extends를 사용하여 들어갈 수 있는 타입 제한이 가능하다.
interface MyData<T extends string | number> {
  name: string,
  value: T
}
const dataA: MyData<string> = {
  name: "lee",
  value: "value"
} 
