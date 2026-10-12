import styles from "./Button.module.css"

// variant: "primario" (padrão), "secundario", "contorno" ou "contornoClaro"
export function Button(props) {
    const variant = props.variant || "primario"
    const className = `${styles.botao} ${styles[variant]}`

    if (props.href) {
        return (
            <a
                href={props.href}
                className={className}
                target={props.target}
                rel={props.rel}
            >
                {props.children}
            </a>
        )
    }

    return (
        <button
            type={props.type || "button"}
            className={className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
