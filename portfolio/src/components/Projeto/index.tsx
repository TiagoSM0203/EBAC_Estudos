import React from 'react'
import Paragrafo from '../Paragrafo/index.tsx'
import Titulo from '../Titulo/index.tsx'

import { Card, LinkBotao } from './styles.ts'

const Projeto = () => (
  <Card>
    <Titulo>Projetos Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
