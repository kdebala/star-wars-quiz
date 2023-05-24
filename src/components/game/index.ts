import './game';
import createElement from '../../utils/createElement';
import actions from '../actions';
import answers from '../answers';
import question from '../question';
import ranking from '../ranking';
import rules from '../rules';

const createGamePanelGameContainer = () => {
  const gameContainer = createElement('div', 'game-panel__game-container');

  gameContainer.appendChild(question());
  gameContainer.appendChild(rules());
  gameContainer.appendChild(ranking());
  gameContainer.appendChild(answers());
  gameContainer.appendChild(actions());

  return gameContainer;
};

export default createGamePanelGameContainer;
