import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
export default function Links() {
  const path = ['Home', 'Blog'];

  return (
    <div>
      {path.map((p, i) => {
        <div key={i}>
          <span>{p}</span>
          <span>{i}</span>

          <AiOutlineRight />
        </div>;
      })}
    </div>
  );
}
