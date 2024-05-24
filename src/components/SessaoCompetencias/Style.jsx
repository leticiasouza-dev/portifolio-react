import styled from "styled-components";

export const Sessao = styled.section`
    padding: 4rem 6rem 4rem 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
     
        padding: 1rem 2rem;
    
}
`

export const Container = styled.div`
    width: 100%;
    display: flex;
   justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

`