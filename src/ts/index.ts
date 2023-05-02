import './_game';
import '../sass/style.scss';
// import { createGame } from './_builder';
// import { gameMode } from './_defaults';
// createGame(gameMode);
import { nav, rankingRulesBtn } from './_consts';
// const nav = document.querySelector('.nav');
// export const navItem = document.querySelectorAll('.nav__item');
import { chooseNavMode, rulesRankingChanger } from './_actions';

nav?.addEventListener('click', function (e) {
  chooseNavMode(e);
  //   console.log('h');
});

rankingRulesBtn?.addEventListener('click', function () {
  rulesRankingChanger();
});

// playGameBtn?.addEventListener('click', function () {
//   //playGame();
// });
