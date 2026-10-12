import styles from "./Logo.module.css"

export function Logo(props) {
    return (
        <img
            className={styles.logo}
            src="/imagens/logo-dmc.png"
            alt={props.alt ?? "DMC Eletropeças"}
            width="1024"
            height="260"
        />
    )
}
