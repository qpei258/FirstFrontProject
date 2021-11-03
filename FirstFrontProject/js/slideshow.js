var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;            //이미지 번호

showSlides(current);

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //모든 이미지를 숨김
    }
    current++;
    if(current > slides.length)
        current = 1;
    slides[current - 1].style.display = "block";      //n번째 이미지 표시
    setTimeout(showSlides, 3000)
}

//  function prevSlide() {
//     if(current > 0) current -= 1;
//     else current = slides.length -1;
//     showSlides(current);
//  }
//  function nextSlide() {
//      if(current < slides.length -1 ) current += 1;
//      else current = 0;
//      showSlides(current);
//  }
