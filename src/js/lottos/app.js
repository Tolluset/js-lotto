import payFormEventListener from './components/payForm';
import toggleButtonEventListener from './components/toggleButton';
import checkResultButtonEventListener from './components/checkResultButton';
import checkResultModalEventListener from './components/checkResultModal';

const App = () => {
  payFormEventListener();
  toggleButtonEventListener();
  checkResultButtonEventListener();
  checkResultModalEventListener();
};

export default App;
