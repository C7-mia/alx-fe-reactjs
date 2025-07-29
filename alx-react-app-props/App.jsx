
import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
