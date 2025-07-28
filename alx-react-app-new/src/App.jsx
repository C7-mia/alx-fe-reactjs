import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <Counter />
    </UserContext.Provider>
  );
}

export default App;
