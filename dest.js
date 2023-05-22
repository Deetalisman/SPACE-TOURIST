//---------------DESTINATION-----------//
const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");
const destImg = document.querySelector("#dest-img");
const dest = document.querySelector(".mars");
const destPar = document.querySelector(".marsp");
const destDist = document.querySelector("#dist");
const destTime = document.querySelector("#time");



moon.addEventListener("click", function(e) {
    moon.classList.add('current');
    dest.textContent = "MOON";
    destPar.textContent ="See our planet as youve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destDist.textContent = " 384,400 km";
    destTime.textContent = "3 days";
    destImg.src = "./img/image-moon.png";
    mars.classList.remove('current');
    europa.classList.remove('current');
    titan.classList.remove('current');
});


europa.addEventListener("click", function(e) {
    europa.classList.add('current');
    dest.textContent = "EUROPA";
    destPar.textContent ="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin";
    destDist.textContent = "628 mil. km";
    destTime.textContent = "3 years";
    destImg.src = "./img/image-europa.png";
    mars.classList.remove('current');
    moon.classList.remove('current');
    titan.classList.remove('current');
});

titan.addEventListener("click", function(e) {
    titan.classList.add('current');
    dest.textContent = "TITAN";
    destPar.textContent =" The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn";
    destDist.textContent = "1.6 bil. km";
    destTime.textContent = "7 years";
    destImg.src = "./img/image-titan.png";
    mars.classList.remove('current');
    moon.classList.remove('current');
    europa.classList.remove('current');
});


mars.addEventListener("click", function(e) {
    mars.classList.add('current');
    dest.textContent = "MARS";
    destPar.textContent =" Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    destDist.textContent = "225 mil. km";
    destTime.textContent = "9 months";
    destImg.src = "./img/image-titan.png";
    titan.classList.remove('current');
    moon.classList.remove('current');
    europa.classList.remove('current');
});






