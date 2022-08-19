// deal with delete items
const deleteBtn = document.querySelectorAll(".del");
// deals with not completed items
const todoItem = document.querySelectorAll("span.not");
// deals with completed items
const todoComplete = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});
// not class
Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});
// completed class
Array.from(todoComplete).forEach((el) => {
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
  // when span is clicked (this), go up level to <li/> and look at the data attribute (here, it's dataset and id) and grabs id
  const todoId = this.parentNode.dataset.id;
  try {
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
