import React from 'react'

import * as S from './StyleApp.jsx'

import Header from './components/Header/Header';
import LinksAcesso from './components/LinksAcesso/LinksAcesso.jsx'


import fotoPerfil from "./assets/backgrounds/perfil.jpg"

import './App.css'

function App() {
  return (
    <>
      <Header/>

      <S.Main>

        <S.SectionSobreMim>

          <S.divContainer>
            <h2>Olá, sou Letícia Souza, desenvolvedora de páginas web criativas e funcionais.</h2>

            <p>Atualmente, estou cursando Técnico em Desenvolvimento de Sistemas e realizando um curso intensivo de Full Stack com duração de um ano, aprimorando minhas habilidades para criar soluções web completas</p>
          
            <S.divLinks>
              <LinksAcesso nome="Github" link="https://github.com/leticiasouza-dev"/>
              <LinksAcesso nome="Linkedin" link="https://www.linkedin.com/in/let%C3%ADcia-souza-dev/"/>
            </S.divLinks>
            
          </S.divContainer>

          <img src={fotoPerfil} alt="foto de perfil" />

          
        </S.SectionSobreMim>
        

        <S.InformacoesSobreMim >
            <h2>Sobre mim</h2>

            <p>
                Sou apaixonada por tecnologia e estudo programação há mais de um ano, focando principalmente no 
                desenvolvimento full stack com React, JavaScript, SQL, Java e Node. Atualmente, estou no segundo 
                ano do ensino médio integrado com o curso técnico em Desenvolvimento de Sistemas, que iniciei este 
                ano.
            </p>
            
            <p>
                Além disso, estou cursando um programa full stack de um ano na instituição Programadores do 
                Amanhã, que me permite explorar todas as etapas do desenvolvimento de software, desde o back-end 
                até o front-end. Também participo de um curso de front-end (React) na Alura, disponibilizado pelo 
                programa Next Education da Oracle, que tem me proporcionado uma visão ainda mais ampla e detalhada 
                sobre o desenvolvimento web.ão ainda mais ampla e detalhada sobre o desenvolvimento web.
            </p>
                
            
        </S.InformacoesSobreMim>
      </S.Main>
    </>
    
  )
}

export default App
