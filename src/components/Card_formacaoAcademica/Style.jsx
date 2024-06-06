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

    @media screen and (max-width: 426px){ // para celulares maiores
        width:296px;
        height: 169px;

    }

    @media screen and (max-width: 768px){ // para tablets
        width:224px;
        height: 169px;

        .nomeCurso{
            font-size: 1rem;
        }

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

    @media screen and (max-width: 426px){ // para celulares maiores
       

    }

    @media screen and (max-width: 768px){ // para tablets
        img{
            width: 84px;
            height: 58px;
        }

    }
`