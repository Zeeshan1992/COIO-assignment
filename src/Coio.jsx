import React, { useState} from 'react'
import userData from "./userData.json"
import styled from 'styled-components'
import Header from './Components/Header'
import Button from './Components/Button'
import Card from './Components/Card'
import UserCard from './Components/UserCard'

export default function Coio() {
    const [activeTab, setActiveTab] = useState('Home')
 
    function renderTab(){
        switch (activeTab) {
            case 'Home':
                return(
                    <ul>

                    {userData.posts.map((val, i) => {
                        const user = userData.users.find(user => Number(val.userId) === Number(user.id))
                        return (
                            <li key={i}>
                                <Card  portrait={user?.imageSrc} name={user.name} role={user.role} content={val.content} likes={val.likes} comments={val.comments}/>
                            </li>
                        )
                    })}
                </ul>
                )
                break;
        
            default:
                break;
        }
    }
    return (
        <MainDiv>
            <Header />
            <Body>
                <ul>
                    <li>
                        <Button  onClick={()=> setActiveTab('Home')} buttonType={'secondary'} label={'Home'} isActive={activeTab === 'Home'} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" />
                        </svg>} />
                    </li>
                    <li>
                        <Button onClick={()=> setActiveTab('Friends')} buttonType={'secondary'} label={'Friends'} isActive={activeTab === 'Friends'} svg={<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M5.5 0C3.56717 0 2 1.56567 2 3.49804C2 5.43041 3.56717 6.99609 5.5 6.99609C7.43283 6.99609 9 5.43041 9 3.49804C9 1.56567 7.43283 0 5.5 0Z" fill="black" />
                            <path d="M3.5 8.99414C1.56711 8.99414 0 10.5605 0 12.4936V14.9909H11V12.4936C11 10.5605 9.43289 8.99414 7.5 8.99414H3.5Z" fill="black" />
                            <path d="M12.5 10H12V15H15V12.5C15 11.1193 13.8807 10 12.5 10Z" fill="black" />
                            <path d="M11.5 4C10.1193 4 9 5.11929 9 6.5C9 7.88071 10.1193 9 11.5 9C12.8807 9 14 7.88071 14 6.5C14 5.11929 12.8807 4 11.5 4Z" fill="black" />
                        </svg>} />
                    </li>
                    <li>
                        <Button onClick={()=> setActiveTab('Random')} buttonType={'secondary'} label={'Random'} isActive={activeTab === 'Random'} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 26 " strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M 10 0 L 0 2 L 3.03125 5.03125 C 1.273438 7.222656 0.1875 9.972656 0.1875 13 C 0.1875 20.074219 5.921875 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 7.695313 22.59375 3.132813 18 1.1875 L 18 4.28125 C 21.027344 6.019531 23.0625 9.261719 23.0625 13 C 23.0625 18.5625 18.5625 23.0625 13 23.0625 C 7.4375 23.0625 2.9375 18.5625 2.9375 13 C 2.9375 10.726563 3.695313 8.652344 4.96875 6.96875 L 8 10 Z" />
                        </svg>} />
                    </li>
                    <li>
                        <Button onClick={()=> setActiveTab('Setting')} buttonType={'secondary'} label={'Setting'} isActive={activeTab === 'Setting'} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 32 " strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M27.526,18.036L27,17.732c-0.626-0.361-1-1.009-1-1.732s0.374-1.371,1-1.732l0.526-0.304  c1.436-0.83,1.927-2.662,1.098-4.098l-1-1.732c-0.827-1.433-2.666-1.925-4.098-1.098L23,7.339c-0.626,0.362-1.375,0.362-2,0  c-0.626-0.362-1-1.009-1-1.732V5c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v0.608c0,0.723-0.374,1.37-1,1.732  c-0.626,0.361-1.374,0.362-2,0L8.474,7.036C7.042,6.209,5.203,6.701,4.375,8.134l-1,1.732c-0.829,1.436-0.338,3.269,1.098,4.098  L5,14.268C5.626,14.629,6,15.277,6,16s-0.374,1.371-1,1.732l-0.526,0.304c-1.436,0.829-1.927,2.662-1.098,4.098l1,1.732  c0.828,1.433,2.667,1.925,4.098,1.098L9,24.661c0.626-0.363,1.374-0.361,2,0c0.626,0.362,1,1.009,1,1.732V27c0,1.654,1.346,3,3,3h2  c1.654,0,3-1.346,3-3v-0.608c0-0.723,0.374-1.37,1-1.732c0.625-0.361,1.374-0.362,2,0l0.526,0.304  c1.432,0.826,3.271,0.334,4.098-1.098l1-1.732C29.453,20.698,28.962,18.865,27.526,18.036z M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5  s5,2.243,5,5S18.757,21,16,21z" />
                        </svg>} />
                    </li>
                </ul>
                {renderTab()}

                <Aside>
                    <ul>
                        {userData.users.map((val, i) => (
                            <li key={i}>
                                <UserCard  portrait={val.imageSrc} name={val.name} userName={val.username} />
                            </li>
                        )
                        )}
                    </ul>
                </Aside>
            </Body>
        </MainDiv>


    )
}



const MainDiv = styled.div`
    background-color: #E9E9E9;
    height: 50vw;

`
const Body = styled.div`
    display: flex;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 60px;
    justify-content: space-between;

`
const Aside = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 26vw;

`



