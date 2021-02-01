const form : any = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting : any = document.querySelector(".js-greetings");

const USER_LS : string = "currentUser";
const SHOWING_CN : string = "showing";


const saveName = (text : string) : void  => {
    localStorage.setItem(USER_LS, text);
}

const handleSubmit = (event : Event) : void => {
    event.preventDefault();
    const currentValue : any = input?.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const askForName = () : void => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

const paintGreeting = (text: string) : void => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

const loadName = () : void => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init1 () {
    loadName();
}

init1();