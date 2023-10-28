import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ link, picture }) {
  return (
    <div>
      <div>
        <img src={picture} alt={`project-${picture}`} />
      </div>
      <div>
        <a href={link}>
          Click link to see Github repo
        </a>
      </div>
    </div>
  );
}
