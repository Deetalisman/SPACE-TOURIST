//-------------CREW--------------//
const slide1 = document.querySelector("#nav-1");
const slide2 = document.querySelector("#nav-2");
const slide3 = document.querySelector("#nav-3");
const slide4 = document.querySelector("#nav-4");

slide1.addEventListener("click", function(e) {
    slide1.style.backgroundColor = "white";
    slide2.style.backgroundColor = "gray";
    slide3.style.backgroundColor = "gray";
    slide4.style.backgroundColor = "gray";


});

slide2.addEventListener("click", function(e) {
    slide2.style.backgroundColor = "white";
    slide1.style.backgroundColor = "gray";
    slide3.style.backgroundColor = "gray";
    slide4.style.backgroundColor = "gray";
});

slide3.addEventListener("click", function(e) {
    slide3.style.backgroundColor = "white";
    slide2.style.backgroundColor = "gray";
    slide1.style.backgroundColor = "gray";
    slide4.style.backgroundColor = "gray";
});

slide4.addEventListener("click", function(e) {
    slide4.style.backgroundColor = "white";
    slide2.style.backgroundColor = "gray";
    slide3.style.backgroundColor = "gray";
    slide1.style.backgroundColor = "gray";
});
