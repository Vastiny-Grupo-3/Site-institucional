import { Icone, TituloSecao } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import styles from "./Diferenciais.module.css"

export function Diferenciais() {
    const diferenciais = empresa.diferenciais

    return (
        <section className={styles.secao}>
            <div className={styles.conteudo}>
                <div className={styles.intro}>
                    <TituloSecao tom="claro" rotulo={diferenciais.rotulo} titulo={diferenciais.titulo} />
                    <p className={styles.texto}>{diferenciais.texto}</p>
                </div>
                <div className={styles.grade}>
                    {diferenciais.itens.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <Icone nome={item.icone} />
                            <h3>{item.titulo}</h3>
                            <p>{item.texto}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
