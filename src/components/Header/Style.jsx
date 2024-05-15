import styled from "styled-components";

export const Header = styled.header`
    padding: 20px 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){ // para tablets
        padding: 0 3rem 0 3rem;
    }

    @media screen and (max-width: 360px){ // para celulares
        padding: 0 1rem 0 1rem;
    }

`

export const Nav = styled.nav`
    width: 60%;
`

export const Ul = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-around;


    @media screen and (max-width: 768px){ // para tablets
        display: none;
    }
`

export const A = styled.a`
    text-decoration: none;
`
