import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
  <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLA, tienda de musica'}
    >
      <main className="contenedor" >
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image 
            src="/img/nosotros2.jpg" 
            alt="Imagen sobre nosotros" 
            width={1000} height={800} 
          />

          <div>
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt 
              sit amet ligula ut laoreet. Sed et magna in nisl scelerisque efficitur. 
              Morbi in venenatis dui. 
             </p>
             <p>Ut nec tincidunt quam. Vivamus at aliquam orci. Nulla suscipit 
              mi vulputate lorem malesuada, in venenatis lorem volutpat. 
              Nam vulputate, turpis ut bibendum lobortis, elit nulla tincidunt 
              lectus, sed aliquet velit orci non sem. 
              </p>
          </div>
        </div>
      </main>
  </Layout>
  )
}

