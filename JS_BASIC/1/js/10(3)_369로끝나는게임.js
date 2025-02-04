/**
 * 📌 3의 배수에서 박수를 치는게 아니라 끝자리가 3,6,9로 끝나는 숫자라면 '박수'를 출력
 */

function game369(number) {
  const lastnumber = number.toString().slice(-1); // 숫자의 마지막 자리 확인
  if (lastnumber === '3' || lastnumber === '6' || lastnumber === '9') {
    console.log('👏🏻');
  } else {
    console.log('통과');
  }
}

// 함수 호출 예시
game369(3);  
game369(9);  
game369(18); 
game369(23); 
game369(26); 
game369(29); 
game369(40);  