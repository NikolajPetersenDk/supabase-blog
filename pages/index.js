import styles from '../styles/Home.module.css'

export function getStaticProps() {
  return {
    props: {
      posts: []
    }
  }
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Hello Chat!</h1>

      {/* <pre> defines preformatted text. It will apear as it written */}
      <pre>{JSON.stringify(posts, null, 2)}</pre>

    </div>
  )
}
