/**
 *  ✅ 네비게이션 바 클릭 시 글자 색깔 변경
 *  탭 클릭 시 글자 색깔 변경
 */

// 모든 .nav-link 요소를 선택합니다.
const tabs = document.querySelectorAll(".nav-link");

// 각 탭에 클릭 이벤트 리스너를 추가합니다.
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 클릭 시 모든 탭에서 'active' 클래스를 제거합니다.
    tabs.forEach((tab) => tab.classList.remove("active"));
    // 클릭된 탭에 'active' 클래스를 추가합니다.
    tab.classList.add("active");
  });
});

/**
 * ✅ 상품 card 화면에 추가
 * ajax 통신을 통해 상품 정보를 받아와서 화면에 추가
 */
fetch("../json/store.json")
  .then((Response) => Response.json())
  .then((data) => {
    productList(data);
  })
  .catch((error) => {
    console.error("에러 발생", error);
  });

// 상품을 화면에 추가하는 함수
function productList(products) {
  const productContainer = document.querySelector("#product-list");
  productContainer.innerHTML = ""; // 기존 목록 초기화

  products.forEach((item) => {
    const productCard = `
      <div class="card" style="width: 18rem; padding: 20px;">
        <img src="../img/${item.photo}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.brand}</p>
          <p class="card-text">가격 : ${item.price}원</p>
          <button class="btn btn-primary">담기</button>
        </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}