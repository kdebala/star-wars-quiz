import './ranking';
import rankingImageSrc from '../../assets/others/ranking.svg';
import createElement from '../../utils/createElement';

const createGamePanelRanking = () => {
  const gamePanelRanking = createElement('div', 'game-panel__ranking');
  const gamePanelRankingTitle = createElement(
    'div',
    'game-panel__ranking-title',
    rankingImageSrc,
    'game-panel__ranking-title-icon',
  );
  const gamePanelRankingTitleText = createElement(
    'span',
    'game-panel__ranking-title-text',
    '',
    '',
    'Mode Ranking',
  );
  const gamePanelRankingContent = createElement(
    'div',
    'game-panel__ranking-content',
  );

  gamePanelRankingTitle.appendChild(gamePanelRankingTitleText);
  gamePanelRanking.classList.add('game-panel-box');
  gamePanelRanking.appendChild(gamePanelRankingTitle);
  gamePanelRanking.appendChild(gamePanelRankingContent);
  gamePanelRanking.style.display = 'none';
  return gamePanelRanking;
};

export default createGamePanelRanking;
