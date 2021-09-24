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
    /* height: 7.7rem;       */
`
export const NavItens = styled.div`
       align-items: flex-start;

       a {
        display: inline;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
        margin: 0 0 0 3rem ;

        transition: filter 0.3s;

        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: var(--gray);
            border-bottom: 1px solid var(--white);
        }
    }
`


