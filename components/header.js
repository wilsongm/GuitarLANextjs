import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {
    /**
     * resaltar la pagina actual
     */
    const router = useRouter()

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
                <Image src='/img/logo.svg' alt="logo" width={300} height={40}/>
            </Link>
        
            <nav className={styles.navegacion}>
                
                <Link href='/' className={router.pathname === '/' ? styles.active : ''}>
                      Inicio
                </Link>
                
                <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''} >
                    Nosotros
                </Link>
                
                <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}>
                    Tienda
                </Link>

                <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}>
                    Blog
                </Link>

                <Link href="/carrito">
                    <Image  
                        src="/img/carrito.png"
                        alt="imagen carrito"
                        width={30}
                        height={25}
                    />
                </Link>
                
            </nav>
        </div>
    </header>
  )
}
