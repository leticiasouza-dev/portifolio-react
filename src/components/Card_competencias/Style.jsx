import styled from "styled-components";

export const Container = styled.article`
    background-color: red;

    width: 176px;
    height: 174px;
    padding: 1rem;

    

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: start;

    img{
        height: 3rem;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 360px) {
        width: 120px;
        height: 118px;
    }

    @media screen and (min-width: 361px) and (max-width: 460px){
        width: 166px;
        height: 174px
    }
`