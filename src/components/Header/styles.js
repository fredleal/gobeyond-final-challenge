import styled from "styled-components";


export const Container = styled.header`
    background: var(--background); 
    width: 100%;
    max-height: 140px;
    
`

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 3.4rem 6rem 3rem 5rem;

    img {
        max-height: 48px;
    }

    @media (max-width: 1000px){
        padding: 0;
        img{
            width:126px;
            margin-left: 2rem;
            margin-top: 1rem;     
        }

    }
`
export const NavItens = styled.div`
       align-items: flex-start;
       margin-top: 10px;

       a {
        display: inline;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
        margin-left: 3rem ;

        

        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: var(--gray);
            border-bottom: 1px solid var(--white);
            transition: filter 0.8s;
            
        }

        @media (max-width: 1000px) {
            display: flex;
            font-weight: 400;
            font-size: 75%;
            margin-right: 2rem;
        }
    }
`


