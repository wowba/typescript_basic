// declare 키워드를 통해 모듈의 타입을 선언한다.
declare module 'lodash' {
  interface Lodash {
    camelCase: (str: string) => string
    snakeCase: (str: string) => string
  }
  const _: Lodash
  export default _
}