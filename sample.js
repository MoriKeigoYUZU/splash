$(function () {
  $('html,body').animate({ scrollTop: 0 }, '1');
  var h = $(window).height();


  $('#wrap').css('display', 'none');
  $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(window).load(function () { //全ての読み込みが完了したら実行

  $('#loader-bg').delay(1000).fadeOut(800);
  $('#loader').delay(1000).fadeOut(300);  //delayで調整
  $('#wrap').css('display', 'block');
});

//ここらから下は消していい。

//10秒たったら強制的にロード画面を非表示
$(function () {

  setTimeout('stopload()', 10000);
});

function stopload() {

  $('#wrap').css('display', 'block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
};
