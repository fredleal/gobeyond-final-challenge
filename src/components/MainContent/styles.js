import styled from "styled-components";


export const MainContainer = styled.main `
    display: grid;
    width: 100%;
    height: 75vh;
    grid-template-columns: 25% 75%;
    grid-template-areas: 'left container' 'right container';
`

export const TextContainer = styled.section `
    flex-direction: column;
    justify-content: flex-end;
    color: var(--white);

    h1{
        text-align: left;
        font-size: 3.8rem;
        margin: 5rem 3rem 0 5rem;
        width: 55vh;     
    }

    button {
        width: 150px;
        height: 50px;
        background: none;
        border: none;
    }
`