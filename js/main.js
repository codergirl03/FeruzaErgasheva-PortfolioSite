//Navbar

var hamburger =document.querySelector(".hamburger");
var ul =document.querySelector(".navbar-nav");
var li = document.querySelectorAll(".nav-item");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");

hamburger.addEventListener("click" , function(){
    ul.classList.toggle("open-nav");

    li.forEach( link => {
        link.classList.toggle("fade");
    });

    line1.classList.toggle("hover");
    line2.classList.toggle("hover");
    line3.classList.toggle("hover");
});


//TypeWriter

const texts = ['Frontend Developer' , 'Creator'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0 ;
    }
    currentText = texts[count];
    letter = currentText.slice(0 , ++index);
    
    document.querySelector('.txt-type').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}());


//Back-to-top

window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 200){
        document.querySelector("#back-to-top").classList.add('active')
    }else{
        document.querySelector("#back-to-top").classList.remove('active');
    }
});


