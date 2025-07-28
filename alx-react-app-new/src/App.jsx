import React from 'react';
import ProfilePage from './ProfilePage';
import Counter from './Counter'; // assuming it's now a separate file
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to the App</h1>
        <ProfilePage />
        <hr />
        <Counter />
      </div>
    </UserContext.Provider>
  );
}

export default App;
