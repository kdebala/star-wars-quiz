//import { createTimerPanel } from '../timerPanel/_timer-panel';

import createTimerPanel from '../components/timerPanel';
import initializeClock from './startTimer';
import selectors from '../consts/selectors';
//import states from '../consts/states';
import { Mode } from '../consts/types';
import getGamePanelElements from './getGamePanelElements';
import defaults from '../consts/defaults';

const playGame = (mode: Mode) => {
  //update header
  selectors.question.textContent = getGamePanelElements.getQuestion(mode);
  //hide ranking and modeRules divs and shows gameAnswers as grid
  if (selectors.btnsAnswer instanceof HTMLElement) {
    selectors.btnsAnswer.style.display = 'grid';
  }

  if (selectors.ranking instanceof HTMLElement) {
    selectors.ranking.style.display = 'none';
  }

  if (selectors.rules instanceof HTMLElement) {
    selectors.rules.style.display = 'none';
  }

  //display answers
  getGamePanelElements.displayAnswers(mode);

  createTimerPanel();

  initializeClock(defaults.maxTimeForQuiz);
  //Timer();
  if (selectors.playBtn instanceof HTMLElement) {
    selectors.playBtn.style.display = 'none';
  }
  if (selectors.switcher instanceof HTMLElement) {
    selectors.switcher.style.display = 'none';
  }
};

export default playGame;
