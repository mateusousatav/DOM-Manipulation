document.getElementById("taskname1").innerHTML = "Complete the project documentation";

let task = document.getElementById("compl1").addEventListener("click", function() {
    document.getElementById("taskname1").style.color = "red";
    document.getElementById("taskname2").style.textDecoration = "line-through";
})

document.getElementById("addTask").addEventListener("click", function () {
    event.preventDefault(); 
    let newTask = document.getElementById("new-task").value; // Fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});