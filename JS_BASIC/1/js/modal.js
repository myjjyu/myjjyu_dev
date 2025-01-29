// 로그인 누르면 모달창 열기
document.querySelector('.login-button').addEventListener('click', e=>{
document.querySelector('.black-bg').classList.toggle('show-modal');
});

// 닫기버튼 누르면 모달창 닫기 
document.querySelector('#close').addEventListener('click', e => {
  document.querySelector('.black-bg').classList.remove('show-modal');
});

// 제이쿼리로 만들어보기 
// $('.login-button').on('click', function(){
//   $('.black-bg').addClass('show-modal');
// });

// $('#close').on('click', function() {
//   $('.black-bg').removeClass('show-modal');
// });