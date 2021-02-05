import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

console.log(Header);
const App = () => {
  return (
    // <Container>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </Container>

    <Container>
      <Header />
      <Login />
      <Footer />
      
      <Header />
      <Signup />
      <Footer />
    </Container>

    // <Container>
    //   <Header />
    //   <Signup />
    //   <Footer />
    // </Container>
    
  );
};

export default App;
