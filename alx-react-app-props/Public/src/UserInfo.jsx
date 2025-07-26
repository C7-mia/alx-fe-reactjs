import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import { UserDataContext } from './UserDataContext';

function UserInfo() {
  const userData = useContext(UserDataContext);

  return (
    <div>
      <UserDetails userData={userData} />
    </div>
  );
}

export default UserInfo;
