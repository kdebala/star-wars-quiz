import defaults from '../consts/defaults';
import getImageByName from '../consts/imageAssets';
import selectors from '../consts/selectors';
import states from '../consts/states';
// import states from '../consts/states';
import { Mode } from '../consts/types';
import getElementName from './_swapi';
import playGame from './playGame';

const getMaxValue = (mode: Mode) => {
  if (mode === 'people') {
    return defaults.maxPeopleValue;
  } else if (mode === 'vehicles') {
    return defaults.maxVehiclesValue;
  } else {
    return defaults.maxStarshipsValue;
  }
};

const excludeNotAvailable = (mode: Mode) => {
  const maxValue = getMaxValue(mode);
  for (let i = 1; i <= maxValue; i++) {
    if (notAvailable(mode).includes(i)) {
      defaults.arrSelected.push(i);
    }
  }
};

const getproperid = (mode: Mode) => {
  const maxValue = getMaxValue(mode);
  const arr: number[] = []; // numbers to choose from

  excludeNotAvailable(mode);
  // console.log(`================================================`);
  // console.log(`defaults.arrSelected: ${defaults.arrSelected}`);
  // console.log(`================================================`);
  for (let i = 1; i <= maxValue; i++) {
    // console.log(`defaults.arrSelected: ${defaults.arrSelected} ==>> ${i}`);
    if (!defaults.arrSelected.includes(i)) {
      arr.push(i);
    }
  }
  const properId = arr[Math.floor(Math.random() * arr.length)];
  // console.log(`properID: ${properId}`);
  // console.log(`arr: ${arr}`);
  defaults.arrSelected.push(properId);

  return properId;
};

const notAvailable = (mode: Mode) => {
  if (mode === 'people') {
    return defaults.notAvailablePeople;
  } else if (mode === 'starships') {
    return defaults.notAvailableStarships;
  } else {
    return defaults.notAvailableVehicles;
  }
};

function getFakeIds(mode: Mode) {
  const maxValue = getMaxValue(mode);
  const arr: number[] = []; // numbers to choose from

  for (let i = 1; i <= maxValue; i++) {
    if (!defaults.arrSelected.includes(i)) {
      arr.push(i);
    }
  }
  const firstFakeId = arr[Math.floor(Math.random() * arr.length)];
  let index = arr.indexOf(firstFakeId);
  if (index !== -1) {
    arr.splice(index, 1); //we take out this element
  }
  const secondFakeId = arr[Math.floor(Math.random() * arr.length)];
  index = arr.indexOf(secondFakeId);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  const thirdFakeId = arr[Math.floor(Math.random() * arr.length)];
  return [firstFakeId, secondFakeId, thirdFakeId];
}

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const checkAnswer = async (e: Event) => {
  const clickedButton = (e.target as Element).closest('.game-panel__item');
  if (!clickedButton) return;

  const answ = await getElementName(
    states.getAnswer().mode,
    states.getAnswer().id,
  );

  clickedButton.textContent === answ
    ? clickedButton.classList.add('game-panel__item--correct')
    : clickedButton.classList.add('game-panel__item--incorrect');

  await displayAnswers(states.getGameMode());
};

const clearAnswers = () => {
  selectors.btnsAnswer.childNodes.forEach(btn => {
    if (btn instanceof HTMLElement) {
      btn.classList.remove('game-panel__item--correct');
      btn.classList.remove('game-panel__item--incorrect');
    }
  });
};
const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const displayAnswers = async (mode: Mode) => {
  //get ids of answers (id is correct, ids are fake)
  const id = getproperid(mode);
  const ids = getFakeIds(mode);

  //adding correct id to fake ones
  ids.push(id);

  //shuffle ids to randomize them on screen
  shuffleArray(ids);

  // spinner
  // selectors.answer1.classList.add('game-panel__item--loading');
  // selectors.answer2.classList.add('game-panel__item--loading');
  // selectors.answer3.classList.add('game-panel__item--loading');
  // selectors.answer4.classList.add('game-panel__item--loading');
  //hide textContent of buttons
  selectors.btnsAnswer.childNodes.forEach(btn => {
    if (btn instanceof HTMLElement) {
      btn.classList.add('game-panel__item--loading');
      btn.textContent = '';
      // if (btn.classList.contains('game-panel__item--loading')) {
      //   btn.textContent = '';
      // }
    }
  });
  //await delay(500);
  //trying to get promise, in case of error calling itselft to start proces again (get new id's)
  try {
    //trying to get annswers for that questions
    const answ1 = await getElementName(mode, ids[0]);
    const answ2 = await getElementName(mode, ids[1]); //np. "Luke Skywalker"
    const answ3 = await getElementName(mode, ids[2]);
    const answ4 = await getElementName(mode, ids[3]);

    //clear
    clearAnswers();

    //showing image of that correct answer
    if (selectors.image instanceof HTMLImageElement) {
      selectors.image.src = getImageByName(`${mode}_${id}`);
    }

    //save answer
    states.setAnswer(mode, id);

    //showing answers
    selectors.answer1.textContent = answ1;
    selectors.answer2.textContent = answ2; // button2.textcontent = "luke Skywalker"
    selectors.answer3.textContent = answ3;
    selectors.answer4.textContent = answ4;

    //hide spinner
    selectors.btnsAnswer.childNodes.forEach(btn => {
      if (btn instanceof HTMLElement) {
        btn.classList.remove('game-panel__item--loading');
      }
    });
    // selectors.answer1.classList.remove('game-panel__item--loading');
    // selectors.answer2.classList.remove('game-panel__item--loading');
    // selectors.answer3.classList.remove('game-panel__item--loading');
    // selectors.answer4.classList.remove('game-panel__item--loading');
  } catch (error) {
    //in case of error, start over
    playGame(mode);
  }
};

// =============================

const getRules = async (mode: Mode) => {
  const id = getproperid(mode);
  // console.log(`Tutaj sprawdzam: ${imgItem}`);
  if (selectors.image instanceof HTMLImageElement) {
    selectors.image.src = getImageByName(`${mode}_${id}`);
  }

  const answ = await getElementName(mode, id);
  // console.log(`Tutaj sprawdzam: ${getElementName(mode, id)}`);
  // //const answ = 'ads';
  return `You have two minutes (2m) to answer as many questions as possible.
  During the game on each question you need to select ${
    mode === 'people' ? 'who' : 'what'
  } from Star Wars is showed on the left (${answ} right now) from available options`;
};

const getQuestion = (mode: Mode) => {
  return `MODE: ${
    mode === 'people' ? 'Who is this character?' : 'What is it on the picture?'
  }`;
};

export default {
  getQuestion,
  getRules,
  displayAnswers,
  checkAnswer,
};
