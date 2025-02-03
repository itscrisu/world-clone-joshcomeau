import React, { createContext, useContext, useState } from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
const AnswerContext = createContext(answer);

export function useAnswer() {
  return useContext(AnswerContext);
}

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
    <AnswerContext.Provider value={answer}>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={handleGuess} />
      </AnswerContext.Provider>
    </>
  );
}

export default Game;
