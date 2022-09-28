import styled from 'styled-components'
import Button from './Button'

export default function Header() {
    return (
        <Div>
            <Logo src={'/logo_dark_small.png'} />
            <SearchDiv>
                <button>
                    <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </Icon>
                </button>
                <SearchBar placeholder='Search' />
            </SearchDiv>

            <Button className="ml-auto" label={'COIO Time'} buttonType='primary'/>
        </Div>

    )
}


const Div = styled.div`
    display: flex;
    height: 3.5vw;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
`
const Logo = styled.img`
    height: 2.5vw;
    width: 4vwx;
`
const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    height: 1.5vw;
    width: 35vw;
    border: 1px solid #B0B0B0;
    border-radius: 5px;
    margin-left: 5vw;

`
const SearchBar = styled.input`
    width: inherit;
    border-radius: 8px;
    padding-left: 12px;
    outline: none;
`
const Icon = styled.svg`
    color: #B0B0B0;
    height: 18px;
    width: 18px;
    margin-left: 12px;
`

