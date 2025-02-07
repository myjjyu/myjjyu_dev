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