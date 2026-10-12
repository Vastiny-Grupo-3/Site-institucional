import styles from "./Input.module.css"

export function Input(props) {
    const idErro = props.error ? `${props.id}-erro` : undefined

    return (
        <div className={styles.campo}>
            {props.label && (
                <label className={styles.label} htmlFor={props.id}>
                    {props.label}
                </label>
            )}
            <input
                id={props.id}
                name={props.name}
                value={props.value}
                type={props.type || "text"}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                onChange={props.onChange}
                className={`${styles.input} ${props.error ? styles.comErro : ""}`}
                aria-invalid={props.error ? true : undefined}
                aria-describedby={idErro}
            />
            {props.error && (
                <span id={idErro} className={styles.erro}>
                    {props.error}
                </span>
            )}
        </div>
    )
}
