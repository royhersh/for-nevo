import styled from 'styled-components';
import { ReactComponent as UserIcon } from './assets/userIcon.svg';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
`;
const Header = styled.div`
    font-size: 40px;
    text-align: center;
    line-height: 1.3;
    color: black;
    margin-bottom: 20px;
`;

const CreateUserButton = styled.button`
    margin-top: 15px;color: black;
    font-size: 30px;
    background: linear-gradient(270deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%);
    padding: 0.2em 1.4em
`;

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <Header>שלום נא ליצור משתמש כדי להשתמש באפליקציה</Header>
            <UserIcon style={{width: '220px'}}/>
            <CreateUserButton onClick={() => navigate('/signup')}>צור משתמש</CreateUserButton>
        </Wrapper>
        );
};

export default Login;
