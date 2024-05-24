import React from "react";

import * as S from './Style.jsx';



import { Card_competencias } from "../Card_competencias/Card_competencias";


function SessaoCompetencias(props)  {
    return(
        <S.Sessao>
        
        <h3>{props.titulo}</h3>

        <S.Container>
            <Card_competencias src={props.elemento1} texto={props.texto1}/>
            <Card_competencias src={props.elemento2} texto={props.texto2}/>
            <Card_competencias src={props.elemento3} texto={props.texto3}/>
            <Card_competencias src={props.elemento4} texto={props.texto4}/>
            <Card_competencias src={props.elemento5} texto={props.texto5}/>
            <Card_competencias src={props.elemento6} texto={props.texto6}/>
        </S.Container>
        </S.Sessao>

    )
}

export {SessaoCompetencias};