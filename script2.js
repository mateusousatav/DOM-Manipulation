document.getElementById("changeP").innerHTML = "1";
document.getElementById("addButton").innerHTML = "add by 1";

document.getElementById("addButton").addEventListener("click",function(){
    let number = parseInt(document.getElementById("changeP").innerHTML) ;
    number=number + 1;
    document.getElementById("changeP").innerHTML=number;
});