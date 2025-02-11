import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Avatar from '../../components/Avatar/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'

import { Descricao, BotaoTema, SidebarContainer } from './styles.ts'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Tiago Mota</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        TiagoSM0203
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
