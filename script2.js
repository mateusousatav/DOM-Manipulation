document.getElementById("changeP").innerHTML = "1";
document.getElementById("addButton").innerHTML = "add value";

document.getElementById("MultiplicationTable").addEventListener("click", function() {
    let origin = document.getElementById(changeP).innerHTML;
    let arr = [];
    for(let i = 0; i < 5; i++) {
        arr.push(parseInt(origin) * (i + 1));
    }

    document.add
})


















document.getElementByID("addButton").addEventListener("click", function() {
    let origin = document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin = parseInt(origin) + 1;
    document.getElementById("changeP").innerHTML = origin;
})
