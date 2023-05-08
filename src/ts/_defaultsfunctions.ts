import { getImageByName } from './_assets';
import { imgItem } from './_consts';
import { Mode } from './_defaults';
import { getproperid } from './_functions';
import { getElementName } from './_swapi';

export const gameDescriptionText = async (mode: Mode) => {
  const id = getproperid(mode);
  (imgItem as HTMLImageElement).src = getImageByName(`${mode}_${id}`);
  const answ = await getElementName(mode, id);
  //const answ = 'ads';
  return `You have two minutes (2m) to answer as many questions as possible. 
  During the game on each question you need to select ${
    mode === 'people' ? 'who' : 'what'
  } from Star Wars is showed on the left (${answ} right now) from available options`;
};
export const gameHeaderText = (mode: Mode) => {
  return `MODE: ${
    mode === 'people' ? 'Who is this character?' : 'What is it on the picture?'
  }`;
};
