const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "×";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}
