import './image';
import imageSrc from '../../assets/people/1.jpg';
import createElement from '../../utils/createElement';

const createGamePanelImage = () => {
  const gamePanelImage = createElement(
    'div',
    'game-panel__image-container',
    imageSrc,
    'game-panel__image',
  );

  return gamePanelImage;
};

export default createGamePanelImage;
