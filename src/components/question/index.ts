import './question';
import createElement from '../../utils/createElement';

const createGamePanelQuestion = () => {
  const gamePanelQuestion = createElement('div', 'game-panel__question');
  return gamePanelQuestion;
};

export default createGamePanelQuestion;
