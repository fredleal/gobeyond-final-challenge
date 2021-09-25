import styled from "styled-components";


export const MainContainer = styled.main`
    display: grid;
    width: 100%;
    height: 75vh;
    grid-template-columns: 40% 60%;
    grid-template-rows: 75% 25%;
    grid-template-areas: "leftContainer rightContainer";

`

export const LeftContainer = styled.section`
    grid-area: leftContainer;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--white);
    max-height: 680px;

    h1{
        text-align: left;
        font-size: 3.8rem;
        margin: 5rem 3rem 0 5rem;
        max-width: 485px;
        width: 55vh;
        height: 30vh;     
    }

    button {
        margin: 3rem 5rem;
        width: 221px;
        height: 60px;
        background: var(--white);
        border: none;
        border-radius: 4rem;
        font-size:150%;        

        &:hover {
            background: var(--gray);
        }
   
        img{
            margin: 0 0.5rem -0.12rem;
            border-radius: 0.3rem;
        }   
    }

    div {
        display: flex;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin: 3.5rem;
    } 
`
export const RightContainer = styled.section`
        grid-area: rightContainer;
        width: 100%;
      
        margin-right: 5rem;
        
        img{
            border-radius: 1rem;
            width: 90%
        }


    @media (max-width: 1200px) {
            img {
                width: 100%;
                margin: 7rem;
            }
        }
`

