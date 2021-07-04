
$(".language").click(function(){

                $(".langu").fadeToggle(0,1);})
$(".fa-bars").on("click",function(){
    $(".sectcont").fadeToggle(1,0,function(){
        $("html").css("overflow","hidden")
    });
})


$(".bachground").click(function(){
    $(".sectcont").fadeToggle(1,0,function(){
        $("html").css("overflow","visible")})

})
$(".contant ul li").click(function(){

    $(this).children("ul").stop(true,false,true).slideToggle(900);
})

$(".Services button").hover(function(){
   $(this).css("background","#1a946d")
   $(this).css("color","white")
   $(this).parent().css("border"," 1px solid #a7a4a4")},
   function(){
   $(this).css("background","none")
   $(this).parent().css("border"," 1px solid #e4dfdf ")
   $(this).css("color","#1a946d")
}
)

$(".divservice3").hover(function(){
    $(this).css("border"," 1px solid #a7a4a4")},
    function(){
    $(this).css("border"," 1px solid #e4dfdf")})

    $(".divservice2").hover(function(){
        $(this).css("border"," 1px solid #a7a4a4")},
        function(){
        $(this).css("border"," 1px solid #e4dfdf")})
        $(".divservice1").hover(function(){
            $(this).css("border"," 1px solid #a7a4a4")},
            function(){
            $(this).css("border"," 1px solid #e4dfdf")})


////////////////////////////////////////////////////////////////////////////
//slider
var i;

  var slides =$(".mySlides");
  var dots = $(".dot");
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
    
    for (i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    slideIndex++;

}, 5000);


//////////////////////////////////////


var imgs = document.querySelectorAll("#img1")
    eye=document.querySelector("#eye1")

  eye.addEventListener("click", event => {
    var divjs = document.createElement("div")
    divjs.className = "classcreatejs";
    document.body.appendChild(divjs)
    var divjs2 = document.createElement("div")
    divjs2.className = "classcreatejs2";
    var h3 = document.createElement("h3");
    h3.textContent =  "المختبرات";
    divjs2.appendChild(h3);
    var spa = document.createElement("p")
    spa.textContent = "x";
    divjs2.appendChild(spa);
    var imgnow = document.createElement("img")
    imgnow.src = imgs.src;
    divjs2.appendChild(imgnow);
    divjs.appendChild(divjs2)
    //document.body.appendChild(divjs2)
    spa.onclick = function () {
      divjs2.parentElement.remove("classcreatejs2")
    }
  })

  var imgs = document.querySelectorAll("#img2")
    eye=document.querySelector("#eye2")

  eye.addEventListener("click", event => {
    var divjs = document.createElement("div")
    divjs.className = "classcreatejs";
    document.body.appendChild(divjs)
    var divjs2 = document.createElement("div")
    divjs2.className = "classcreatejs2";
    var h3 = document.createElement("h3");
    h3.textContent =  "يوميات الطلبة في المختبرات";
    divjs2.appendChild(h3);
    var spa = document.createElement("p")
    spa.textContent = "x";
    divjs2.appendChild(spa);
    var imgnow = document.createElement("img")
    imgnow.src = imgs.src;
    divjs2.appendChild(imgnow);
    divjs.appendChild(divjs2)
    //document.body.appendChild(divjs2)
    spa.onclick = function () {
      divjs2.parentElement.remove("classcreatejs2")
    }
  })

  var imgs = document.querySelectorAll("#img3")
    eye=document.querySelector("#eye3")

  eye.addEventListener("click", event => {
    var divjs = document.createElement("div")
    divjs.className = "classcreatejs";
    document.body.appendChild(divjs)
    var divjs2 = document.createElement("div")
    divjs2.className = "classcreatejs2";
    var h3 = document.createElement("h3");
    h3.textContent =  "تدريب طلاب التمريض في م. الكفيل";
    divjs2.appendChild(h3);
    var spa = document.createElement("p")
    spa.textContent = "x";
    divjs2.appendChild(spa);
    var imgnow = document.createElement("img")
    imgnow.src = imgs.src;
    divjs2.appendChild(imgnow);
    divjs.appendChild(divjs2)
    //document.body.appendChild(divjs2)
    spa.onclick = function () {
      divjs2.parentElement.remove("classcreatejs2")
    }
  })


   var imgs = document.querySelector("#img4")
    eye=document.querySelector("#eye4")

  eye.addEventListener("click", event => {
    var divjs = document.createElement("div")
    divjs.className = "classcreatejs";
    document.body.appendChild(divjs)
    var divjs2 = document.createElement("div")
    divjs2.className = "classcreatejs2";
    var h3 = document.createElement("h3");
    h3.textContent =  "الدورات المقامة في الجامعة - دورة الحاسبات";
    divjs2.appendChild(h3);
    var spa = document.createElement("p")
    spa.textContent = "x";
    divjs2.appendChild(spa);
    var imgnow = document.createElement("img")
    imgnow.src = imgs.src;
    divjs2.appendChild(imgnow);
    divjs.appendChild(divjs2)
    //document.body.appendChild(divjs2)
    spa.onclick = function () {
      divjs2.parentElement.remove("classcreatejs2")
    }
  })