document.getElementById("changeP").innerHTML = "1";
document.getElementById("add_button").innerHTML = "add by 1";

document.getElementById("add_button").addEventListener("click",function(){
    let number = parseInt(document.getElementById("changeP").innerHTML) ;
    number=number + 1;
    document.getElementById("changeP").innerHTML=number;
});

document.getElementById("multiply_button").addEventListener("click", function() {
    let number = parseInt(document.getElementById("changeP").innerHTML);
    for(let i = 0; i < 10; i++) {
        let mult_factor = parseInt(document.getElementsByClassName("mult-factors")[i].innerHTML);
        let multiple = parseInt(document.getElementsByClassName("multiples")[i].innerHTML);
        multiple = mult_factor * number;
        document.getElementsByClassName("multiples")[i].innerHTML = multiple;
    }
});

