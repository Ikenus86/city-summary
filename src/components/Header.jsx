import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
const Header = () => {
  // Get profile picture from local storage or use a placeholder
  const profileData = JSON.parse(localStorage.getItem('profile')) || {};
  const profilePictureUrl = profileData.profilePictureUrl || "https://via.placeholder.com/40"; // Placeholder URL
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profilo');

  let currentProfilePicture = profilePictureUrl;
  return (
    <header className="header">
      <div className="logo">Sondaggi Città</div>
      <nav>
        <ul>
          <li>
            <Link to="/profilo" className={isProfilePage ? "active" : ""}>
              Profilo
            </Link>
          </li>
          <li><Link to="/sondaggi">Sondaggi</Link></li>
          <li><Link to="/risultati">Risultati</Link></li>
          <li><Link to="/crea">Crea</Link></li>
        </ul>
      </nav>
      <div className="profile-icon" style={{ backgroundImage: `url(${currentProfilePicture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src={currentProfilePicture} alt="Icona Profilo" style={{ display: 'none' }} />
      </div>
    </header>
  );
};
export default Header;




