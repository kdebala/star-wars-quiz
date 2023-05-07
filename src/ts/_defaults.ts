export type Mode = 'people' | 'vehicles' | 'starships';
export type ImgSrc = {
  name: string;
  src: string;
};
type Answer = {
  mode: Mode;
  id: number;
};
// eslint-disable-next-line prefer-const
export let answer: Answer;
const defaultGameMode: Mode = 'people';
export let gameMode: Mode = defaultGameMode;
export function setMode(mode: Mode) {
  gameMode = mode;
}

export function setAnswer(mode: Mode, id: number) {
  answer = { mode, id };
}
// export function getAnswer() {
//   return answer;
// }

export const maxPeopleValue = 82;
export const maxVehiclesValue = 39;
export const maxStarshipsValue = 36;
export const arrSelected: number[] = []; // zawiera liczby juz wylosowane | do zastanowienia sie czy nie przeniesc do localstorage

export const notAvailablePeople = [17];
export const notAvailableVehicles = [
  1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39,
];
export const notAvailableStarships = [
  1, 2, 3, 4, 6, 7, 8, 14, 16, 17, 18, 19, 20, 24, 25, 26, 30, 32, 33, 34, 35,
  36,
];
