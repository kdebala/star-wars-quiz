import selectors from '../consts/selectors';
import states from '../consts/states';

const setDefaultModeButton = () => {
  selectors.menuContainer.childNodes.forEach(menuItem => {
    if (menuItem instanceof HTMLElement) {
      if (menuItem.textContent.toLowerCase() === states.getGameMode()) {
        menuItem.classList.add('navigation-panel__item--active');
      }
    }
  });
};

export default setDefaultModeButton;
