import styles from "./Textarea.module.css"

export function Textarea(props) {
    const idErro = props.error ? `${props.id}-erro` : undefined

    return (
        <div className={styles.campo}>
            {props.label && (
                <label className={styles.label} htmlFor={props.id}>
                    {props.label}
                </label>
            )}
            <textarea
                id={props.id}
                name={props.name}
                value={props.value}
                rows={props.rows || 4}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className={`${styles.textarea} ${props.error ? styles.comErro : ""}`}
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
