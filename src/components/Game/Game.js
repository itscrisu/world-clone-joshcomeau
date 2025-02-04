import React, { createContext, useContext, useState } from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameLostDialog from '../GameLostDialog/GameLostDialog';
import GameWonDialog from '../GameWonDialog';
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
  const [userStatus, setUserStatus] = useState('playing');
  const [guesses, setGuesses] = useState([]);

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses);

    if(guess === answer) {
      setUserStatus('won')
    } else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setUserStatus('lost')
     }
  }

  return (
    <>
    <AnswerContext.Provider value={answer}>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={handleGuess} />
      {userStatus === 'won' && <GameWonDialog numOfGuesses={guesses.length}/> }
      {userStatus === 'lost' && <GameLostDialog />}
      </AnswerContext.Provider>
    </>
  );
}

export default Game;
