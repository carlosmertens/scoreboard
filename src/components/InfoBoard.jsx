import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const InfoBoard = () => {
  const { score } = useContext(ScoreContext);

  return <h4>{score > 100 ? 'Good Job!' : `Let's make it over 100!`}</h4>;
};

export default InfoBoard;
