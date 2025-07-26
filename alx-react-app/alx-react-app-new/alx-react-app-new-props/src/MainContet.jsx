import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const MainContent = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <p>Your email is {user.email}</p>
    </main>
  );
};

export default MainContent;
