import './mainView';
import navigationPanel from '../navigationPanel';
import gamePanel from '../gamePanel';
import timerPanel from '../timerPanel';
const app = document.querySelector('.app');

const createMainView = () => {
  app.appendChild(navigationPanel());
  app.appendChild(gamePanel());
  app.appendChild(timerPanel());
};

export default createMainView;
