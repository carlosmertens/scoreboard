import Scoreboard from './components/Scoreboard';
import { ScoreContextProvider } from './components/contexts/ScoreContext';

function App() {
  return (
    <ScoreContextProvider>
      <div className='App'>
        <Scoreboard />
      </div>
    </ScoreContextProvider>
  );
}

export default App;
