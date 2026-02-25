let btnTask = document.querySelector("#btnTask");
let inputText = document.querySelector("#inputText");
let ulTasks = document.querySelector("#ulTasks");

btnTask.addEventListener("click", () => {
  let task = inputText.value.trim();
  if(task === "") return; // prevent empty tasks

  // Create li
  let li = document.createElement("li");
  li.textContent = task;

  // Create Edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "10px";
  editBtn.style.backgroundColor = "orange";
  editBtn.style.color = "white";
  editBtn.style.border = "none";
  editBtn.style.padding = "2px 5px";
  editBtn.style.cursor = "pointer";

  // Edit functionality
  editBtn.addEventListener("click", () => {
    let newTask = prompt("Edit your task:", li.firstChild.textContent);
    if(newTask !== null && newTask.trim() !== "") {
      li.firstChild.textContent = newTask; // update task text
    }
  });

  // Create Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "5px";
  delBtn.style.backgroundColor = "red";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.padding = "2px 5px";
  delBtn.style.cursor = "pointer";

  // Delete functionality
  delBtn.addEventListener("click", () => li.remove());

  // Append buttons to li
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  // Append li to ul
  ulTasks.appendChild(li);

  // Clear input
  inputText.value = "";
});