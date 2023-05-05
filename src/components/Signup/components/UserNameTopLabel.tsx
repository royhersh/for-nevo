import { useNavigate } from "react-router-dom";
import { TopLabel } from "@src/styled";
import { exIcon } from '@icons';

export const UserNameTopLabel = () => {
    const navigate = useNavigate();

    return (
        <TopLabel>
        <img src={exIcon} style={{ width: '50px', cursor: 'pointer' }} onClick={() => navigate('/')} />
        <div style={{ fontSize: '24px', flex: 1, textAlign: 'right' }}>שם משתמש</div>
    </TopLabel>        
    );
}