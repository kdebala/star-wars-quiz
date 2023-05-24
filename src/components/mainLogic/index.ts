import chooseNavMode from '../../services/chooseNavMode';
import consts from '../../consts/selectors';
import generateGamePanelContent from '../../services/generateGamePanelContent';
import states from '../../consts/states';
import setDefaultModeButton from '../../services/setDefaultModeButton';

const runMainLogic = () => {
  setDefaultModeButton();
  generateGamePanelContent(states.getGameMode(), states.getRulesView());
  consts.menuContainer.addEventListener('click', chooseNavMode);
  consts.switcher.addEventListener('click', () => {
    states.getRulesView()
      ? states.setRulesView(false)
      : states.setRulesView(true);
    generateGamePanelContent(states.getGameMode(), states.getRulesView());
  });
};

export default runMainLogic;
