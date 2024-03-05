let nowIdx = 0;
let isReset = false;
let nowInter;

const cardListElem = document.getElementById("card-list");
const playBtnsElem = document.getElementById("play-btns");
const navBtnsElem = document.getElementById("nav-btns");

const move = () => {
  if (isReset) {
    cardListElem.classList.add("on");
    isReset = false;
  }

  nowIdx += 1;
  cardListElem.style.transform = `translateX(-${nowIdx * 200}px)`;
  navBtnsElem.className = `idx-${(nowIdx % 4) + 1}`;
  if (nowIdx == 4) {
    setTimeout(() => {
      cardListElem.classList.remove("on");
      nowIdx = 0;
      cardListElem.style.transform = `translateX(-${nowIdx * 200}px)`;
      isReset = true;
    }, 1000);
  }
};

const play = () => {
  nowInter = setInterval(move, 3000);
  playBtnsElem.classList.add("on");
};
play();
document.getElementById("play").onclick = play;

const stop = () => {
  clearInterval(nowInter);
  playBtnsElem.classList.remove("on");
};
document.getElementById("stop").onclick = stop;

const leftBtnsElem = document.getElementById("left-move");
const rightBtnsElem = document.getElementById("right-move");

leftBtnsElem.onclick = () => {
  stop();
  nowIdx -= 1;
  if (nowIdx < 0) nowIdx = 3;
  cardListElem.style.transform = `translateX(-${nowIdx * 200}px)`;
  navBtnsElem.className = `idx-${(nowIdx % 4) + 1}`;
  play();
};

rightBtnsElem.onclick = () => {
  stop();
  move();
  play();
};

const nav1BtnsElem = document.getElementById("card-nav1");
const nav2BtnsElem = document.getElementById("card-nav2");
const nav3BtnsElem = document.getElementById("card-nav3");
const nav4BtnsElem = document.getElementById("card-nav4");

nav1BtnsElem.onclick = () => {
  stop();
  nowIdx = -1;
  move();
  play();
};
nav2BtnsElem.onclick = () => {
  stop();
  nowIdx = 0;
  move();
  play();
};
nav3BtnsElem.onclick = () => {
  stop();
  nowIdx = 1;
  move();
  play();
};
nav4BtnsElem.onclick = () => {
  stop();
  nowIdx = 2;
  move();
  play();
};
