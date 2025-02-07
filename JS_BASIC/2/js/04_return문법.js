// VAT 계산 예제(부가세)
// 55555에 대한 VAT를 계산하고 결과를 출력합니다.
console.log(vat(55555));

// 주어진 값에 대해 VAT를 계산하는 함수
function vat(a) {
  // 입력값에 1.1을 곱하여 VAT를 계산하고 소수점 첫째 자리까지 반올림합니다.
  let num = (a * 1.1).toFixed(1);
  // 문자열로 반환된 반올림 값을 부동 소수점 숫자로 변환하여 반환합니다.
  return parseFloat(num);
}

// ✅ parseInt()는 정수로,
// ✅ parseFloat()는 실수로 변환

/**
 *  함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어보기
 */
console.log(함수(1, 30));

function 함수(min, sec) {
  let result = (a * 60 + b) * 1000;
  return result;
}

console.log(함수(2, 10));

function 함수(min, sec) {
  let result = (min * 60 + sec) * 1000;
  return result;
}

/**
 *  가격을 파라미터로 입력하면 10% 할인된 가격을 뱉는 함수 만들기
 */
console.log(함수(70, false)); // 함수 호출: 70의 10% 할인된 가격을 계산하고 false일 경우 추가 할인을 적용하지 않음

function 함수(a, b) {
  var result = a * 0.9; // 입력된 가격 a에 10% 할인을 적용
  if (b == true) {
    // b가 true일 경우 추가 할인을 적용
    result = result - 1.5; // 추가로 1.5를 할인
  }
  return parseFloat(result.toFixed(2)); // 결과를 소수점 둘째 자리까지 반올림하여 반환
}
