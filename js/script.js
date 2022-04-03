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
    newPara.setAttribute("id", id_count);
    id_count++;
    var tick = document.createElement("img");
    tick.src = "./images/blank_tick.png";
    tick.classList.add("tick");
    newPara.innerText = inputdata.value;
    if (totalTasks == 0) {
      content.textContent = "";
    }
    content.appendChild(newPara);
    content.appendChild(delBut);
    content.appendChild(b);
    content.appendChild(tick);
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
      b.remove();
      tick.remove();
      totalTasks--;
      if (totalTasks == 0) {
        content.textContent = "No todos found... click on '+' to add!";
        document.getElementById("input-div").style.display = "none";
        btn.style.display = "inline";
      }
      document.querySelector(".total-task-count").textContent = totalTasks;
    });

    tick.addEventListener("click", function () {
      if (newPara.style.backgroundColor === "linen") {
        newPara.style.backgroundColor = "lightgreen";
        tick.src = "./images/green_tick.png";
      } else {
        newPara.style.backgroundColor = "linen";
        tick.src = "./images/blank_tick.png";
      }
    });

    const countSpaces = (s) => {
      var space_count = 0;
      for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == " ") {
          space_count++;
        }
      }
      return space_count;
    };

    //edit todo handler
    newPara.addEventListener("click", function () {
      var editInput = prompt("Enter value to edit...", newPara.textContent);
      if (
        editInput.length !== 0 &&
        countSpaces(editInput) !== editInput.length
      ) {
        newPara.textContent = editInput;
      }
    });
  }
});

btn.addEventListener("click", function () {
  document.getElementById("input-div").style.display = "block";
  btn.style.display = "none";
});
