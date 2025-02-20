import React, { useState } from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
