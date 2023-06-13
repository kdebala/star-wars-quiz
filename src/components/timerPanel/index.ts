import '../timerPanel/_timer-panel.scss';
import createElement from '../../utils/createElement';
import LightSaberSrc from '../../assets/others/LightsaberHandle.png';
const createTimerPanel = () => {
  const sectionEl = createElement('section', 'timer-panel');
  const saberLight = createElement('div', 'timer-panel__lightsaber');
  const LightsaberArea = createElement(
    'div',
    'timer-panel__lightsaber-area',
    LightSaberSrc,
    'timer-panel__lightsaber-img',
  );
  const textTimerArea = createElement('div', 'timer-panel__text-timer');
  LightsaberArea.appendChild(saberLight);
  sectionEl.appendChild(LightsaberArea);
  sectionEl.appendChild(textTimerArea);
  return sectionEl;
  //_helper.app?.appendChild(sectionEl);
};

export default createTimerPanel;
