import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox, ...props }) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div {...props}>
      <div style={styles}></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
