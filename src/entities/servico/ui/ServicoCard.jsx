import { Icone } from "@/shared/ui"
import styles from "./ServicoCard.module.css"

export function ServicoCard(props) {
    const servico = props.servico

    return (
        <article className={styles.card}>
            <Icone nome={servico.icone} className={styles.icone} />
            <h3 className={styles.titulo}>{servico.titulo}</h3>
            <p className={styles.texto}>{servico.texto}</p>
        </article>
    )
}
