// 내림차순 9~0
let number = [1,3,5,2,8,7,4,6,9,0];
number.sort((a,b)=>b-a);
console.log(number);
// 오름차순 0~9
number.sort((a,b)=>a-b);
console.log(number);


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