import React from 'react';

const Buttons = ({ getSibaImages, clearSibaList }) => {
  return (
    <div>
      <button onClick={getSibaImages}>GET DOGS</button>
      <button onClick={clearSibaList}>CLEAR DOGS</button>
    </div>
  );
};

export default Buttons;
