import React from 'react';

function GameDialog({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default GameDialog;
