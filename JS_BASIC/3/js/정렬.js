// 내림차순 9~0
let number = [1,3,5,2,8,7,4,6,9,0];
number.sort((a,b)=>b-a);
console.log(number);
// 오름차순 0~9
number.sort((a,b)=>a-b);
console.log(number);

/** 
 * filter함수
 * array 자료 필터링할때 사용
 * number 배열에서 값이 4보다 작은 요소들을 필터링하여 number2 배열에 저장
 */
let number2 = number.filter(function(a) {
  return a < 4;
});
console.log(number2); // [0, 1, 2, 3]

/** 
 * map함수
 * array 자료 전부 변형하려면 map을 사용
 * 배열에 4곱하기
 */
let number3 = number.map(function(a) {
  return a * 4;
}
);
console.log(number3); // [0, 4, 8, 12, 16, 20, 24, 28, 32, 36]

// 문자열에서는 localeCompare를 사용해야함!!!
// 오름차순 가~하
let arr = ['다','가','나','라','마','바','사','아','자','차','카','타','파','하'];
arr.sort((a,b)=>a.localeCompare(b));
console.log(arr);
// 내림차순 하~가
arr.sort((a,b)=>b.localeCompare(a));
console.log(arr);


// 문자열 만들기
let str = '가나다';
console.log(str.split('')); //문자열을 배열로 만들어줌
console.log(str.split('').reverse()); // 배열을 뒤집어줌
console.log(str.split('').reverse().join('')); // 배열을 문자열로 만들어줌
console.log(str.split('').sort().join('')); // 배열을 정렬해서 문자열로 만들어줌