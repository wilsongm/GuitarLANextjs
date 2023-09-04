import Layout from "../components/layout"
import Post from "../components/post"
import styles from "../styles/grid.module.css"


export default function Blog({blogs}) {

  return (
    <Layout
      title={'Blog'}
      description={'Blog de musica, venta de guitarras, consejos, GuitarLa'}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
         <div className={styles.grid}>
            {blogs.map(blog => (
              <Post
                key={blog.id}
                blog={blog.attributes}
              />
            ))}
         </div>
      </main>
    </Layout>
  )
}


export async function getStaticProps(){
  const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: blogs} = await response.json()

  return{
    props:{
      blogs
    }
  }
}
