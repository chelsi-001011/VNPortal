var animateButton = document.querySelector(".animate-button");
var animateButtonMenu = document.querySelector(".animate-button-menu");
var animateButtonItem = document.querySelector(".animate-button-symbol");
var animateButtonCrossBg = document.querySelector(".animate-button-cross-bg");
var animateButtonArrow = document.querySelector(".animate-button-arrow");
var line1 = document.querySelector(".line.line-1-arrow");
var line2 = document.querySelector(".line.line-2-arrow");
var header = document.querySelector(".header");
var VNpart = document.querySelector(".VN-part");


var Func1 = function (){
    animateButton.classList.remove("blur");
};
animateButtonItem.addEventListener("click",function (){
        (animateButtonCrossBg).classList.toggle("arrow");
        (animateButtonCrossBg).classList.toggle("cross");
        animateButtonMenu.classList.toggle("shift");
        header.classList.toggle("blur");
        VNpart.classList.toggle("blur");

        if(line1.classList.contains("line-1-arrow"))
        {
            line1.classList.add("line-1-cross");
            line1.classList.remove("line-1-arrow");
        }
        else{
            line1.classList.remove("line-1-cross");
            line1.classList.add("line-1-arrow");
        }
        if(line2.classList.contains("line-2-arrow"))
        {
            line2.classList.add("line-2-cross");
            line2.classList.remove("line-2-arrow");
        }
        else{
            line2.classList.remove("line-2-cross");
            line2.classList.add("line-2-arrow");
        }

});
Func1();
