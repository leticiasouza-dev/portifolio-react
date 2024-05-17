import styled from "styled-components";

export const divContainer = styled.div`
    height: 2rem;

    display: flex;
    align-items: center;
    a{
        padding-right: 7px;
        text-decoration: none;
    }

    img{
        width: 1rem;
    }

    @media screen and (max-width: 995px){ // para tablets
        img{
            width: 1rem;
        }
    }
`