import React from 'react';
import { useAnswer } from '../Game/Game';
import GameDialog from '../GameDialog/GameDialog';

function GameLostDialog() {
  const answer = useAnswer()
  return (
    <GameDialog status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </GameDialog>
  );
}

export default GameLostDialog;
