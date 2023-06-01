import './answers';
import createElement from '../../utils/createElement';

const createGamePanelAnswers = () => {
  const gamePanelAnswers = createElement('div', 'game-panel__answers');

  const buttonAnswer1 = createElement('button', 'game-panel__item');
  buttonAnswer1.classList.add('answer-1');

  const buttonAnswer2 = createElement('button', 'game-panel__item');
  buttonAnswer2.classList.add('answer-2');

  const buttonAnswer3 = createElement('button', 'game-panel__item');
  buttonAnswer3.classList.add('answer-3');

  const buttonAnswer4 = createElement('button', 'game-panel__item');
  buttonAnswer4.classList.add('answer-4');

  //pomyslec nad tabelka

  ///////
  gamePanelAnswers.classList.add('game-panel-box');
  gamePanelAnswers.appendChild(buttonAnswer1);
  gamePanelAnswers.appendChild(buttonAnswer2);
  gamePanelAnswers.appendChild(buttonAnswer3);
  gamePanelAnswers.appendChild(buttonAnswer4);
  gamePanelAnswers.style.display = 'none';

  return gamePanelAnswers;
};

export default createGamePanelAnswers;
