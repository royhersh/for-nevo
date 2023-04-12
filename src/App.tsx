import styled from 'styled-components';
import Login from './components/Login';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {

  return (
    <StyledApp>
        <Login />
    </StyledApp>
  )
}

export default App
