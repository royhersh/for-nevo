import styled from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Test from './components/Test';
import Signup from './components/Signup';

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
    <BrowserRouter>
      <StyledApp>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="signup" element={<Signup />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  )
}

export default App
