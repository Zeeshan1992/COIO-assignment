import styled from "styled-components";
import ButtonComponent from "./Button";
import { useState } from "react";

export default function UserCard(props) {
    const [following, setFollowing] = useState(false)
    return (
        <Wrapper>
            <Portrait src={props.portrait} alt='' />
            <div>
                <Name>{props.name}</Name>
                <UserName>{props.userName}</UserName>
            </div>
            <ButtonComponent  onClick={()=> setFollowing(!following)} label={following ? "Following" : "Follow" } buttonType={'tertiary'} />
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 3.5vw;
    padding: 20px 20px;
`
const Portrait = styled.img`
    border-radius: 50%;
    width: 2.3vw;
    height: 2.3vw;
    margin-right: 1vw;
`
const Name = styled.h3`
    font-size: 16px;
    font-weight: 700;
`
const UserName = styled.h4`
    font-size: 16px;
    color: #7D7D7D;
    font-weight: 500;
`


