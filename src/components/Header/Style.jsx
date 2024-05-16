import styled from "styled-components";

export const Header = styled.header`
    padding: 20px 6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    white-space: nowrap;

    @media screen and (max-width:995px) { // laptos menores
        padding: 20px 2rem;
    }

    @media screen and (max-width: 768px){ // para tablets
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 426px){ // para celulares maiores
        padding: 1rem;

        h1{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 360px){ // para celulares menores
        
    }

`

export const Nav = styled.nav`
    width: 70%;
`

export const Ul = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-around;

    .contato{
        font-weight: bold;
    }

    @media screen and (max-width: 768px){ // para tablets
        justify-content: end;

        .desaparecer{
            display: none;
        }
    }

    @media screen and (max-width: 426px){ // para celulares maiores
        .contato{
            font-weight: normal;
        }
    }

    @media screen and (max-width: 360px){ // para celulares menores
        
    }
`

export const A = styled.a`
    text-decoration: none;
`
