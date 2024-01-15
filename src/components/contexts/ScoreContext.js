import { createContext, useState } from 'react';

const ScoreContext = createContext(null);

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const plusScore = () => setScore((score) => score + 10);
  const minusScore = () => setScore((score) => score - 10);

  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreContextProvider };
