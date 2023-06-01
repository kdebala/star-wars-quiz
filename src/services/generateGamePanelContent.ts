import { Mode } from '../consts/types';
import selector from '../consts/selectors';
import gamePanelElements from './getGamePanelElements';

const generateGamePanelContent = async (mode: Mode, isRulesView: boolean) => {
  // display question (depends on mode)

  const question = gamePanelElements.getQuestion(mode);
  selector.question.textContent = question;

  // content
  if (isRulesView) {
    //console.log(`You're in Rules View : ${isRulesView}`);

    selector.switcher.textContent = 'Hall of fame';
    if (selector.ranking instanceof HTMLElement) {
      selector.ranking.style.display = 'none';
    }
    if (selector.rules instanceof HTMLElement) {
      selector.rules.style.display = 'block';
    }
    if (selector.btnsAnswer instanceof HTMLElement) {
      selector.btnsAnswer.style.display = 'none';
    }
    //=========== logic
    const content = await gamePanelElements.getRules(mode);
    selector.rulesContent.textContent = content;
  } else {
    //console.log(`You're in Hall of fame View : ${isRulesView}`);
    selector.switcher.textContent = 'Rules';
    if (selector.ranking instanceof HTMLElement) {
      selector.ranking.style.display = 'flex';
    }
    if (selector.rules instanceof HTMLElement) {
      selector.rules.style.display = 'none';
    }
    if (selector.btnsAnswer instanceof HTMLElement) {
      selector.btnsAnswer.style.display = 'none';
    }
    //=========== logic

    //const content = await getGamePanelContent(mode);
    // const content = gamePanelElements.getRanking();
    // selector.rulesContent.textContent = content;
  }
};

export default generateGamePanelContent;
