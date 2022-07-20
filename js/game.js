const grid = document.querySelector('.grid');


const characters = [
  'aku-aku',
  'coco',
  'crash-kart',
  'crash',
  'dino',
  'kart',
  'neo-cortex',
  'neo-gin',
  'neocortex',
  'uka-uka'
]


const createElement = (tag, className) => {
  const element = document.createElement(tag);

  element.className = className;

  return element;
}


const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');


  front.style.backgroundImage = `url('../images/${character}.png')`

  card.appendChild(front);
  card.appendChild(back);

  return card;
}


const loadGame = () => {

  const duplicateCharacters = [...characters, ...characters];

  const newArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  newArray.forEach((character) => {
    const card = createCard(character);

    grid.appendChild(card);
  });
}

loadGame();