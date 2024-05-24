import React from "react";

import * as S from './Style.jsx'
import icon from '../../assets/icons/iconHtml.svg'

function Card_competencias(){
    return(
        <S.Container>
            <img src={icon} alt="" />
            <p>Html 5</p>
        </S.Container>
    )
}

export {Card_competencias}