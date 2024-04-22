//slick
$(document).ready(function () {
  $('.en_slider_list').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
  });
});

/* 정지/ 재생 버튼 */
//버튼.click(); -> 버튼을 클릭하면 어떤 일이 일어난다
//버튼.click(function(){}); -> 어떤일은 함수 function(){}
//.hasClass('active'); -> 버튼이 active라는 class를 가지고 있는가 
// 가지고 있다면 true 가지고 있지 않다면 false

$('.event_box2 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .page_act').hasClass("on")) {
    $('.event_box2 .page_act').removeClass("on")
  }
})

$('.event_box2 .page_act .btn_play').click(function (e) {
  e.preventDefault();
  if (!$('.event_box2 .page_act').hasClass('on')) {
    //on을 가지고 있지 않아야 true
    // ! = not, 부정 : 아닐때 true
    $('.event_box2 .page_act').addClass('on') //on추가
    $('.en_slider_list').slick('slickPlay');
    // 변수에 넣지 않고 사용했다면 넣지 않은 것 그대로 사용
  }
})


//card slider

let card = $('.card');
card.slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  fade: true,
});

$('.event_box3 .page_act .btn_stop').click(function(e){
  e.preventDefault();
  // .hasClass("on") =>클래스명 on을 가지고 있으면 true/ 없다면 false
  if ($('.event_box3 .page_act').hasClass("on")) {
    $('.event_box3 .page_act').removeClass('on')
    $("card").slick('slickPause');
    // 변수에 넣어서 사용했다면 변수에 넣어서 사용해야 한다 그러지 않아도 된다,,?
  }
})

$('.event_box3 .page_act .btn_play').click(function(e){
  //내장함수 ==> 함수를 javascript나 jQurey가 가지고 있어서 우리는 함수를 직접 만드는 것이 아니라 이미있는 함수를 가져다 쓰는것
  //ex) click: 이것도 함수 click(안에 함수를  또 넣어 쓰는것)= 함수를 매개변수로 쓰는 것
  e.preventDefault();
  if (!$('.event_box3 .page_act').hasClass("on")){
    $('.event_box3 .page_act').addClass('on')
    $('card').slick('slickPlay');
  }
})


// life 버튼
let tab =$('.life_menu ul li');
let style=$('.life_style ul li')

tab.mouseover(function(){
    let tartget=$(this); //버튼 4개중에서 사용자가 마우스를 올린 버튼 그것
    let index=tartget.index()//사용자가 마우스를 올린 버튼 그것의 index번호를 추출
    //console.log(index)
    style.css({opacity:0})//1)모두 안보이기
    style.eq(index).css({opacity:1})//2)사용자가 마우스를 올린 버튼의 index번호에 해당하는 .life_style ul li요소를 보이게한다 
})