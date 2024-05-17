import React from "react";

import icone from "../../assets/icons/seta.svg"
import * as S from "./Style.jsx"


function LinksAcesso (props){
    return(
        <S.divContainer>
            <a href={props.link} target="_blank">{props.nome}</a>
            <img src={icone} alt="Icone seta" />
        </S.divContainer>
    )
}

export default LinksAcesso;