import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import { useAnswer } from '../Game/Game';

function Guess({ value }) {
  const answer = useAnswer();
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span key={num} className={`cell ${result ? result[num].status : ''}`}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
