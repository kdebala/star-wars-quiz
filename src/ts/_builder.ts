import { Mode } from './_defaults';
import logoSrc from '../assets/logo.svg';
import chewbaccaSrc from '../assets/chewbacca.jpg';
import rulesIconSrc from '../assets/rules.svg';
import rankingImg from '../assets/ranking.svg';

const app = document.querySelector('.app');

export const createGame = (gameMode: Mode) => {
  createNavPanel();
  createGamePanel(gameMode);
  createTimerPanel();
};

const createNavPanel = () => {
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
  const sectionEl = createEl('section', 'game-panel');
  const divImgEl = createEl('div', 'img-container', chewbaccaSrc, 'img-item');
  const divGameEl = createEl('div', 'game-container');
  const divHeaderEl = createEl('div', 'headerEl', '', '', '');
  const divRulesEl = createEl('div', 'mode-rules');
  const titleEl = createEl(
    'div',
    'mode-rules_title',
    rulesIconSrc,
    'mode-rules_icon',
  );
  const spanTitleEl = createEl('span', '', '', '', 'Mode rules');
  const rulesEl = createEl('div', 'mode-rules_content', '', '', '');
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
  const ranking = createEl('div', 'ranking');
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
  const answersEl = createEl('div', 'game-answers');
  const buttonAnswer1El = createEl('button', 'btn-answer', '', '', '');
  buttonAnswer1El.classList.add('answer1');
  const buttonAnswer2El = createEl('button', 'btn-answer', '', '', '');
  buttonAnswer2El.classList.add('answer2');
  const buttonAnswer3El = createEl('button', 'btn-answer', '', '', '');
  buttonAnswer3El.classList.add('answer3');
  const buttonAnswer4El = createEl('button', 'btn-answer', '', '', '');
  buttonAnswer4El.classList.add('answer4');

  rankingTitle.appendChild(rankingTitleText);

  ranking.appendChild(rankingTitle);
  ranking.appendChild(rankingTableContent);
  //pomyslec nad tabelka

  ranking.style.display = 'none';
  ///////
  answersEl.appendChild(buttonAnswer1El);
  answersEl.appendChild(buttonAnswer2El);
  answersEl.appendChild(buttonAnswer3El);
  answersEl.appendChild(buttonAnswer4El);
  answersEl.style.display = 'none';

  titleEl.appendChild(spanTitleEl);
  divRulesEl.appendChild(titleEl);
  divRulesEl.appendChild(rulesEl);
  divGameEl.appendChild(divHeaderEl);
  divGameEl.appendChild(divRulesEl);
  //
  divGameEl.appendChild(ranking);
  //
  divGameEl.appendChild(answersEl);
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
  const sectionEl = createEl(
    'section',
    'timerPanel',
    '',
    '',
    'timer Panel tutaj bedzie lightsaber',
  );
  app.appendChild(sectionEl);
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
