document.querySelector('.navbar-toggler').addEventListener('click',()=>{
document.querySelector('.list-group').classList.toggle('show');
//toggle: show가 있으면 제거, 없으면 추가라하는뜻
//querySelector() 는 맨 위의 한개 요소만 선택해줍니다.


// const listGroup = document.querySelector('.list-group');
// listGroup.classList.toggle('show');
});

document.querySelector('#test-btn').addEventListener('click', (event) => {
  // 모든 .hellow 요소의 innerHTML을 '바보'로 변경
  document.querySelectorAll('.hellow').forEach(element => {
    element.innerHTML = '바보';
    element.classList.toggle('button1'); 
  });

  // 버튼의 색상을 토글
  event.target.classList.toggle('red');
});




// -----제이쿼리------

// 제이쿼리 사용하기
// $('.hellow').html('멍청이').css('color','red');

//제이쿼리 사용해서  모든 안녕 바보로 변경
// $('.hellow').html('바보');

// 제이쿼리 사용해서 만들기
// 제이쿼리에서 이벤트 리스너는 on이다

// $('#test-btn').on('click',function(){
//   $(this).toggleClass('red');

  // 클릭하면 안녕글씨 올라가서 숨겨짐
  // $('.hellow').slideUp();

  // 클릭하면 보이고 안보이고 하고싶으면?
//   $('.hellow').slideToggle();
// });





// 자바스크립트 사용해서 버튼클릭하면 글씨 레드 , 다시 클릭하면 돌아오기


