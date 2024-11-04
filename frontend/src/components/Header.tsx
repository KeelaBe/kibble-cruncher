import React, { useState } from 'react';
// ...rest of the imports

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <h1>Kibble Cruncher</h1>
      <nav>
        <a href='/'>Home</a>
        <a href='/About'>About</a>
        <a href='/Contact'>Contact</a>
      </nav>
    </header>
  );
}

export default Header;

