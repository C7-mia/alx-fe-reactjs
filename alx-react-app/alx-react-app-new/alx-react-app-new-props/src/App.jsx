import React from 'react';
import { UserProvider } from './UserContext';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <UserProvider>
      <Header />
      <MainContent />
      <Footer />
    </UserProvider>
  );
}

export default App;
