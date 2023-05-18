import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

export default function Header() {

  const router = useRouter()
  console.log(router)
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
            <Image src="img/logo.svg" width={300} height={40} alt='Imagen logotipo'/>
            </Link>
            
            <nav className={styles.navegacion}>
              <Link href="/">
                <p className={ router.pathname === '/' ? styles.active : ''}>
                    Inicio
                </p>
              </Link>

              <Link href="/nosotros">
              <p className={ router.pathname === '/nosotros' ? styles.active : ''}>
                    Nosotros
                </p>
              </Link>

              <Link href="/tienda">
              <p className={ router.pathname === '/tienda' ? styles.active : ''}>
                    Tienda
                </p>
              </Link>
              
              <Link href="/blog">
              <p className={ router.pathname === '/blog' ? styles.active : ''}>
                    Blog
                </p>
              </Link>

              <Link href="/carrito">
                <p>
                  <Image width={30} height={25} src="/img/carrito.png" alt="imagen carrito" />
                </p>
              </Link>
            </nav>
        </div>
    </header>
  )
}
