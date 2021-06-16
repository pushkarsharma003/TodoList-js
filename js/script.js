let add = document.getElementById("addTodo");
let content = document.getElementById("content-div");
let inputdata = document.getElementById("todo-input");

add.addEventListener("click", function () {
  if (inputdata.value === "") {
    alert("Task field can't be empty.");
  } else {
    var newPara = document.createElement("p");
    newPara.classList.add("parastyling");
    var delBut = document.createElement("BUTTON");
    var b = document.createElement("br");
    delBut.innerHTML = "X";
    delBut.classList.add("delbutstyling");
    newPara.innerText = inputdata.value;
    content.appendChild(newPara);
    content.appendChild(delBut);
    content.appendChild(b);
    inputdata.value = "";
    delBut.addEventListener("click", function () {
      newPara.remove();
      delBut.remove();
      b.remove();
    });
    newPara.addEventListener("click", function () {
      if (newPara.style.textDecoration === "line-through") {
        newPara.style.textDecoration = "solid";
      } else {
        newPara.style.textDecoration = "line-through";
      }
    });
  }
});
