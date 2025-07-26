import React from 'react';
import ProfilePage from './ProfilePage';
import { UserDataProvider } from './UserDataContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserDataProvider value={userData}>
      <ProfilePage />
    </UserDataProvider>
  );
}

export default App;
    
