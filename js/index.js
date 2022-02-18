// Slider
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
// Click
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
const link5 = document.querySelector(".link5");
const link6 = document.querySelector(".link6");
const link7 = document.querySelector(".link7");
const link8 = document.querySelector(".link8");
const link9 = document.querySelector(".link9");
const link10 = document.querySelector(".link10");
const link11 = document.querySelector(".link11");
const link12 = document.querySelector(".link12");
const link13 = document.querySelector(".link13");
const link14 = document.querySelector(".link14");
const link15 = document.querySelector(".link15");



link2.addEventListener("click", () => {
    link7.style.background = "white";
    link7.style.color = "black";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
});

link3.addEventListener("click", () => {
    link8.style.background = "white";
    link8.style.color = "black";
});

link4.addEventListener("click", () => {
    link9.style.background = "white";
    link9.style.color = "black";
    link8.style.background = "white";
    link8.style.color = "black";
    link7.style.background = "rgb(112, 29, 29)";
    link7.style.color = "white";
    link10.style.background = "rgb(112, 29, 29)";
    link10.style.color = "white";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
});

link5.addEventListener("click", () => {
    link10.style.background = "white";
    link10.style.color = "black";
    link7.style.background = "rgb(112, 29, 29)";
    link7.style.color = "white";
    link8.style.background = "rgb(112, 29, 29)";
    link8.style.color = "white";
    link9.style.background = "rgb(112, 29, 29)";
    link9.style.color = "white";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
});

link6.addEventListener("click", () => {
    link6.style.background = "white";
    link6.style.color = "black";
    link7.style.background = "rgb(112, 29, 29)";
    link7.style.color = "white";
    link8.style.background = "rgb(112, 29, 29)";
    link8.style.color = "white";
    link9.style.background = "rgb(112, 29, 29)";
    link9.style.color = "white";
    link10.style.background = "rgb(112, 29, 29)";
    link10.style.color = "white";
});

link7.addEventListener("click", () => {
    link7.style.background = "white";
    link7.style.color = "rgb(112, 29, 29)";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
    link8.style.background = "rgb(112, 29, 29)";
    link8.style.color = "white";
    link9.style.background = "rgb(112, 29, 29)";
    link9.style.color = "white";
    link10.style.background = "rgb(112, 29, 29)";
    link10.style.color = "white";
});

link8.addEventListener("click", () => {
    link8.style.background = "white";
    link8.style.color = "rgb(112, 29, 29)";
    link9.style.background = "white";
    link9.style.color = "rgb(112, 29, 29)";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
    link7.style.background = "rgb(112, 29, 29)";
    link7.style.color = "white";
    link10.style.background = "rgb(112, 29, 29)";
    link10.style.color = "white";
});

link10.addEventListener("click", () => {
    link10.style.background = "white";
    link10.style.color = "rgb(112, 29, 29)";
    link7.style.background = "rgb(112, 29, 29)";
    link7.style.color = "white";
    link6.style.background = "rgb(112, 29, 29)";
    link6.style.color = "white";
    link8.style.background = "rgb(112, 29, 29)";
    link8.style.color = "white";
    link9.style.background = "rgb(112, 29, 29)";
    link9.style.color = "white";
});

const logo = document.querySelector('.logo');
const imgLogo = document.querySelector('.img-logo');
const contact = document.querySelector('.contact');

logo.addEventListener('click', () => {
    imgLogo.style.display = "initial";
});


// nav responsive

link11.addEventListener("click", () => {
    link11.style.background = "white";
    link11.style.color = "black";
    link12.style.background = "initial";
    link12.style.color = "white";
    link13.style.background = "initial";
    link13.style.color = "white";
    link14.style.background = "initial";
    link14.style.color = "white";
    link15.style.background = "initial";
    link15.style.color = "white";
});

link12.addEventListener("click", () => {
    link12.style.background = "white";
    link12.style.color = "black";
    link11.style.background = "initial";
    link11.style.color = "white";
    link13.style.background = "initial";
    link13.style.color = "white";
    link14.style.background = "initial";
    link14.style.color = "white";
    link15.style.background = "initial";
    link15.style.color = "white";
});


link13.addEventListener("click", () => {
    link13.style.background = "white";
    link13.style.color = "black";
    link14.style.background = "white";
    link14.style.color = "black";
    link11.style.background = "initial";
    link11.style.color = "white";
    link12.style.background = "initial";
    link12.style.color = "white";
    link15.style.background = "initial";
    link15.style.color = "white";
});

link15.addEventListener("click", () => {
    link15.style.background = "white";
    link15.style.color = "black";
    link11.style.background = "initial";
    link11.style.color = "white";
    link12.style.background = "initial";
    link12.style.color = "white";
    link13.style.background = "initial";
    link13.style.color = "white";
    link14.style.background = "initial";
    link14.style.color = "white";
});

// Scroll
const nav = document.querySelector(".nav");
const navFixe = document.querySelector(".nav-fixe");


document.addEventListener("scroll", () => {
    if (window.scrollY >= 87){
        nav.style.display = "-90px";
        navFixe.style.top = "0";
    } else {
        nav.style.top = "0";
        navFixe.style.top = "-90px";
    }
});



// Button responsive 
const spann = document.querySelector('.spann');
const containerA = document.querySelector('.container-a');


spann.addEventListener("click", () => {
    spann.classList.toggle('cross');
    containerA.classList.toggle('container-a-none');

});
