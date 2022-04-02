let btn = document.getElementById("show-btn");
let totalTasks = 0;
let add = document.getElementById("addTodo");
let content = document.getElementById("content-div");
let inputdata = document.getElementById("todo-input");
let id_count = 1;

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
    var editBut = document.createElement("BUTTON");
    editBut.innerHTML = "Edit";
    editBut.classList.add("editbutstyling");
    newPara.setAttribute("id", id_count);
    id_count++;
    newPara.innerText = inputdata.value;
    if (totalTasks == 0) {
      content.textContent = "";
    }
    content.appendChild(newPara);
    content.appendChild(delBut);
    content.appendChild(b);
    content.appendChild(editBut);
    inputdata.value = "";
    totalTasks++;
    console.log(totalTasks);
    document.querySelector(".total-task-count").textContent = totalTasks;
    document.getElementById("input-div").style.display = "none";
    document.getElementById("show-btn").style.display = "inline";

    //delete button handler
    delBut.addEventListener("click", function () {
      newPara.remove();
      delBut.remove();
      editBut.remove();
      b.remove();
      totalTasks--;
      if (totalTasks == 0) {
        content.textContent = "No todos found... click on '+' to add!";
        document.getElementById("input-div").style.display = "none";
        btn.style.display = "inline";
      }
      document.querySelector(".total-task-count").textContent = totalTasks;
    });

    //task done handler
    newPara.addEventListener("click", function () {
      if (newPara.style.textDecoration === "line-through") {
        newPara.style.textDecoration = "solid";
      } else {
        newPara.style.textDecoration = "line-through";
      }
    });

    //edit button handler
    editBut.addEventListener("click", function () {
      var atr = newPara.getAttribute("id");
      var editInput = prompt("Enter value to edit...", newPara.textContent);
      console.log(editInput);
      newPara.textContent = editInput;
    });
  }
});

btn.addEventListener("click", function () {
  document.getElementById("input-div").style.display = "block";
  btn.style.display = "none";
});
