import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles.ts'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
