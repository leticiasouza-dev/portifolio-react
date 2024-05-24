import React from "react";

import * as S from './Style.jsx'

function Card_competencias(props){
    return(
        <S.Container>
            <img src={props.src} alt="" />
            <p>{props.texto}</p>
        </S.Container>
    )
}

export {Card_competencias}