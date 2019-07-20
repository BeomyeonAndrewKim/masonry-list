import React from 'react';

import './index.scss';

const List = React.forwardRef(({ sibaImages }, ref) => {
  const renderSibaList = sibaImages => {
    return sibaImages.map((sibaImg, index) => <img className="siba-img" src={sibaImg} alt="시바견" key={index} />);
  };
  return (
    <div ref={ref} className="siba-list">
      {renderSibaList(sibaImages)}
    </div>
  );
});

export default List;
