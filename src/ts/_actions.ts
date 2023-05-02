import { navItem, rankingRulesBtn, ranking, modeRules } from './_consts';
import { setMode, Mode } from './_defaults';
import { getRanking } from './_ranking';
export const chooseNavMode = (e: Event) => {
  const clicked = (e.target as Element).closest('.nav__item');
  //guard clause
  if (!clicked) return;
  navItem.forEach(item => {
    item.classList.remove('nav__item--active');
  });

  clicked.classList.add('nav__item--active');

  setMode(clicked.textContent.toLowerCase() as Mode);
};

export const rulesRankingChanger = () => {
  if (rankingRulesBtn.textContent === 'Half of fame') {
    console.log('wykonuje true, button to: Half of fame');
    rankingRulesBtn.textContent = 'Rules';
    (ranking as HTMLElement).style.display = 'flex';
    (modeRules as HTMLElement).style.display = 'none';
    //showTopPlayers(wynikidowstawieniawtabelebedzieonawforcaciejson());
  } else {
    console.log('wykonuje false, button to: Rules');
    rankingRulesBtn.textContent = 'Half of fame';
    (ranking as HTMLElement).style.display = 'none';
    (modeRules as HTMLElement).style.display = 'block';
  }
};
