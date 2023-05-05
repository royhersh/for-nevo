
import styled from "styled-components";

const StyledButton = styled.button`
    background: linear-gradient(270deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ;
    margin-top: 20px;
    border-radius: 50px;
`;

export const ButtonWriteUserName = () => {
    return <StyledButton>לחץ לכתיבה</StyledButton>;
}