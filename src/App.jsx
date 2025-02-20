import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <LandingPage />
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
