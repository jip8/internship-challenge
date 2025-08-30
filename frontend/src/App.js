import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer'
import { AppContainer, GlobalStyle } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Calculator />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
