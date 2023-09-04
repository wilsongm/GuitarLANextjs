import styles from "../styles/curso.module.css"


export default function Curso({curso}) {

    const {title, content, imagen} = curso

  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso {
                background-image: linear-gradient(to right, rgb(0 0 0/ .65),
                rgb(0 0 0/ .7)),
                url(${imagen?.data?.attributes?.url})
            }
        `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
            <h1 className="heading">{title}</h1>
            <p>{content}</p>
        </div>
      </div>
    </section>
  )
}
