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

let allProducts = []; // 전체 상품 목록을 저장할 변수

// ✅ 상품 데이터 가져오기
fetch("../json/store.json")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data.products; // 전체 상품 저장
    productList(allProducts); // 처음에는 모든 상품 표시
  })
  .catch((error) => {
    console.error("에러 발생", error);
  });

// ✅ 상품 목록을 화면에 출력하는 함수
function productList(products) {
  const productContainer = document.querySelector("#product-list");
  productContainer.innerHTML = ""; // 기존 목록 초기화

  if (products.length === 0) {
    productContainer.innerHTML =
      "<p>검색 결과가 없습니다.</p>";
    return;
  }

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

// ✅ 검색 버튼 클릭 시 또는 Enter 키 입력 시 검색 실행
document.querySelector("#searchBtn").addEventListener("click", searchProducts);
document.querySelector("#search").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchProducts();
  }
});

// ✅ 검색 기능을 실행하는 함수
  // 1. 검색창에 사용자가 입력한 글자를 가져와서
  //    소문자로 바꾸고(대소문자 구분 없이 검색 가능하게),
  //    앞뒤 공백(스페이스)을 없애준다
function searchProducts() {
  const searchText = document
    .querySelector("#search")
    .value.toLowerCase()
    .trim();

  // 2. 상품 목록에서 검색어가 포함된 상품만 찾아서 새로운 배열로 만든다
  const filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchText) // 상품 제목에 검색어가 포함되어 있는지 확인
  );
  // 3. 검색된 상품 목록을 화면에 표시합니다.
  productList(filteredProducts);
}
