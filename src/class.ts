// 클래스

// 접근 제어자(Access Modifiers)
/// 클래스의 각 속성에는 접근 제어자를 선언해야 한다. 클래스 바디에서 생략 가능하다.
/// public - 어디서나 자유롭게 접근 가능
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클래스 에서만 접근 가능

class UserA {
  // first: string = ''
  // protected last: string = ''
  // private age: number = 0 // userB, userC는 사용 불가
  // constructor(first: string, last: string, age: number) {
  //   this.first = first
  //   this.last = last
  //   this.age = age
  // }

  // 위의 속성 및 생성자 내용을 아래 생성자 문법처럼 축약이 가능하다.
  constructor(
    public first: string = '', // 생성자 함수 내에서는 public 생략 불가
    public last: string = '',
    public age: number = 0
  ) {}
  getFitst() {
    return `${this.first} ${this.last} ${this.age}`
  }
}

class UserB extends UserA {
 getFirst() {
  return `${this.first} ${this.last} ${this.age}`
 }
}

class userC extends UserB {
  getFirst() {
    return `${this.first} ${this.last} ${this.age}`
   }
}

const neo = new UserA("Lee", "Young", 15)
console.log(neo.first)
console.log(neo.last)
console.log(neo.age)