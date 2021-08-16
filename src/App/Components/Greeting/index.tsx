import React from 'react';

export default function Greeting(): React.ReactElement {
  const currentDay = new Date().getDay();

  if (currentDay === 5) {
    return <p>Hope you have a wonderful weekend!</p>;
  }

  if (currentDay === 6 || currentDay === 0) {
    return <p>Hope you are having a wonderful weekend!</p>;
  }

  return <p>Hope you have a wonderful week!</p>;
}
