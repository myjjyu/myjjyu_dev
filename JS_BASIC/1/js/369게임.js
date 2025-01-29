function 삼육구게임() {
  for (let i = 1; i <= 100; i++) { // 1부터 100까지 출력하도록 수정
    if (i % 3 === 0 || i % 6 === 0 || i % 9 === 0) {
      console.log(i + "짝");
    } else {
      console.log("통과");
    }
  }
}

// 함수 호출
삼육구게임();

