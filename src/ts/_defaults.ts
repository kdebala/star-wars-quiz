export type Mode = 'people' | 'vehicles' | 'starships';
const defaultGameMode: Mode = 'people';
export let gameMode: Mode = defaultGameMode;

export const answer = 'To jest testowy string jako ANSWERS';

export function setMode(mode: Mode) {
  gameMode = mode;
}

// export let rules = true;
// export function setRules(isRules: boolean) {
//   rules = isRules;
// }
