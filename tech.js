//---------------TECHNOLOGY---------------//
const techHead = document.querySelector(".two");
const techPar = document.querySelector(".three");
const techImg = document.querySelector("#tech-img");
const one = document.querySelector(".one-bar");
const two = document.querySelector(".two-bar");
const three = document.querySelector(".three-bar");

two.addEventListener("click", function(e) {
    techHead.textContent = "SPACE CAPSULE";
    techPar.textContent =" A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    two.classList.add('current');
    techImg.src = "./img/image-space-capsule-portrait.jpg";
    one.classList.remove('current');
    three.classList.remove('current');
});

three.addEventListener("click", function(e) {
    techHead.textContent = "SPACEPORT";
    techPar.textContent =" A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    three.classList.add('current');
    techImg.src = "./img/image-spaceport-portrait.jpg";
    one.classList.remove('current');
    two.classList.remove('current');
});

one.addEventListener("click", function(e) {
    techHead.textContent = "LAUNCH VEHICLE";
    techPar.textContent =" A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    one.classList.add('current');
    techImg.src = "./img/image-launch-vehicle-portrait.jpg";
    three.classList.remove('current');
    two.classList.remove('current');
});

