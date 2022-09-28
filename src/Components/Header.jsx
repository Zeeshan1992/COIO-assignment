import styled from 'styled-components'
import Button from './Button'

export default function Header() {
    return (
        <Wrapper>
            <Logo src={'/logo_dark_small.png'} />
            <Search>
                <button>
                    <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </Icon>
                </button>
                <SearchBar placeholder='Search' />
            </Search>

            <Button className="ml-auto" label={'COIO Time'} buttonType='primary'/>
        </Wrapper>

    )
}


const Wrapper = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    padding-left: 185px;
    padding-right: 165px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
`
const Logo = styled.img`
    height: 55px;
    width: 175px;
`
const Search = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    width: 720px;
    border: 1px solid #B0B0B0;
    border-radius: 5px;
    margin-left: 90px;

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
