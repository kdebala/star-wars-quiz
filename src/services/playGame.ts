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
  (selectors.btnsAnswer as HTMLElement).style.display = 'grid';
  (selectors.ranking as HTMLElement).style.display = 'none';
  (selectors.rules as HTMLElement).style.display = 'none';

  //display answers
  getGamePanelElements.displayAnswers(mode);

  createTimerPanel();

  initializeClock(defaults.maxTimeForQuiz);
  //Timer();
};

export default playGame;
