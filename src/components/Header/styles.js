import styled from "styled-components";


export const Container = styled.header`
    background: var(--background); 
    width: 100%;
    
`

export const Content = styled.div`

    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    padding: 3.5rem 5rem;
`
export const NavItens = styled.div`
       align-items: flex-start;

       a {
        display: inline;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
        margin: 0 0 0 3rem ;

        

        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: var(--gray);
            border-bottom: 1px solid var(--white);
            transition: filter 0.8s;
        }
    }
`


