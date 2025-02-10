// // 각각의 탭에 변수정의
// const buttons = document.querySelectorAll(".tab-button"); // 모든 탭 버튼을 선택
// const productsButton = buttons[0]; // 첫 번째 탭 버튼 (제품)
// const informationButton = buttons[1]; // 두 번째 탭 버튼 (정보)
// const shippingButton = buttons[2]; // 세 번째 탭 버튼 (배송)
// const contents = document.querySelectorAll(".tab-content"); // 모든 탭 내용을 선택
// const productsContent = contents[0]; // 첫 번째 탭 내용 (제품)
// const informationContent = contents[1]; // 두 번째 탭 내용 (정보)
// const shippingContent = contents[2]; // 세 번째 탭 내용 (배송)

// // 버튼 1, 2, 3에 이벤트리스너 부착
// productsButton.addEventListener("click", productsHandle); // 첫 번째 버튼 클릭 시 productsHandle 함수 실행
// informationButton.addEventListener("click", informationHandle); // 두 번째 버튼 클릭 시 informationHandle 함수 실행
// shippingButton.addEventListener("click", shippingHandle); // 세 번째 버튼 클릭 시 shippingHandle 함수 실행

// // 버튼을 누르면 해당 탭으로 이동되는 각 함수 실행
// function productsHandle() {
//   // 다른 버튼에서 'orange' 클래스를 제거하고, 첫 번째 버튼에 추가
//   informationButton.classList.remove("orange");
//   shippingButton.classList.remove("orange");
//   productsButton.classList.add("orange");

//   // 다른 탭 내용을 숨기고, 첫 번째 탭 내용을 표시
//   informationContent.classList.remove("show");
//   shippingContent.classList.remove("show");
//   productsContent.classList.add("show");
// }

// function informationHandle() {
//   // 다른 버튼에서 'orange' 클래스를 제거하고, 두 번째 버튼에 추가
//   productsButton.classList.remove("orange");
//   shippingButton.classList.remove("orange");
//   informationButton.classList.add("orange");

//   // 다른 탭 내용을 숨기고, 두 번째 탭 내용을 표시
//   productsContent.classList.remove("show");
//   shippingContent.classList.remove("show");
//   informationContent.classList.add("show");
// }

// function shippingHandle() {
//   // 다른 버튼에서 'orange' 클래스를 제거하고, 세 번째 버튼에 추가
//   productsButton.classList.remove("orange");
//   informationButton.classList.remove("orange");
//   shippingButton.classList.add("orange");

//   // 다른 탭 내용을 숨기고, 세 번째 탭 내용을 표시
//   productsContent.classList.remove("show");
//   informationContent.classList.remove("show");
//   shippingContent.classList.add("show");
// }

// 반복문으로 코드 줄이기
// 각각의 탭에 변수정의
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

// 모든버튼에 이벤트리스너 부착
buttons.forEach((button, index) => {
  button.addEventListener("click", () => handleTab(index));
});

function handleTab(index) {
  // 모든 버튼에서 'orange' 클래스 제거하고 클릭한 버튼에 추가
  buttons.forEach((button) => button.classList.remove("orange"));
  buttons[index].classList.add("orange");

  // 모든 탭 내용을 숨기고 클릭한 탭 내용을 표시
  contents.forEach((content) => content.classList.remove("show"));
  contents[index].classList.add("show");
}