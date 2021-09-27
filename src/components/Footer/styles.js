import styled from "styled-components";

export const Container = styled.footer`
    height: 220px;
    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    font-family:Montserrat;
    font-size: 12px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        place-items: center;
        grid-template-columns: 100%;
    }
    
`

export const Info = styled.div`
    background: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:  3.5rem 0;
    max-width: 640px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        place-items: center;
        grid-template-columns: 100%;
    }
    
`

export const InfoImgs = styled.div`
     padding:0 5rem 0 5rem;
    p {
        display: flex;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    a {
        margin: 1rem;
    }
    @media (max-width: 1000px) {
        img{
            padding-left: 1.5rem;
            
        }

  

    }

`

export const InfoText = styled.div`

   
  ul{
        list-style-type: none;
    }

  ul li {
    border-bottom: 1px solid rgb(0, 0, 0);
    padding: 0 10px 0 0;
    margin: 1rem 1rem;
   }
   @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
    ul {
        margin-top: 2.5rem;
    }
   }
`

export const Locations = styled.div`
    background: var(--light-gray);
    padding:  3.5rem 10rem;

    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-left: 10rem;

   p{
    padding: 1rem
   }


   @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
    grid-template-columns: 100%;
    padding: 3rem 4rem;

   }
`