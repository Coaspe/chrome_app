const clockContainer = document.querySelector(".js-clock") as Element;
const clockTitle = clockContainer.querySelector("h1") as HTMLHeadingElement;


const getTime = () :void => {
    const date : Date = new Date();
    const minutes : number = date.getMinutes();
    const hours : number = date.getHours();
    const seconds : number = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const init = () : void => {
    getTime();
    setInterval(getTime, 1000);
}

init();