import './menu.scss';
import chooseNavMode from '../../services/chooseNavMode';
import createElement from '../../utils/createElement';

const createnavigationPanelMenu = () => {
  const navigationPanelMenu = createElement(
    'nav',
    'navigation-panel__menu-container',
  );
  const buttonPeople = createElement(
    'button',
    'navigation-panel__item',
    '',
    '',
    'People',
  );
  const buttonVehicles = createElement(
    'button',
    'navigation-panel__item',
    '',
    '',
    'Vehicles',
  );
  const buttonStarships = createElement(
    'button',
    'navigation-panel__item',
    '',
    '',
    'Starships',
  );
  navigationPanelMenu.appendChild(buttonPeople);
  navigationPanelMenu.appendChild(buttonVehicles);
  navigationPanelMenu.appendChild(buttonStarships);

  return navigationPanelMenu;
};

export default createnavigationPanelMenu;
