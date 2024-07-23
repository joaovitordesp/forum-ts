import { Header } from "./components/Header"
import './global.css'
import styles from  "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

const posts : PostType[] =[
  {
    id:1,
    author:{
      avatarUrl: "https://github.com/joaovitordesp.png",
      name:"Joao Vitor",
      role: "Estudent at JVS"
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-19 15:50')
  },
  {
    id:2,
    author:{
      avatarUrl: "https://github.com/joaovitordesp.png",
      name:"Pedro Vitor",
      role: "CTO at JVS"
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-20 15:50')
  }
]

export function App() {
  return ( // não pode ter mais de um componente sem um div
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
            {posts.map(post =>{
              return (<Post
                key={post.id} 
                post={post}
              />
            )})}

        </main>
      </div>
    </div>
  )
}

export default App
