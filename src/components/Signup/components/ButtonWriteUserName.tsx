
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: linear-gradient(270deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ;
    margin-top: 20px;
    border-radius: 50px;
`;
const StyledInput = styled.input`
    background: transparent;
    border: none;
    text-align: center;
    display: block;
    width: 100%;
    font-size: 18px;
`

const placeHolder = 'לחץ לכתיבה';

export const ButtonWriteUserName = () => {
    const [userName, setUserName] = useState(placeHolder);

    const inputProps = {
        value: userName,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value),
        onFocus : () => {
            if (userName === placeHolder) setUserName('');
        },
        onBlur: () => {
            if (userName === '') setUserName(placeHolder);
        },
    }
   
    return (
        <StyledButton>
            <StyledInput {...inputProps} />
        </StyledButton>
    );
}