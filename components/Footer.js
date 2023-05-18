import Link from 'next/link'
import styles from '../styles/footer.module.css'
import { useRouter } from 'next/router'
export default function Footer() {
  const router = useRouter()
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
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
              </nav>

              <p className={styles.copyright}>Todos los derechos reservados { new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}