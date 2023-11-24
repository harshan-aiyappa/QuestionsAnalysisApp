// frontend/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/questions" className="css-button-3d--black">Questions</Link>
          </li>
          <li>
            <Link to="/analysis" className="css-button-3d--black">Analysis</Link>
          </li>
        </ul>
      </nav>
      <div class="logo-container">
    <img src="https://lingotran.com/wp-content/uploads/2022/06/Lingotran_Logo_white-150x47-1.webp" alt="Lingotran Logo" />
  </div>
    </header>
  );
};

export default Header;
