import React from "react";

import * as S from './Style.jsx'
import logoAlura from '../../assets/backgrounds/logoCursoAlura.svg'

function Card_formacaoAcademica(){
    return(
        <S.Card>
            <S.ContainerImg>
                <img src={logoAlura} alt="" />
            </S.ContainerImg>
            
            <p className="nomeCurso">Front end</p>
            <p>Em andamento - Alura</p>
        </S.Card>
    )
}

export default Card_formacaoAcademica;