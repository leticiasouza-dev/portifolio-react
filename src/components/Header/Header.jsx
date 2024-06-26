import React from "react";

import * as S from './Style.jsx'

function Header(){
    return(
        <S.Header>
            <h1>Letícia Souza</h1>

            <S.Nav>
                <S.Ul>
                    <li className="desaparecer"><S.A href="#SessaoSobreMim">Sobre mim</S.A></li>
                    <li className="desaparecer"><S.A href="#sessaoCompetencias">Skills</S.A></li>
                    <li className="desaparecer"><S.A href="#sessaoCompetencias">Hobbies</S.A></li>
                    <li className="desaparecer"><S.A href="#sessaoFormacaoAcademica">Formação</S.A></li>
                    <li className="desaparecer"><S.A href="">Projetos</S.A></li>
                    <li className="contato"><S.A href="">Contato</S.A></li>
                </S.Ul>
            </S.Nav>
        </S.Header>
    )
}

export default Header;