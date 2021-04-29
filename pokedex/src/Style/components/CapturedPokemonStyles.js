import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    /* flex-direction: column-reverse; */
    align-items: center;
    /* justify-content: center; */
    position: absolute;
    background-image: url(${(props) => props.background});
    background-size: cover;
    height: 100vh;
    width: 100%;
    z-index: 999;
`

export const Message = styled.p `
    font-weight: 800;
    margin: 0; 
    font-size: 4rem;
    margin: 6rem;
    width: 5rem;
`

export const Button = styled.button `
    background: none;
    border: none;
    width: 1rem;
    position: fixed;
    top: 1rem;
    right: 2rem;

    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
    &:active{
        border: 0 none;
        outline: none;
        box-shadow: 0 0 0 0;
        transform: scale(1);
    }
`

export const Image = styled.img `
    width: 1rem;
    
`