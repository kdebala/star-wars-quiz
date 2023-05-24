import './gamePanel';
import createElement from '../../utils/createElement';
import game from '../game';
import image from '../image';

const createGamePanel = () => {
  const gamePanel = createElement('section', 'game-panel');

  gamePanel.appendChild(image());
  gamePanel.appendChild(game());

  return gamePanel;
};

export default createGamePanel;
