import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import style from "../styles/grid.module.css"

export default function Tienda({guitarras}) {

  return (
    <Layout
      title={'Tienda'}
      description={'Tienda virtual, venta de guitarras, Instrumentos, GuitarLA'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

        <div className={style.grid}>
          {guitarras.map(guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
        
      </main>
    </Layout>
  )
}

/**
 * run in the server
 */
// export async function getStaticProps() {
//   const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await response.json()

//   return{
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await response.json()

  return{
    props: {
      guitarras
    }
  }
}