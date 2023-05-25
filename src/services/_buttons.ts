// import './_buttons';

// import {
//   navItem,
//   rankingRulesBtn,
//   ranking,
//   modeRules,
//   gameAnswers,
//   headerEl,
//   modeRulesContent,
//   btnsAnswer,
//   // btnsAnswer,
//   // answers1,
//   // answers2,
//   // answers3,
//   // answers4,
// } from '../../ts/_consts';
// import { setMode, Mode, gameMode } from '../../ts/_defaults';
// import { displayAnswers } from '../../ts/_functions';
// import { imgItem } from '../../ts/_consts';
// import { getImageByName } from '../../ts/_assets';
// import { Timer } from '../timerPanel/_timer-panel';
// //import { getElementName } from '../../services/_swapi';
// import {
//   gameDescriptionText,
//   gameHeaderText,
// } from '../../ts/_defaultsfunctions';
// import { createTimerPanel } from '../timerPanel/_timer-panel';

import selectors from '../consts/selectors';
import states from '../consts/states';
import { Mode } from '../consts/types';
import getGamePanelElements from './getGamePanelElements';

export async function playGame(mode: Mode) {
  console.log('play');
  //update header
  selectors.question.textContent = getGamePanelElements.getQuestion(
    states.getGameMode(),
  );
  //hide ranking and modeRules divs and shows gameAnswers as grid
  (selectors.btnsAnswer as HTMLElement).style.display = 'grid';
  (selectors.ranking as HTMLElement).style.display = 'none';
  (selectors.rules as HTMLElement).style.display = 'none';

  //display and check answer (checking is already inside displayAnswers)
  getGamePanelElements.displayAnswers(mode);
  // odpal timer

  //event listener na guziki żeby spr poprawność i liczyć punkty i kolejne pyt
  selectors.btnsAnswer.childNodes.forEach(btn => {
    btn.addEventListener('click', function () {
      getGamePanelElements.displayAnswers(mode);
    });
  });

  //   createTimerPanel();
  //   Timer();
}
