import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
function App() {
    return (
    <>
       <WelcomeMessage />
       <Header />
       <MainContent />
       <UserProfile name="Akena Nicolas" age="23" bio="Loves hiking and photography" />
       <Footer />
    </>
  )
}

export default App
