import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';
import InfoBoard from './InfoBoard';

const Scoreboard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);

  return (
    <section className='scoreboard'>
      <h2>Scoreboard Component</h2>

      <div>
        <h3>Your current score is {score}</h3>
        <div className='btn-group'>
          <button onClick={plusScore}>+</button>
          <button onClick={minusScore}>-</button>
        </div>
        <InfoBoard />
      </div>
    </section>
  );
};

export default Scoreboard;
