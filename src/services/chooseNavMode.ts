import states from '../consts/states';
import { Mode } from '../consts/types';
import generateGamePanelContent from './generateGamePanelContent';

const chooseNavMode = (e: Event) => {
  //console.log(typeof e.target);

  if (e.target instanceof HTMLElement) {
    //console.log(`yyy: ${typeof e.target}`);
    const activeButton = e.target.closest('.navigation-panel__item');
    if (!activeButton) return;

    activeButton.parentElement.childNodes.forEach(item => {
      if (item instanceof HTMLElement) {
        item.classList.remove('navigation-panel__item--active');
      }
    });
    activeButton.classList.add('navigation-panel__item--active');
    states.setGameMode(activeButton.textContent.toLowerCase() as Mode);

    generateGamePanelContent(states.getGameMode(), states.getRulesView());
  }
};

export default chooseNavMode;
