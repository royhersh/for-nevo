import { Fragment } from "react";
import styled from "styled-components";
import { TopLabel } from "@src/styled";
import { girlImg, boyImg, vImg } from '@images';

const BoyOrGirlLabel = styled(TopLabel)`
    display: block;
    padding: 0px 20px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
`;

const BoyOrGirl = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
`;

const GenderButton = styled.button`
    background: rgb(217, 217, 217);
    color: black;
    display: block;
    border-radius: 15px;
    margin: 20px auto;
    width: 100px;
`;

export const BoyOrGirlSection = () => {
    return (
        <Fragment>
            <BoyOrGirlLabel>
                    ?בן או בת
            </BoyOrGirlLabel>

            <BoyOrGirl>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <img src={girlImg} />
                    <GenderButton>בת</GenderButton>
                </div>
                <img src={vImg} width="150" height="150" />
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <img src={boyImg} />
                    <GenderButton>בן</GenderButton>
                </div>
            </BoyOrGirl>        
        </Fragment>
    );
};