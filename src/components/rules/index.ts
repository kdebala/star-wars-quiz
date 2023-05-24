import './rules';
import rulesImageSrc from '../../assets/others/rules.svg';
import createElement from '../../utils/createElement';

const createGamePanelRules = () => {
  const gamePanelRules = createElement('div', 'game-panel__rules');
  const gamePanelRulesTitle = createElement(
    'div',
    'game-panel__rules-title',
    rulesImageSrc,
    'game-panel__rules-title-icon',
  );
  const gamePanelRulesTitleText = createElement(
    'span',
    'game-panel__rules-title-text',
    '',
    '',
    'Mode rules',
  );
  const gamePanelRulesContent = createElement(
    'div',
    'game-panel__rules-content',
    '',
    '',
    '',
  );

  gamePanelRulesTitle.appendChild(gamePanelRulesTitleText);
  gamePanelRules.appendChild(gamePanelRulesTitle);
  gamePanelRules.appendChild(gamePanelRulesContent);
  return gamePanelRules;
};

export default createGamePanelRules;
