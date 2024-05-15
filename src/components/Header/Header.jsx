import React from "react";

import * as S from './Style.jsx'

function Header(){
    return(
        <S.Header>
            <h1>Letícia S. De Carvalho</h1>


            <S.Nav>
                <S.Ul>
                    <li>Sobre mim</li>
                    <li>Skills</li>
                    <li>Hobbies</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </S.Ul>
            </S.Nav>
        </S.Header>
    )
}

export default Header;