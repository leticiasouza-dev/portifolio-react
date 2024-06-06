import React from "react";

import * as S from './Style.jsx'


function Card_formacaoAcademica(props){
    return(
        <S.Card>
            <S.ContainerImg>
                <img src={props.src} alt={props.nomeCurso} />
            </S.ContainerImg>
            
            <p className="nomeCurso">{props.nomeCurso}</p>
            <p>{props.situacaoCurso}</p>
        </S.Card>
    )
}

export default Card_formacaoAcademica;