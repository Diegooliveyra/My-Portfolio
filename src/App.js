import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  const [theme, setTheme] = useState({ mode: 'dark' });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <About />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
