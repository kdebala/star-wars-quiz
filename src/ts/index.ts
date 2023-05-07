import './_game';
import '../sass/style.scss';
import { nav, rankingRulesBtn, playGameBtn } from './_consts';
import { chooseNavMode, rulesRankingChanger, playGame } from './_actions';
import { gameMode } from './_defaults';
import { generateGameContent } from './_functions';

generateGameContent(gameMode);
nav?.addEventListener('click', function (e) {
  chooseNavMode(e);
});

rankingRulesBtn?.addEventListener('click', function () {
  rulesRankingChanger();
});

playGameBtn?.addEventListener('click', function () {
  playGame(gameMode);
});
