/**
 * 📌 최대한 마실수 있는 커피양 계산
 * 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다
 * 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해줍니다.
 * 그럼 처음 주문한 커피양에 따라서 최대한 마실수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다
 */

// ✅ 방법1
const firstCoffee = 360;

let secondCoffee = (firstCoffee * 2) / 3;
let thirdCoffee = (secondCoffee * 2) / 3;

let totalCoffee = firstCoffee + secondCoffee + thirdCoffee;

console.log("최대한 마실 수 있는 커피양 : " + totalCoffee + "ml");

// ✅ 방법2
const first = 360;
let total = 0;

total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3

console.log("최대한 마실 수 있는 커피양 : " + total + "ml");



/**
 * 📌 최대한 마실수 있는 커피양 계산
 * 커피리필을 무한으로 해준다면 처음 담아주는 커피가 360ml일때 총 몇 ml를 마실 수 있을까요?
 */
const initialCoffee = 360; // 처음 담아주는 커피양
const refillRate = 0.9; // 리필할 때마다 줄어드는 비율 (예: 90% 리필)

const sumCoffee = initialCoffee / (1 - refillRate);

console.log("최대한 마실 수 있는 총 커피양: " + sumCoffee + "ml");