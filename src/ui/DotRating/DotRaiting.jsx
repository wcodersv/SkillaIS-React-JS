import React from 'react';
import './DotRaiting.css';

export const DotRaiting = ({divClass = 'perfect', figClass = 'dot'}) => {
  return (
    // для дива классы perfect / good / bad
    <div className={divClass}>
      {/* для точек классы dot / gray /red */}
      <figure className={figClass}></figure>
      <figure className={figClass}></figure>
      <figure className={figClass}></figure>
    </div>
  );
};
