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
    height: 60px;
`
const Portrait = styled.img`
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-right: 12px;
`
const Name = styled.h3`
    font-size: 0.85rem;
    font-weight: 700;
`
const UserName = styled.h4`
    font-size: 0.85rem;
    color: #7D7D7D;
    font-weight: 500;
`


