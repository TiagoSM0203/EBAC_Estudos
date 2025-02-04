import React, { useState } from 'react';

import Perfil from './components/perfil';
import Formulario from './components/formulario';
import ReposList from './components/ReposList';

function App() {
  const [formularioEstaVissivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <div>
      <label htmlFor="nome">Digite um usuario: </label>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>)}

      {/* {formularioEstaVissivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVissivel)} type='button'>toggle form</button> */}
    </div>
  )
}

export default App
