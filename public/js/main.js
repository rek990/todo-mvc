// deleted items
const deleteBtn = document.querySelectorAll(".del");
// items that are not completed
const todoItem = document.querySelectorAll("span.not");
// items that are completed
const todoComplete = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});
// creates array from <span class="not"> that are children of the parent class of todoItem (<li/>) and loops through the array
Array.from(todoItem).forEach((el) => {
  // adds an event listener to each child element (<span class="not" />) within parent class of todoItem (<li/>), firing the markComplete function when the element is clicked
  el.addEventListener("click", markComplete);
});
// creates array from <span class="completed"> that are children of the parent class of todoItem (<li/>) and loops through the array
Array.from(todoComplete).forEach((el) => {
  // adds an event listener to each child element (<span class="completed" />) within parent class of todoItem (<li/>), firing the markComplete function when the element is clicked
  el.addEventListener("click", markIncomplete);
});

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  // when span is clicked (this), go up level to <li/> and look at the data attribute (here, it's dataset and id (can call these anything you want) and grabs (unique) id
  const todoId = this.parentNode.dataset.id;
  try {
    // PUT request
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
