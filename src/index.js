var addButton = document.getElementById("b_add");
var tasksArea = document.getElementById("tasks");
var inputField = document.getElementById("t_text");




addButton.addEventListener("click",function(){
    if(inputField.value !=""){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    tasksArea.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.textDecorationColor = "#f54242";
        paragraph.style.textDecorationThickness = "3px";
        paragraph.innerText == inputField.value + " ✅";
    })
}
    paragraph.addEventListener("dblclick",function(){
         tasksArea.removeChild(paragraph);
    })
})
    

