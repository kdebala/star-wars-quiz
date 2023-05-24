// import '../timerPanel/_timer-panel.scss';
// import { createEl } from '../../ts/_functions';
// import { app, timerPanel, textTimerArea } from '../../ts/_consts';
// import LightSaberSrc from '../../assets/others/LightsaberHandle.png';

// //
// // export const createTimerPanel = () => {
// //   const sectionEl = createEl('section', 'timer-panel');
// //   const LightsaberArea = createEl('div', 'lightsaber-area');
// //   const lightsaberImg = createEl(
// //     'img',
// //     'lightsaberImg',
// //     LightSaberSrc,
// //     'lightsaber-img',
// //   );
// //   const textTimerArea = createEl('div', 'text-timer');
// //   LightsaberArea.appendChild(lightsaberImg);
// //   sectionEl.appendChild(LightsaberArea);
// //   sectionEl.appendChild(textTimerArea);
// //   app?.appendChild(sectionEl);
// // };

// //let counter: { min: number; sec: number };

// ///////////////////
// //function to show time in textTimerArea:
// export function TextTimerCounter(minutes: number, seconds: number) {
//   let remainingTime;

//   const sec = `${seconds}`.padStart(2, '0');

//   if (minutes === 0 && seconds === 0) {
//     remainingTime = 'Time end';
//   } else {
//     remainingTime = `Time Left: ${minutes}m : ${sec}s`;
//   }

//   return remainingTime;
// }
// ///////////////
// //////////
// // export const convertTimeToSeconds = (minutes, seconds) =>
// //   minutes * 60 + seconds;

// /////////////////////////////////

// export function Timer() {
//   let minutes = 1;
//   let seconds = 59;
//   //const allSeconds = convertTimeToSeconds(minutes, seconds);

//   const intervalId = setInterval(function () {
//     seconds -= 1;

//     textTimerArea.textContent = TextTimerCounter(minutes, seconds);

//     if (minutes > 0 && seconds === 0) {
//       minutes -= 1;
//       seconds = 59;
//     } else if (minutes === 0 && seconds !== 0) {
//       seconds -= 1;
//     } else if (minutes === 0 && seconds === 0) {
//       clearInterval(intervalId);
//       timerPanel.remove();
//     }
//   }, 1000);
// }
