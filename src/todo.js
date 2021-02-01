var toDoForm = document.querySelector(".js-toDoForm");
var toDoInput = toDoForm.querySelector("input");
var toDoList = document.querySelector(".js-toDoList");
var TODOS_LS = 'toDos';
var toDos = [];
var deleteToDo = function (event) {
    var btn = event.target; //Property 'parentNode' does not exist on type 'EventTarget'.해결
    var li = btn.parentNode;
    toDoList.removeChild(li);
    var cleanToDos = toDos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
};
var saveToDos = function () {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // object => string
};
var paintToDo = function (text) {
    console.log(text);
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    var span = document.createElement("span");
    var newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId.toString();
    toDoList.appendChild(li);
    var toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
};
var loadToDos = function () {
    var loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        var parsedToDos = JSON.parse(loadedToDos); // string => javascript object
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
};
var handleSubmit2 = function (event) {
    event.preventDefault();
    var currentValue = toDoInput.value;
    console.log(currentValue);
    paintToDo(currentValue);
    toDoInput.value = "";
};
var init3 = function () {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit2);
};
init3();
// 1. init : 모든 함수의 시작 2. 
