import styled from "styled-components"

export const Main = styled.main`
    padding: 20px 6rem;

    /* background-color: red; */

    @media screen and (max-width:995px) { // laptos menores
        padding: 20px 2rem;
    }

    @media screen and (max-width: 768px){ // para tablets
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 426px){ // para celulares maiores
        padding: 1rem ;
    }
`

export const SectionSobreMim = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        border-radius: 50%;
    }

    @media screen and (max-width:995px) { // laptos menores
        img{
            height: 10rem;
        }
    }

    @media screen and (max-width: 426px){ // para celulares maiores
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
