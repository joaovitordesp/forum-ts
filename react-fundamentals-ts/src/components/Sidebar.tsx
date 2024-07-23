import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=280&w=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/joaovitordesp.png" />

                <strong>Joao</strong>
                <span>Web Developer</span>


                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}