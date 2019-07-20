import React from 'react';

const Loading = React.forwardRef(({ isLoading }, ref) => {
  return (
    <div ref={ref} className="loading">
      {!!isLoading && <span>Loading...</span>}
    </div>
  );
});

export default Loading;
