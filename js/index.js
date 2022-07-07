
let aboutOffset = $("#about").offset().top

$(window).scroll(function () {
  let SrcollWindow = $(window).scrollTop();
  if (SrcollWindow >= aboutOffset) {
    $("#main-nav").css("background-color", "teal")
  }
  else {
    $("#main-nav").css("background-color", "transparent")
  }
})

$(".nav-link").click(function(e){
  let offsetTop=$(e.target).attr("href") 
   console.log(offsetTop)
   let top=$(offsetTop).offset().top; 
  // $("body,html").attr(href)
  $('html,body').animate({scrollTop:top},500)
})