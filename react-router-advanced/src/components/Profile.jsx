import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Settings from './Settings';

const Profile = () => {
  return (
    <Routes>
      <Route path="user" element={<UserProfile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default Profile;
