import { useState } from "react"
import Image from "next/image"
import style from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"


export default function Producto({guitarra, agregarCarrito}) {
  const [cantidad, setCantidad] = useState(0)  
  const {name, description, price, imagen } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1){
      alert('Cantidad no valida')
      return
    }

    /**
     * Construir un Objeto con la guitarra seleccionada
     */
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      name,
      price,
      cantidad
    }
    /**
     * Pasar la informacion al context
     */
    agregarCarrito(guitarraSeleccionada)

  }
  return (
    <Layout 
      title={`Guitarra ${name}`}
    >
      <div className={style.guitarra}>
        <Image 
          src={imagen.data.attributes.url}
          alt={`Imagen de la guitarra ${name}`}
          width={800}
          height={600}
        />

        <div className={style.contenido}>
          <h3>{name}</h3>
          <p className={style.descripcion}>{description}</p>
          <p className={style.precio}>{price}</p>
          

          <form 
            onSubmit={handleSubmit}
            className={style.formulario}
          >
            <label htmlFor="cantidad">Cantidad:</label>

            <select 
              onChange={e => setCantidad(+e.target.value)}
              id="cantidad"
            >
              <option value="0">--Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>

            </select>

            <input 
              
              type="submit" 
              value="Agregar al carrito"
            />
          </form>
        </div>
      </div>
    </Layout>

  )
}

/**
 * aqui solo necesitamos la rutas getStaticPath()
 */
export async function getStaticPaths(){

  const response = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await response.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return{
    paths,
    /**
     * si no existe el elemento que estoy buscando el fallback 
     * al estar false me genera un error 404 y no tienes que validar
     */
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
  const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data: guitarra} = await response.json()

  return{
      props:{
          guitarra
      }
  }
}

/**
 * router dinamico para generar una pagina atravez de la consulta
 * cada vez que se visita el sitio se consulta la API y la Database
 */
// export async function getServerSideProps({query: {url}}){
//     const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await response.json()

//     return{
//         props:{
//             guitarra
//         }
//     }
// }