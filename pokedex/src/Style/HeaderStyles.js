import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 20px;
    border-color: #02698c;
    background-image: linear-gradient( #3c8095,  #62878b);
    background-size: 50px;
    color: rgb(255 207 14);
    font-weight: bold;
    text-shadow: 3px 3px #02698c;
    font-size: 24px;
    padding: 12px;
    margin: 12px 0 0 20px;
    align-self: center;
    cursor: pointer;
`

export const ContainerHeader = styled.div`
    background: rgb(205, 221, 226);
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 10px 20px;
    
`

export const HomeIcon = styled.img`
    width: ${props => props.pokemon ? "200px" : "80px"};
    height: ${props => props.pokemon ? "100%" : "100%"};
    cursor: ${props => props.pokemon ? "auto" : "pointer"};
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    align-content:center;
    margin-top: 1em;
`
export const InputSearch = styled.input`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: auto;
    height: 20%;
    padding: 5% 2%; 
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(67 81 90);
    background-color: rgb(233, 233, 233);
    `

    export const ButtonFilter = styled.button`
    background:none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`