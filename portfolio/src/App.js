import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  padding-bottom: 40px

`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Wrapper>
            <Projects />
            <Education />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
