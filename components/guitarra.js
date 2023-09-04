import Image from "next/image"
import Link from "next/link"
import style from "../styles/guitarras.module.css"

export default function Guitarras({guitarra}) {

  const {name, description, price, imagen, url} = guitarra

  return (
    <div className={style.guitarra}>
      <Image 
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${name}`}
        width={600}
        height={400}
      />

      <div className={style.contenido}>
        <h3>{name}</h3>
        <p className={style.descripcion}>{description}</p>
        <p className={style.precio}>${price}</p>
        <Link 
          href={`/guitarras/${url}`}
          className={style.enlace}
        >

          Ver Producto
        </Link>
      </div>
    </div>
  )
}

