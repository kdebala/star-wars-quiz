// import {
//   Mode,
//   arrSelected,
//   maxPeopleValue,
//   maxStarshipsValue,
//   maxVehiclesValue,
//   notAvailablePeople,
//   notAvailableStarships,
//   notAvailableVehicles,
//   setAnswer,
//   answer,
//   gameMode,
// } from './_defaults';

// import { playGame } from '../components/buttons/_buttons';
// import {
//   answers1,
//   answers2,
//   answers3,
//   answers4,
//   headerEl,
//   modeRulesContent,
// } from './_consts';

// import { btnsAnswer, imgItem } from './_consts';
// import { getElementName } from '../services/_swapi';
// import { getImageByName } from './_assets';
// import { gameDescriptionText, gameHeaderText } from './_defaultsfunctions';

// export function getMaxValue(mode: Mode) {
//   if (mode === 'people') {
//     return maxPeopleValue;
//   } else if (mode === 'vehicles') {
//     return maxVehiclesValue;
//   } else {
//     return maxStarshipsValue;
//   }
// }
// export function excludeNotAvailable(mode: Mode) {
//   const maxValue = getMaxValue(mode);
//   for (let i = 1; i <= maxValue; i++) {
//     if (notAvailable(mode).includes(i)) {
//       arrSelected.push(i);
//     }
//   }
// }
// export function getproperid(mode: Mode) {
//   const maxValue = getMaxValue(mode);
//   const arr: number[] = []; // zawiera liczby do wylosowania

//   excludeNotAvailable(mode);

//   for (let i = 1; i <= maxValue; i++) {
//     if (!arrSelected.includes(i)) {
//       arr.push(i);
//     }
//   }

//   const properId = arr[Math.floor(Math.random() * arr.length)];
//   arrSelected.push(properId);

//   return properId;
// }

// export function getFakeIds(mode: Mode) {
//   const maxValue = getMaxValue(mode);
//   const arr: number[] = []; // zawiera liczby do wylosowania

//   for (let i = 1; i <= maxValue; i++) {
//     if (!arrSelected.includes(i)) {
//       arr.push(i);
//     }
//   }
//   const firstFakeId = arr[Math.floor(Math.random() * arr.length)];
//   let index = arr.indexOf(firstFakeId);
//   if (index !== -1) {
//     arr.splice(index, 1); //wyrzucamy ten element
//   }
//   const secondFakeId = arr[Math.floor(Math.random() * arr.length)];
//   index = arr.indexOf(secondFakeId);
//   if (index !== -1) {
//     arr.splice(index, 1);
//   }
//   const thirdFakeId = arr[Math.floor(Math.random() * arr.length)];
//   return [firstFakeId, secondFakeId, thirdFakeId];
// }

// export const shuffleArray = (array: number[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// };

// export const checkAnswer = async (e: Event) => {
//   const clicked = (e.target as Element).closest('.btn-answer');
//   if (!clicked) return;
//   btnsAnswer.forEach(btn => {
//     btn.classList.remove('correct');
//     btn.classList.remove('incorrect');
//   });

//   const answ = await getElementName(answer.mode, answer.id);
//   //
//   clicked.textContent === answ
//     ? clicked.classList.add('correct')
//     : clicked.classList.add('incorrect');
// };

// export async function displayAnswers(mode: Mode) {
//   //get ids of answers (id is correct, ids are fake)
//   const id = getproperid(mode);
//   const ids = getFakeIds(mode);

//   //adding correct id to fake ones
//   ids.push(id);

//   //shuffle ids to randomize them on screen
//   shuffleArray(ids);

//   // tutaj powinien pojawic sie spinner (jakies ladowanie czy cos) z flaga do ukryca

//   //trying to get promise, in case of error calling itselft to start proces again (get new id's)
//   try {
//     //trying to get annswers for that questions
//     const answ1 = await getElementName(mode, ids[0]);
//     const answ2 = await getElementName(mode, ids[1]); //np. "Luke Skywalker"
//     const answ3 = await getElementName(mode, ids[2]);
//     const answ4 = await getElementName(mode, ids[3]);

//     //showing image of that correct answer
//     (imgItem as HTMLImageElement).src = getImageByName(`${mode}_${id}`);

//     //save answer
//     setAnswer(mode, id);

//     //showing answers
//     answers1.textContent = answ1;
//     answers2.textContent = answ2; // button2.textcontent = "luke Skywalker"
//     answers3.textContent = answ3;
//     answers4.textContent = answ4;

//     // tutaj ukryć spinner

//     /////checking if the given answer is correct or no:

//     btnsAnswer.forEach(btn =>
//       btn.addEventListener('click', function (e) {
//         checkAnswer(e);
//       }),
//     );
//   } catch (error) {
//     //in case of error, start over
//     playGame(mode);
//   }
// }

// export function notAvailable(mode: Mode) {
//   if (mode === 'people') {
//     return notAvailablePeople;
//   } else if (mode === 'starships') {
//     return notAvailableStarships;
//   } else {
//     return notAvailableVehicles;
//   }
// }
