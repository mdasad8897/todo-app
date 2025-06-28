document.getElementById("addBtn").addEventListener("click", function () {
  const taskText = document.getElementById("taskInput").value 
  if(taskText.trim() === "")return;
  const li = document.createElement("li")
  li.innerText = taskText;

  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", function() {
    li.remove()
  });
  li.appendChild(delBtn)
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
})