var form = document.querySelector(".js-form");
var input = form.querySelector("input");
var greeting = document.querySelector(".js-greetings");
var USER_LS = "currentUser";
var SHOWING_CN = "showing";
var saveName = function (text) {
    localStorage.setItem(USER_LS, text);
};
var handleSubmit = function (event) {
    event.preventDefault();
    var currentValue = input === null || input === void 0 ? void 0 : input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
};
var askForName = function () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};
var paintGreeting = function (text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = "Hello " + text;
};
var loadName = function () {
    var currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
};
function init1() {
    loadName();
}
init1();
