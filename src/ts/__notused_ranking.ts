// import { Mode, gameMode } from './_defaults';
// import { gameDiv } from './_consts';
// import rankingImg from '../assets/ranking.svg';

// export const getRankingTable = function () {
//   //tworzymy tabelke
//   const rankingTableContent = document.createElement('table');
//   rankingTableContent.classList.add('ranking_content');

//   //tworzymy thead
//   const header = document.createElement('thead');
//   header.classList.add('ranking_content', 'content_header');

//   //tworzymy tr
//   const headerRow = document.createElement('tr');
//   headerRow.classList.add('content_header-row');

//   // w tr robimy array of columns, robimy pętelke -> dla kazdej kolumny tworzymy
//   //element th
//   const columnNames = ['Place', 'Player', 'Answered'];
//   columnNames.forEach(name => {
//     const th = document.createElement('th');
//     th.innerText = `${name}`;
//     headerRow.appendChild(th);
//   });

//   header.appendChild(headerRow);
//   rankingTableContent.appendChild(header);

//   /////tworzymy tbody
//   const contentTableBody = document.createElement('tbody');
//   contentTableBody.classList.add('content_body');

//   //let playersRankingData= setRank(); ??
//   ////////////////////////////////////////////////////////////////////////
//   //if (playersRankingData[mode].length === 0) {
//   const fakeRanking = [
//     {
//       playerName: 'That can be you',
//       score: 20,
//       questions: 20,
//     },
//   ];
//   fakeRanking.forEach((player, index) => {
//     const markup = `
//       <tr>
//         <td class="content_body-row"> ${index + 1}${
//       index + 1 === 1 ? 'st' : 'nd'
//     } </td>
//         <td class="content_body-row"> ${player.playerName} </td>
//         <td class="content_body-row content_body-row--last"> ${
//           player.score
//         } / ${player.questions} </td>
//       </tr>`;
//     rankingTableContent.insertAdjacentHTML('beforeend', markup);
//   });
//   //   localStorage.setItem(
//   //     'rank',
//   //     JSON.stringify({
//   //       people: [],
//   //       vehicles: [],
//   //       starships: []
//   //     })
//   //   );
//   //} else {
//   //playersRankingData[mode].forEach((player, index) => {
//   //     const markup = `
//   //     <tr>
//   //       <td class="content_body-row"> ${index + 1}${
//   //       index + 1 === 1 ? 'st' : 'nd'
//   //     } </td>
//   //       <td class="content_body-row"> ${player.playerName} </td>
//   //       <td class="content_body-row content_body-row--last"> ${
//   //         player.score
//   //       } / ${player.questions} </td>
//   //     </tr>`;
//   //     rankingTableContent.insertAdjacentHTML('beforeend', markup);
//   //   });

//   //   //return rankingTableContent;
//   // }
//   return rankingTableContent;
//   //gameDiv?.appendChild(rankingTableContent);
// };

// ///////

// export const getRanking = function () {
//   const ranking = document.createElement('div');
//   ranking.classList.add('ranking');

//   const rankingTitle = document.createElement('div');
//   rankingTitle.classList.add('ranking_title');

//   const rankingTitleIcon = document.createElement('img');
//   rankingTitleIcon.src = rankingImg;
//   rankingTitleIcon.classList.add('ranking_icon');
//   rankingTitle.appendChild(rankingTitleIcon);

//   const rankingTitleText = document.createElement('span');
//   rankingTitleText.classList.add('ranking_text');
//   rankingTitleText.innerText = 'Mode Ranking';

//   rankingTitle.appendChild(rankingTitleText);

//   rankingWrapper.appendChild(rankingTitle);
//   const ranking = getRankingTable();
//   //console.log(`tu: ${ranking}`);
//   rankingWrapper.appendChild(ranking);

//   gameDiv?.appendChild(rankingWrapper);
//   return rankingWrapper;
// };
