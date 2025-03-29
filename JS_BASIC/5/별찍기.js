/**
 * 별찍기
 */

// 별찍기1
for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}


// 별찍기2
for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < 5 - i; j++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기3
for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < 5 - i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기4
for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let k = 0; k < 5 - i; k++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기5
for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < 5 - i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기6
for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let k = 0; k < (5 - i) * 2 - 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기7
let a = 5; // 높이

// 위쪽 정삼각형
for (let i = 0; i < a; i++) {
  let str = "";

  for (let j = 0; j < a - i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 아래쪽 역삼각형
for (let i = a - 2; i >= 0; i--) {
  let str = "";

  for (let j = 0; j < a - i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 별찍기8
let n = 5;

// 위쪽 역삼각형
for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    str += "*";
  }

  console.log(str);
}

// 아래쪽 정삼각형
for (let i = 1; i < n; i++) {
  let str = "";

  for (let j = 0; j < n - i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    str += "*";
  }

  console.log(str);
}
