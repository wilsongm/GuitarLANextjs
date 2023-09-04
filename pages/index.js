import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import Post from "../components/post"
import Curso from "../components/curso"
import styles from "../styles/grid.module.css"


export default function Home({guitarras, posts, curso}) {

  return (
    <>
    <Layout
      title={"Inicio"}
      description={'Blog de musica, venta de guitarra y más'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras.map(guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
      
      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
          <h1 className="heading">Blogs</h1>
          <div className={styles.grid}>
              {posts.map(blog => (
                <Post 
                  key={blog.id}
                  blog={blog.attributes}
                />
              ))}
          </div>
      </section>

    </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])
  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return{
    props:{
      guitarras,
      posts,
      curso
    }
  }
}


