import { Answer, Mode } from './types';
//Game mode, we can switch between 'people', 'vehicles', 'starships'
const defaultGameMode: Mode = 'people';
let gameMode: Mode = defaultGameMode;

const setGameMode = (mode: Mode) => {
  gameMode = mode;
};

const getGameMode = () => {
  return gameMode;
};

//Rules View, we can determinate that we should show Rules View or Hall Of Fame view
// rulesView = true => we show rules
const defaultRulesView = true;
let rulesView: boolean = defaultRulesView;

const setRulesView = (isRulesView: boolean) => {
  rulesView = isRulesView;
};
const getRulesView = () => {
  return rulesView;
};

// eslint-disable-next-line prefer-const
let answer: Answer;

const setAnswer = (mode: Mode, id: number) => {
  answer = { mode, id };
};

const getAnswer = () => {
  return answer;
};

export default {
  setGameMode,
  getGameMode,
  getRulesView,
  setRulesView,
  getAnswer,
  setAnswer,
};
