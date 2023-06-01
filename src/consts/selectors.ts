const question = document.querySelector('.game-panel__question');
const rulesContent = document.querySelector('.game-panel__rules-content');
const image = document.querySelector('.game-panel__image');
const menuContainer = document.querySelector(
  '.navigation-panel__menu-container',
);
const answer1 = document.querySelector('.answer-1');
const answer2 = document.querySelector('.answer-2');
const answer3 = document.querySelector('.answer-3');
const answer4 = document.querySelector('.answer-4');
const btnsAnswer = document.querySelector('.game-panel__answers');
const switcher = document.querySelector('.game-panel__switcher');
const playBtn = document.querySelector('.game-panel__play');
const ranking = document.querySelector('.game-panel__ranking');
const rules = document.querySelector('.game-panel__rules');

export default {
  question,
  rulesContent,
  menuContainer,
  image,
  answer1,
  answer2,
  answer3,
  answer4,
  btnsAnswer,
  switcher,
  ranking,
  rules,
  playBtn,
};
