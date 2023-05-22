const cardsArray = [
    {
      name: "fire",
      img: "img/fire.png",
    },
    {
      name: "youtube",
      img: "img/youtube.png",
    },
    {
      name: "flash",
      img: "img/flash.png",
    },
    {
      name: "gift",
      img: "img/gift.png",
    },
    {
      name: "tron",
      img: "img/tron.png",
    },
    {
      name: "ufo",
      img: "img/ufo.png",
    },
    {
      name: "plant",
      img: "img/plant.png",
    },
    {
      name: "burger",
      img: "img/burger.png",
    },
  ];
  let previousCard;
  let count = 0;
  let firstGuess = "";
  let secondGuess = "";
  const delay = 1000;
  const grid = document.querySelector('.grid');
  function generateCard() {
    const cardsArrayMerge = cardsArray
      .concat(cardsArray)
      .sort(() => 0.5 - Math.random());
    cardsArrayMerge.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-name', item.name);
      const front = document.createElement("div");
      front.classList.add("front");
      // back card
      const back = document.createElement("div");
      back.classList.add("back");
      back.style.backgroundImage = `url(${item.img})`;
      card.appendChild(front);
      card.appendChild(back);
      grid.appendChild(card);
    });
  }
  generateCard();
  