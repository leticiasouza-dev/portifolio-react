import styled from "styled-components"

export const Main = styled.main`
    padding: 20px 6rem;

    background-color: red;

    p{
        padding: 2rem 0;
    }

    @media screen and (max-width:995px) { // laptos menores
        padding: 20px 2rem;
    }

    @media screen and (max-width: 768px){ // para tablets
        padding: 1rem 2rem;
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
`

export const divContainer = styled.div`
    width: 70%;
    background-color: aqua;

    h2{
        font-size: 2.5rem;
    }

    @media screen and (max-width:995px) { // laptos menores
        h2{
            font-size: 1.5rem;
        }
    }
`
export const divLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
