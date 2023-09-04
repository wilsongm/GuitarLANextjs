import Link from "next/link"
import styles from "../styles/fotter.module.css"

export default function Fotter() {


  return (
    <footer className={styles.fotter}>
      <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegacion}>
            <Link href='/'>
                      Inicio
            </Link>
                
            <Link href='/nosotros' >
                    Nosotros
            </Link>
            <Link href='/tienda'>
                    Tienda
            </Link>
            <Link href='/blog'>
                    Blog
            </Link>
            
           </nav>
          
          <p className={styles.copyright}>©{new Date().getFullYear()} GuitarLA. Todos los derechos reservados </p>

      </div>
    </footer>
  )
}
