import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Mario Rossi',
    city: 'Roma',
    address: 'Via Roma 123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="profile-page">
      <h2>Profilo</h2>
      <form>
        <label>
          Nome:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <label>
          Città:
          <input type="text" name="city" value={profile.city} onChange={handleChange} />
        </label>
        <label>
          Indirizzo:
          <input type="text" name="address" value={profile.address} onChange={handleChange} />
        </label>
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