var body = document.querySelector('body');
var IMG_NUMBER = 3;
var paintImage = function (imgNumber) {
    var image = new Image();
    image.src = "images/" + (imgNumber + 1) + ".jpg";
    image.classList.add("bgImage");
    body.prepend(image);
};
var getRandom = function () {
    var number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
};
function init2() {
    var randomNumber = getRandom();
    paintImage(randomNumber);
}
init2();
