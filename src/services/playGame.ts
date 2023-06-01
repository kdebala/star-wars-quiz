// import { createTimerPanel } from '../timerPanel/_timer-panel';

import selectors from '../consts/selectors';
import states from '../consts/states';
import { Mode } from '../consts/types';
import getGamePanelElements from './getGamePanelElements';

const playGame = (mode: Mode) => {
  //update header
  selectors.question.textContent = getGamePanelElements.getQuestion(
    states.getGameMode(),
  );
  //hide ranking and modeRules divs and shows gameAnswers as grid
  (selectors.btnsAnswer as HTMLElement).style.display = 'grid';
  (selectors.ranking as HTMLElement).style.display = 'none';
  (selectors.rules as HTMLElement).style.display = 'none';

  //display answers
  getGamePanelElements.displayAnswers(mode);
  // timer

  //   createTimerPanel();
  //   Timer();
};

export default playGame;
