export const ContainerButtonFloat = styled.div`
    position: fixed;
    bottom: 50vh;
    right: 85vh;
    background:${props => props.error ? "lightred" : 'lightgreen'};
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    padding:20px;
    /* @media only screen and (max-width: 836px){
        right:${props => props.alert ? "30vh" : '5px'};
    }
    @media only screen and (max-width: 505px){
        bottom:${props => props.alert ? "40vh" : ''};
        right:${props => props.alert ? "5vh" : ''};
    } */
`

export const CloseAlert = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin:0;
    margin-left: 12px;
    align-self: flex-end;
    cursor: pointer;    
` 