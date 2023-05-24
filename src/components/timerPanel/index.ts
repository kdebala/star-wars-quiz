import createElement from '../../utils/createElement';
const createTimerPanel = () => {
  const sectionEl = createElement('section', 'timer-panel');
  const LightsaberArea = createElement('div', 'lightsaber-area');
  const lightsaberImg = createElement(
    'img',
    'lightsaberImg',
    '',
    'lightsaber-img',
  );
  const textTimerArea = createElement('div', 'text-timer');
  LightsaberArea.appendChild(lightsaberImg);
  sectionEl.appendChild(LightsaberArea);
  sectionEl.appendChild(textTimerArea);
  return sectionEl;
  //_helper.app?.appendChild(sectionEl);
};

export default createTimerPanel;
