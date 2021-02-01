const body = document.querySelector('body') as HTMLBodyElement;

const IMG_NUMBER : number = 3;

const paintImage = (imgNumber : number) : void => {
    const image : HTMLImageElement = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

const getRandom = () : number => {
    const number : number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

 function init2 () : void{
    const randomNumber : number = getRandom();
    paintImage(randomNumber);
}

init2();