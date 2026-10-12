import styles from "./TituloSecao.module.css"

// tom: "escuro" (padrão, fundo claro) ou "claro" (fundo escuro)
export function TituloSecao(props) {
    const tom = props.tom === "claro" ? styles.claro : ""

    return (
        <div className={`${styles.bloco} ${tom}`}>
            {props.rotulo && <p className={styles.rotulo}>{props.rotulo}</p>}
            <span className={styles.traco} aria-hidden="true" />
            <h2 id={props.id} className={styles.titulo}>
                {props.titulo}
            </h2>
            {props.descricao && <p className={styles.descricao}>{props.descricao}</p>}
        </div>
    )
}
