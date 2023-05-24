import createElement from '../../utils/createElement';
import logo from '../logo';
import menu from '../menu';
import './navigationPanel';

const createNavigationPanel = () => {
  const navigationPanel = createElement('section', 'navigation-panel');
  navigationPanel.appendChild(logo());
  navigationPanel.appendChild(menu());
  return navigationPanel;
};

export default createNavigationPanel;
