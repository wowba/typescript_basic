// 라이브러리 설치시 js 파일을 가져오므로 ts가 필요한 타입 지정이 되어있지 않아 에러가 발생한다.
// 이 경우 해당 라이브러를 위한 dts 파일을 작성해야 한다. (lodash.d.ts)

// 혹은 다른 개발자들이 미리 선언해놓은 npm 모듈을 사용할 수 있다.
// npm info @types/lodash 로 해당 라이브러리가 존재하는지 확인 후
// npm i @tyoes/lodash -D 로 개발 의존성으로 라이브러리를 설치.
import _ from 'lodash'

const str = "hello world"

console.log(_.camelCase(str))
console.log(_.snakeCase(str))