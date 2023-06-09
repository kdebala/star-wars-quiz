import './actions';
import createElement from '../../utils/createElement';

const createGamePanelActions = () => {
  const gamePanelActions = createElement('div', 'game-panel__actions');

  const buttonSwitcher = createElement(
    'button',
    'game-panel__btn',
    '',
    '',
    'Half of fame',
  );
  buttonSwitcher.classList.add('game-panel__switcher');

  const buttonPlay = createElement(
    'button',
    'game-panel__btn',
    '',
    '',
    'Play the game',
  );
  buttonPlay.classList.add('game-panel__play');

  gamePanelActions.appendChild(buttonSwitcher);
  gamePanelActions.appendChild(buttonPlay);

  return gamePanelActions;
};

export default createGamePanelActions;
