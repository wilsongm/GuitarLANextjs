
import Image from "next/image"
import Link from "next/link"
import {formatearFecha} from "../utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({blog}) {

    const {title, content, imagen, url, publishedAt} = blog


  return (
    <article >
        <Image 
            src={imagen.data.attributes.formats.medium.url}
            alt={`Imagen del blog ${title}`}
            width={600}
            height={400}
        />

        <div className={styles.contenido}>
            <h3>{title}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{content}</p>
            <Link
                href={`/blog/${url}`}
                className={styles.enlace}
            >
                Leer blog
            </Link>
        </div>
    </article>
  )
}
