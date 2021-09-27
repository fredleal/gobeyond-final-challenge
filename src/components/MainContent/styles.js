import styled from "styled-components";


export const MainContainer = styled.main`
    display: grid;
    width: 100%;
    height: 75vh;
    grid-template-columns: 40% 55%;
    grid-template-areas: "leftContainer rightContainer";
    background: var(--background);

    @media (max-width: 1000px) {
    height: 130vh;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "leftContainer"
      "rightContainer"
    }
`

export const LeftContainer = styled.section`
    grid-area: leftContainer;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--white);
   

    h1{
        text-align: left;
        font-size: 3.5rem;
        margin: 5rem 0 0rem 5rem;
        max-width: 485px;
        width: 50vh;
        height: 30vh;     
    }

    button {
        margin: 1rem 5rem;
        width: 221px;
        height: 60px;
        background: var(--white);
        border: none;
        border-radius: 4rem;
        font-size:120%;
              

        &:hover {
            background: var(--gray);
        }
   
        img{
            margin: 0 0.5rem -0.12rem;
            border-radius: 0.5rem;
        }   
    }

    div {
        display: flex;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin: 3.5rem 4rem;

        img{
            width: 122px;  
        }

    }

    @media (max-width: 1000px){
        h1{
            margin-bottom: 12rem;
        }
        div{
            margin-left: 29px;
        }
        div img{
            width: 75px;
            height: 45px;
            margin-top: 50%;
        }
    }

`
export const RightContainer = styled.section`
        grid-area: rightContainer;
       
        
        img{
            border-radius: 2rem;
            width: 55vmax; 
            height: auto;
        }


        @media (max-width: 1000px) {
            img {
                margin-left: 29px;
                width: 320px;
                height: 180px;
                
            }
        }
`

