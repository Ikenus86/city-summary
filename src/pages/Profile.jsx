import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const defaultProfile = {
    name: '',
    city: '',
    address: '',
    profilePictureUrl: '',
  };
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      setProfile(defaultProfile);
      localStorage.setItem('profile', JSON.stringify(defaultProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('profilePictureUrl', profile.profilePictureUrl);
    console.log('saved');
  };

  const handlePictureUrlChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const profilePictureUrl = profile.profilePictureUrl ? profile.profilePictureUrl : "";
  
  

  return (
    <div className="profile-page">
      <h2>Profilo</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Nome:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <label>
          URL Foto Profilo:
          <input type="text" name="profilePictureUrl" value={profile.profilePictureUrl} onChange={handlePictureUrlChange} />
        </label>
        <div className='profile-icon'>
          <img  alt="Profile" src={profile.profilePictureUrl} />
        </div>        
        <label>
          Città:
          <input type="text" name="city" value={profile.city} onChange={handleChange} />
        </label>
        <label>
          Indirizzo:
          <input type="text" name="address" value={profile.address} onChange={handleChange} />
        </label>
        <button type="submit">Salva</button>
      </form>
    
      <div className="map-container">
        <iframe
          title="Mappa"
          width="100%"
          height="200"
          src={`https://maps.google.com/maps?q=${profile.city}&output=embed`}
        />
      </div>
    </div>
  );
};

export default Profile;