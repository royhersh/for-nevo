/**
 * Jordan's code, needs refacor
 */
import { createRef, useState } from "react";
import styled from "styled-components";
import { UserIcon, downloadIcon } from '@icons';

const UserNameAvatarSection = styled.div`
    padding: 20px;
    display: flex;
`;

const UserName = styled.div`
    font-size: 45px;
    color: black;
    align-text: right;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ButtonWriteUserName = styled.button`
    background: linear-gradient(270deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ;
    margin-top: 20px;
    border-radius: 50px;
`;

const ImageUploader = styled(({ children, ...rest }: { children:React.ReactNode }) => 
<div {...rest}>
    <label htmlFor='image-input' style={{ background: 'rgb(65, 128, 244)',padding:'10px', borderRadius:'10px' }}>העלה/י תמונה</label>
    {children}
</div>
)`
& {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 5px;

    & > input {
        width:0;
        height:0;
        opacity:0;
    }

    & > * {
        cursor: inherit
    }
}
`


export const UserNameAndAvatar = () => {
    const profileImageInputRef=createRef<HTMLInputElement>();
    const [profileImage, setProfileImage] = useState<string|undefined>();

    return (
        <UserNameAvatarSection>
            <Left>
                {
                profileImage
                    ? <div style={{display:'flex', overflow:'hidden', width:150,height:150,borderRadius:'50%'}}><img src={profileImage} /></div>
                    : <UserIcon height={150} />
                }
                <ButtonWriteUserName>לחץ לכתיבה</ButtonWriteUserName>
            </Left>

            <Right>
                <ImageUploader>
                    <input id="image-input" type="file" ref={profileImageInputRef} onChange={(event=>{
                        const file = event.target.files?.[0];
                        if (!file) return;

                        const reader = new FileReader();

                        reader.onload = function(event) {
                            const imageDataUrl = event.target?.result;
                            if (typeof imageDataUrl === 'string') {
                                setProfileImage(imageDataUrl);
                            }
                        };

                        reader.readAsDataURL(file);
                    })} />
                </ImageUploader>

                <img src={downloadIcon} width="50" style={{ transform: 'rotate(180deg)' }} />
                <UserName >:שם </UserName>
            </Right>
        </UserNameAvatarSection>
    );
}