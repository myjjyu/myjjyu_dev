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
    productContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
    return;
  }

  products.forEach((item) => {
    const productCard = `
      <div class="card" style="width: 18rem; padding: 20px;" draggable="true" ondragstart="drag(event)">
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
  const filteredProducts = allProducts.filter(
    (item) => item.title.toLowerCase().includes(searchText) // 상품 제목에 검색어가 포함되어 있는지 확인
  );
  // 3. 검색된 상품 목록을 화면에 표시합니다.
  productList(filteredProducts);
}

/**
 * ✅ 드래그 앤 드롭 으로 장바구니에 상품 추가
 * ✅ 상품 담기 버튼 클릭 시 장바구니에 상품 추가
 * ✅ 장바구니에 추가된 상품 수량 보이기
 */

// 장바구니 컨테이터 선택
const cartContainer = document.querySelector("#cart1");
let cartItems = {}; // 장바구니에 담긴 상품들을 저장할 객체

// ✅ 상품 드래그 앤 드롭 관련 함수
function allowDrop(event) {
  event.preventDefault(); // 드롭 이벤트 허용
}

function drag(event) {
  // 드래그한 상푸의 이름을 데이터로 저장
  event.dataTransfer.setData(
    "text",
    event.target.querySelector(".card-title").textContent
  );
}

function drop(event) {
  event.preventDefault(); // 드롭 이벤트 허용
  const productName = event.dataTransfer.getData("text"); // 드래그한 상품 이름 가져오기
  addToCart(productName); // 장바구니에 상품 추가
}

// ✅ 담기 버튼 클릭 시 상품 추가
const productContainer = document.querySelector("#product-list"); // 상품 목록 컨테이너 선택
productContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-primary")) {
    const productName = event.target
      .closest(".card")
      .querySelector(".card-title").textContent;
    addToCart(productName);
  }
});

// ✅ 장바구니에 상품 추가하는 함수
function addToCart(productName) {
  // 상품 이름을 받아와서 장바구니에 추가
  const product = allProducts.find((item) => item.title === productName); // 상품 목록에서 상품 찾기
  if (!product) return; // 상품이 없으면 함수 종료

  // 이미 장바구니에 담긴 상품이면 수량만 증가
  if (cartItems[productName]) {
    cartItems[productName].quantity += 1;
  } else {
    // 장바구니에 없는 상품이면 수량을 1로 해서 추가
    cartItems[productName] = { ...product, quantity: 1 };
  }
  updateCartUI(); // 장바구니 UI 업데이트
}

// ✅ 장바구니 UI 업데이트 + 합계 가격 업데이트
function updateCartUI() {
  cartContainer.innerHTML = "";
  let totalPrice = 0; // 총 가격을 저장할 변수

  Object.values(cartItems).forEach((item) => {
    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-card");
    cartCard.innerHTML = `
    <div class="card" style="width: 18rem; padding: 20px; margin: 10px;">
      <img src="../img/${item.photo}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.brand}</p>
        <p class="card-text">${item.price}원</p>
        <input type="number" class="cart-quantity" value="${item.quantity}" min="1" data-title="${item.title}">
      </div>
    </div>
  `;
    cartContainer.appendChild(cartCard);

    // ✅ 상품 가격 * 수량을 누적하여 총 가격 계산
    totalPrice += item.price * item.quantity;
  });

  // ✅ 총 가격 업데이트
  document.querySelector(".totalprice").innerText = `합계 : ${totalPrice}원`;
}

// ✅ 장바구니에 담겨있는 상품 수량 변경 시 수량 업데이트
cartContainer.addEventListener("input", function (event) {
  if (event.target.classList.contains("cart-quantity")) {
    const productName = event.target.dataset.title;
    const newQuantity = parseInt(event.target.value, 10);

    if (newQuantity > 0) {
      cartItems[productName].quantity = newQuantity;
    } else {
      delete cartItems[productName];
    }
    updateCartUI();
  }
});

// ✅ 구매하기 버튼 클릭시 modal 창 띄우기
document.querySelector(".totalBtn").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show");
});

// 띄어진 모달창 close누르면 닫기
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show");
});
