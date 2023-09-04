import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css"
import {formatearFecha} from "../../utils/helpers"


export default function Blog({blogs}) {
    const {title, content, publishedAt, imagen} = blogs[0].attributes
  return (
    <Layout
        title={title}
    >
       <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image 
                src={imagen.data.attributes.url}
                alt={`Imagen del blog ${title}`}
                width={1000}
                height={500}
            />

            <div className={styles.contenido}>
                <h3>{title}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{content}</p>

            </div>
        </article>    
    </Layout>
  )
}


export async function getServerSideProps({params: {url}}){
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: blogs} = await response.json()

    return{
        props:{
            blogs
        }
    }
}
