import selectors from '../consts/selectors';

const lightSaber = (progress: string) => {
  if (selectors.lightSaber instanceof HTMLElement) {
    selectors.lightSaber.style.setProperty('--progress', `${progress}%`);
  }
};

const initializeClock = (maxTimeForQuiz: number) => {
  let timeLeft = maxTimeForQuiz;

  const updateClock = () => {
    timeLeft--;

    //calculate progress
    const progress = ((maxTimeForQuiz - timeLeft) / maxTimeForQuiz) * 100;

    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);

    // console.log(`0${minutes}m, 0${seconds}s`);

    const minutesSpan = ('0' + minutes).slice(-2);
    const secondsSpan = ('0' + seconds).slice(-2);
    selectors.textTimerArea.textContent = timeToText(minutesSpan, secondsSpan);

    lightSaber(progress.toFixed(2));

    if (minutes <= 0 && seconds <= 0) {
      clearInterval(timeinterval);
      // end game
      //show ranking
    }
  };
  const timeinterval = setInterval(updateClock, 1000);
};

const timeToText = (minutes: string, seconds: string) => {
  // console.log(`min: ${minutes}, sec: ${seconds}`);
  return minutes === '00' && seconds === '00'
    ? 'Time end'
    : `Time Left: ${minutes}m : ${seconds}s`;
};
export default initializeClock;
