import styled from 'styled-components'

export default function ButtonComponent({ label, svg, buttonType, isActive, onClick }) {
    return (
        <Button onClick={onClick} type='Button' buttonType={buttonType} isActive={isActive}>
            {svg && <Icon>{svg}</Icon>}
            <Label>{label}</Label>
        </Button>
    )
}



const Button = styled.button`
    ${props => props.isActive === true && props.buttonType === 'secondary' &&`
              background-color: #D9D9D9;
    `}
    ${props => props.buttonType === 'primary' && `
       background-color: #0091FF;
        color: white;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        height: 30px;
        padding: 0 12px;
        margin-left:auto;
        &:hover{
            background-color: #101153c8;
        }
        `}
    ${props => props.buttonType === 'secondary' && `
        display: flex;
        align-items: center;
        height: 35px;
        width: 200px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 6px;
        &:hover{
            background-color: #D9D9D9;
        }
        
    `}
        ${props => props.buttonType === 'tertiary' && `
        background-color: #0091FF2B;
        color: #0091FF;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 15px;
        height: 25px;
        margin-left: auto;
        width:110px
    `}
`

const Icon = styled.span`
    margin-left: 12px;
    margin-right: 12px;
    
`
const Label = styled.p`
    margin-right: 2px;
`
