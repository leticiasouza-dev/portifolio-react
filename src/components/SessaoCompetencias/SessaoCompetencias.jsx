import React from "react";

import * as S from './Style.jsx';
import { Card_competencias } from "../Card_competencias/Card_competencias";

function SessaoCompetencias()  {
    return(
        <S.Sessao>
        
        <h3>Skils</h3>

        <S.Container>
            <Card_competencias/>
            <Card_competencias/>
            <Card_competencias/>
            <Card_competencias/>
            <Card_competencias/>
            <Card_competencias/>
        </S.Container>
        </S.Sessao>

    )
}

export {SessaoCompetencias};