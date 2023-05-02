//import { rankingRulesBtn } from './_consts';
import { Mode, answer } from './_defaults';
import logoSrc from '../assets/logo.svg';
import chewbaccaSrc from '../assets/chewbacca.jpg';
import rulesIconSrc from '../assets/rules.svg';
import rankingImg from '../assets/ranking.svg';

const app = document.querySelector('.app');

export const createGame = (gameMode: Mode) => {
  console.log(`gameMode: ${gameMode}`);

  createNavPanel(gameMode);
  createGamePanel(gameMode);
  createTimerPanel();
};

const createNavPanel = (gameMode: Mode) => {
  console.log(`create: NavPanel`);

  const sectionEl = createEl('section', 'navPanel');
  const divEl = createEl('div', 'logo', logoSrc);
  const navEl = createEl('nav', 'nav');
  const buttonPeopleEl = createEl('button', 'nav__item', '', '', 'People');
  const buttonVehiclesEl = createEl('button', 'nav__item', '', '', 'Vehicles');
  const buttonStarshipsEl = createEl(
    'button',
    'nav__item',
    '',
    '',
    'Starships',
  );
  navEl.appendChild(buttonPeopleEl);
  navEl.appendChild(buttonVehiclesEl);
  navEl.appendChild(buttonStarshipsEl);
  sectionEl.appendChild(divEl);
  sectionEl.appendChild(navEl);
  app.appendChild(sectionEl);
};

const createGamePanel = (gameMode: Mode) => {
  console.log(`create: gamePanel`);

  const sectionEl = createEl('section', 'game-panel');
  const divImgEl = createEl('div', 'img-container', chewbaccaSrc, 'img-item');
  const divGameEl = createEl('div', 'game-container');
  const divHeaderEl = createEl(
    'div',
    'headerEl',
    '',
    '',
    gameHeaderText(gameMode),
  );
  const divRulesEl = createEl('div', 'mode-rules');
  const titleEl = createEl(
    'div',
    'mode-rules_title',
    rulesIconSrc,
    'mode-rules_icon',
  );
  const spanTitleEl = createEl('span', '', '', '', 'Mode rules');
  const rulesEl = createEl(
    'div',
    'mode-rules_content',
    '',
    '',
    gameDescriptionText(gameMode),
  );
  const divButtonsEl = createEl('div', 'buttons');
  const buttonRankingRulesEl = createEl(
    'button',
    'btn',
    '',
    '',
    'Half of fame',
  );
  const buttonPlayEl = createEl('button', 'btn', '', '', 'Play the game');

  ///////
  const rankingWrapper = createEl('div', 'ranking');
  const rankingTitle = createEl(
    'div',
    'ranking_title',
    rankingImg,
    'ranking_icon',
  );
  const rankingTitleText = createEl(
    'span',
    'ranking_text',
    '',
    '',
    'Mode Ranking',
  );
  const rankingTableContent = createEl('div', 'rankingTableContent');
  rankingTitle.appendChild(rankingTitleText);

  rankingWrapper.appendChild(rankingTitle);
  rankingWrapper.appendChild(rankingTableContent);
  //pomyslec nad tabelka

  rankingWrapper.style.display = 'none';
  ///////

  titleEl.appendChild(spanTitleEl);
  divRulesEl.appendChild(titleEl);
  divRulesEl.appendChild(rulesEl);
  divGameEl.appendChild(divHeaderEl);
  divGameEl.appendChild(divRulesEl);
  //
  divGameEl.appendChild(rankingWrapper);
  //
  buttonRankingRulesEl.classList.add('ranking-rules');
  divButtonsEl.appendChild(buttonRankingRulesEl);
  buttonPlayEl.classList.add('play');
  divButtonsEl.appendChild(buttonPlayEl);
  divGameEl.appendChild(divButtonsEl);
  sectionEl.appendChild(divImgEl);
  sectionEl.appendChild(divGameEl);
  app.appendChild(sectionEl);
};

const createTimerPanel = () => {
  console.log(`gameMode: timerPanel`);

  const sectionEl = createEl(
    'section',
    'timerPanel',
    '',
    '',
    'timer Panel tutaj bedzie lightsaber',
  );
  app.appendChild(sectionEl);
};
const gameDescriptionText = (gameMode: Mode) => {
  return `You have two minutes (2m) to answer as many questions as possible. 
  During the game on each question you need to select ${
    gameMode === 'people' ? 'who' : 'what'
  } from Star Wars is showed on the left (${answer} right now) from available options`;
};
const gameHeaderText = (gameMode: Mode) => {
  return `MODE: ${
    gameMode === 'people'
      ? 'Who is this character?'
      : 'What is it on the picture?'
  }`;
};
const createEl = (
  elName: string,
  elClass?: string,
  imgSrc?: string,
  imgClass?: string,
  elTextContent?: string,
) => {
  const divEl = document.createElement(elName);
  if (elClass) {
    divEl.classList.add(elClass);
  }
  if (elTextContent) {
    divEl.textContent = elTextContent;
  }
  if (imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    if (imgClass) {
      img.classList.add(imgClass);
    }
    divEl.appendChild(img);
  }
  return divEl;
};
