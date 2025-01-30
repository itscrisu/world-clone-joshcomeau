import React from 'react';

function GuessInput( {guess, setGuess, addGuess} ) {

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
