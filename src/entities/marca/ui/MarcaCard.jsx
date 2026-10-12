import styles from "./MarcaCard.module.css"

export function MarcaCard(props) {
    return (
        <article className={styles.card}>
            <img src={props.marca.logo} alt={props.marca.nome} />
        </article>
    )
}
