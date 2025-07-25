import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f0f8ff', padding: '20px', minHeight: '300px' }}>
      <UserProfile name="Nicholas" age={21} bio="Loves Football and learning." />
      <UserProfile name="Morgan" age={25} bio="Enjoys driving and traveling." />
      <UserProfile name="Rita" age={20} bio=" Reading and Fashion." />
    </main>
  );
}

export default MainContent;
