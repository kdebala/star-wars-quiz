import chooseNavMode from '../../services/chooseNavMode';
import selectors from '../../consts/selectors';
import generateGamePanelContent from '../../services/generateGamePanelContent';
import states from '../../consts/states';
import setDefaultModeButton from '../../services/setDefaultModeButton';
import playGame from '../../services/playGame';
import getGamePanelElements from '../../services/getGamePanelElements';

const runMainLogic = () => {
  setDefaultModeButton();
  generateGamePanelContent(states.getGameMode(), states.getRulesView());
  selectors.menuContainer.addEventListener('click', chooseNavMode);
  selectors.switcher.addEventListener('click', () => {
    states.getRulesView()
      ? states.setRulesView(false)
      : states.setRulesView(true);
    generateGamePanelContent(states.getGameMode(), states.getRulesView());
  });
  selectors.playBtn.addEventListener('click', () => {
    playGame(states.getGameMode());
  });
  //event listener na guziki żeby spr poprawność i liczyć punkty i kolejne pyt
  selectors.btnsAnswer.childNodes.forEach(btn => {
    btn.addEventListener('click', function (e) {
      getGamePanelElements.checkAnswer(e);
    });
  });
};

export default runMainLogic;
