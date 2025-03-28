import styles from './perfil.module.css'	

const Perfil = ({nomeUsuario}) => {
    const usuario = {
        nome: 'Tiago',
        avatar: 'https://github.com/TiagoSM0203.png'
    }
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil