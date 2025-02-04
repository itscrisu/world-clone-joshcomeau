import React from 'react';
import GameDialog from '../GameDialog/GameDialog';

function GameWonDialog({ numOfGuesses }) {
  return (
    <GameDialog status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
    </GameDialog>
  );
}

export default GameWonDialog;
