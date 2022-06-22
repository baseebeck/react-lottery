import './App.css';
import LottoBall from './LottoBall';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
