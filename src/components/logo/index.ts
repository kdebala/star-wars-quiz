import './logo.scss';
import logoImageSrc from '../../assets/others/logo.svg';
import createElement from '../../utils/createElement';

const createNavigationPanelLogo = () => {
  const navigationPanelLogo = createElement(
    'div',
    'navigation-panel__logo-container',
    logoImageSrc,
    'navigation-panel__image',
  );
  return navigationPanelLogo;
};

export default createNavigationPanelLogo;
