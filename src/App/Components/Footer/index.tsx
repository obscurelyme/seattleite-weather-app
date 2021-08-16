import React from 'react';

export default function Footer(): React.ReactElement {
  const created = 2021;
  const currentYear = new Date().getFullYear();

  function copyrightYears(): string {
    if (created === currentYear) {
      return `${created}`;
    }
    return `${created}-${currentYear}`;
  }

  return (
    <footer>
      <h6>&copy; {copyrightYears()}, Nico Greco</h6>
    </footer>
  );
}
