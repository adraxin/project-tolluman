import React from 'react';
import img1 from './screenshot005.jpg';

function Image({ className }: { className?: string }) {
  return(
    <div>
      <img src={img1} alt=""/>
    </div>
  )
}

export default Image
