import Link from "next/link"
import Layout from "../components/layout"

export default function Page404() {
  return (
    <Layout 
        title="Pagina no encontrada"
    >
        <p className="error">Pagina no encontrada...</p>
        <Link 
            href="/"
            className="error-enlace"
        >
        Ir a Inicio
        </Link>
    </Layout>
   
  )
}
