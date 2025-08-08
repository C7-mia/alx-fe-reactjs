import React, { useState } from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const [user] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  });

  return (
    <UserContext.Provider value={{ user }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
