const toDoForm = document.querySelector(".js-toDoForm") as HTMLFormElement;
const toDoInput = toDoForm.querySelector("input") as HTMLInputElement;
const toDoList = document.querySelector(".js-toDoList") as HTMLUListElement;

const TODOS_LS : string = 'toDos';
let toDos : todo [] = [];
type todo = {
    text: string;
    id: number;
}

const deleteToDo = (event : Event) : void => {
    const btn = <HTMLElement>event.target; //Property 'parentNode' does not exist on type 'EventTarget'.해결
    const li = btn.parentNode;
    toDoList.removeChild(<Node>li);
    const cleanToDos = toDos.filter((todo : todo) => {
        return todo.id !== parseInt((<HTMLLIElement>li).id);
    })
    toDos = cleanToDos;
    saveToDos();
}

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // object => string
}

const paintToDo = (text : string) : void => {
    console.log(text);
    const li = document.createElement("li") as HTMLLIElement;
    const delBtn = document.createElement("button") as HTMLButtonElement;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span")as HTMLSpanElement;
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId.toString();
    toDoList.appendChild(li);
    const toDoObj : todo = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
const loadToDos = () : void => {
    const loadedToDos = localStorage.getItem(TODOS_LS) as string;
    if (loadToDos !== null) {
       const parsedToDos = JSON.parse(loadedToDos); // string => javascript object
       parsedToDos.forEach((toDo : todo) => {
           paintToDo(toDo.text);
       })
    }
}
const handleSubmit2 = (event : Event) : void => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue);
    paintToDo(currentValue);
    toDoInput.value = "";
}
const init3 = () : void => {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit2);
}

init3();

// 1. init : 모든 함수의 시작 2. 