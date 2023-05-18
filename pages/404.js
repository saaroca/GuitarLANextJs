import Layout from '../components/Layout'
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
        title='Página no encontrada'>
            
            <p className="error">Página No Encontrada</p>
            
            <Link href='/'>
                <p className='error-enlace'>Ir a Inicio</p>
            </Link>

    </Layout>
  )
}
