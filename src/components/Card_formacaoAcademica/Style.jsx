import styled from "styled-components";

export const Card = styled.article`
    /* background-color: red; */
    line-height: 1.5rem;
    width: 368px;
    height: 286px;

    display: flex;
    flex-direction: column;


    .nomeCurso{
        font-size: 1.2rem;
        font-weight: bold;
    }

`

export const ContainerImg = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80%;
    img{
        width: 192px;
        height: 130px;
    }
`