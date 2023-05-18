import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '@/utils/helpers'

export default function Post({post}) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes  


  return (
    <Layout>
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen blog ${titulo}`} />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`}>
                    <p className={styles.enlace}>
                        Leer Post
                    </p>
                </Link>
            </div>
        </article>
    </Layout>
  )
}


export async function getServerSideProps({query: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url=${url}&populate=imagen`)

    const { data: post } = await respuesta.json()

    return {
        props: {

        }
    }
}