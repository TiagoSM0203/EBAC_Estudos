import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'
import { GithubSecao } from './styles.ts'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo
      quasi officiis, exercitationem labore fuga! Minus iusto reiciendis
      perferendis odio debitis provident accusantium, dicta quisquam, at
      officiis fugit distinctio dolores.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=TiagoSM0203&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=TiagoSM0203&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
