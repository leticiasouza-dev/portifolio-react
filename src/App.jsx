import React from 'react'

import * as S from './StyleApp.jsx'

import Header from './components/Header/Header'
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
          </S.divContainer>

          <img src={fotoPerfil} alt="foto de perfil" />
          
        </S.SectionSobreMim>
        
      </S.Main>
    </>
    
  )
}

export default App
