// 타입 가드
//// 파라미터로 들어오는 타입의 종류로 인한 에러를 if 조건을 통해 사전에 방지.
function logText(el: Element) {
  console.log(el.textContent)
}

const h1El = document.querySelector('h1')
if (h1El) {
  logText(h1El)
}

if (h1El instanceof HTMLHeadingElement) {
  logText(h1El)
}