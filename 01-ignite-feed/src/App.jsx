import { Header } from './components/Header'

import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Hugovarellaa.png',
      name: 'Hugo Varela',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'https://github.com/Hugovarellaa',
      },
      {
        type: 'link',
        content: 'https://github.com/diego3g',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00 '),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: '@Education Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'https://github.com/Hugovarellaa',
      },
      {
        type: 'link',
        content: 'https://github.com/maykbrito',
      },
    ],
    publishedAt: new Date('2022-07-26 10:00:00 '),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: '@CTO Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'https://github.com/Hugovarellaa',
      },
      {
        type: 'link',
        content: 'https://github.com/diego3g',
      },
    ],
    publishedAt: new Date('2022-07-26 18:00:00 '),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
