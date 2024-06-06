import styled from "styled-components"

export const Main = styled.main`
  background-color:  #F5F5F5;
    padding-top: 6rem;
`

export const SectionSobreMim = styled.section`
    margin: 20px 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        border-radius: 50%;
    }

    @media screen and (max-width:995px) { // laptos menores
        margin: 20px 2rem;
        img{
            height: 10rem;
        }
    }

    @media screen and (max-width: 768px){ // para tablets
        margin: 1rem 2rem;
    }

    @media screen and (max-width: 426px){ // para celulares maiores
        margin: 1rem ;
        flex-direction: column-reverse;
        align-items: flex-start;
    }

`

export const divContainer = styled.div`
    width: 70%;
    /* background-color: aqua; */

    p{
        padding: 2rem 0;
    }
    
    h2{
        font-size: 2.5rem;
    }

    @media screen and (max-width:1024px) { // laptos menores
        p{
            padding: 1rem 0;
        }


        h2{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 768px){ // para tablets
        p{
            padding: 0.5rem 0;
        }
    }

    @media screen and (max-width: 426px){ // para celulares maiores
       width: 100%;
       padding: 1rem 0;

       h2{
        font-size: 1.2rem;

       }

       p{
        font-size: 16px;
       }
    }

`
export const divLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const InformacoesSobreMim = styled.section`
    background-color:  #EAF2FD;

    padding:4rem 28rem 4rem 6rem;

    p{
        line-height: 1.5rem;
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px){ // para tablets
        padding:1rem 2rem;
    }
`

export const ContainerCompetencias = styled.section`

`

export const SessaoFormacaoAcademica = styled.section`
    background-color:  #EAF2FD;
    padding: 4rem 6rem 4rem 6rem;

    h2{
        text-align: center;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 426px){ // para celulares maiores
        
    }

    @media screen and (max-width: 768px){ // para tablets
        padding:1rem 2rem;
    }
`
export const ContainerCards = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`
