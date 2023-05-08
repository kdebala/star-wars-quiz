import {
  navItem,
  rankingRulesBtn,
  ranking,
  modeRules,
  gameAnswers,
  headerEl,
  modeRulesContent,
  btnsAnswer,
  // btnsAnswer,
  // answers1,
  // answers2,
  // answers3,
  // answers4,
} from './_consts';
import { setMode, Mode, gameMode } from './_defaults';
import { displayAnswers } from './_functions';
import { imgItem } from './_consts';
import { getImageByName } from './_assets';
import { getElementName } from './_swapi';
import { gameDescriptionText, gameHeaderText } from './_defaultsfunctions';

export const chooseNavMode = (e: Event) => {
  const clicked = (e.target as Element).closest('.nav__item');
  //guard clause
  if (!clicked) return;
  navItem.forEach(item => {
    item.classList.remove('nav__item--active');
  });
  clicked.classList.add('nav__item--active');
  setMode(clicked.textContent.toLowerCase() as Mode);
};

export const rulesRankingChanger = async () => {
  if (rankingRulesBtn.textContent === 'Half of fame') {
    rankingRulesBtn.textContent = 'Rules';
    (ranking as HTMLElement).style.display = 'flex';
    (modeRules as HTMLElement).style.display = 'none';
    (gameAnswers as HTMLElement).style.display = 'none';
  } else {
    rankingRulesBtn.textContent = 'Half of fame';
    modeRulesContent.textContent = await gameDescriptionText(gameMode);
    (ranking as HTMLElement).style.display = 'none';
    (modeRules as HTMLElement).style.display = 'block';
    (gameAnswers as HTMLElement).style.display = 'none';
  }
};

export async function playGame(mode: Mode) {
  //update header
  headerEl.textContent = gameHeaderText(gameMode);
  //hide ranking and modeRules divs and shows gameAnswers as grid
  (gameAnswers as HTMLElement).style.display = 'grid';
  (ranking as HTMLElement).style.display = 'none';
  (modeRules as HTMLElement).style.display = 'none';

  //display and check answer (checking is already inside displayAnswers)
  displayAnswers(mode);
  // odpal timer

  //event listener na buttony żeby spr poprawność i liczyć punkty i kolejne pyt
  btnsAnswer.forEach(btn => {
    btn.addEventListener('click', function () {
      displayAnswers(mode);
    });
  });
}
