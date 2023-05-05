import styled from "styled-components";
import { UserNameTopLabel, UserNameAndAvatar, BoyOrGirlSection } from '@src/components/Signup/components';

const SignUpWrapper = styled.div`
    width: 420px;
`;

const Signup = () => {
    return (
        <SignUpWrapper>
            <UserNameTopLabel />
            <UserNameAndAvatar />
            <BoyOrGirlSection />
        </SignUpWrapper>
    );
}
export default Signup;