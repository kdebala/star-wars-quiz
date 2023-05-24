const maxPeopleValue = 82;
const maxVehiclesValue = 39;
const maxStarshipsValue = 36;
const arrSelected: number[] = []; // zawiera liczby juz wylosowane | do zastanowienia sie czy nie przeniesc do localstorage

const notAvailablePeople = [17];
const notAvailableVehicles = [
  1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39,
];
const notAvailableStarships = [
  1, 2, 3, 4, 6, 7, 8, 14, 16, 17, 18, 19, 20, 24, 25, 26, 30, 32, 33, 34, 35,
  36,
];

////////////////////
export default {
  maxPeopleValue,
  maxVehiclesValue,
  maxStarshipsValue,
  arrSelected,
  notAvailablePeople,
  notAvailableVehicles,
  notAvailableStarships,
};
