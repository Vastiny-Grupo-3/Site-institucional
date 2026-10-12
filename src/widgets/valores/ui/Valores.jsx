import { TituloSecao } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import styles from "./Valores.module.css"

export function Valores() {
    const valores = empresa.valores

    return (
        <section className={styles.secao} aria-labelledby="titulo-valores">
            <div className={styles.conteudo}>
                <TituloSecao id="titulo-valores" rotulo={valores.rotulo} titulo={valores.titulo} />
                <div className={styles.grade}>
                    {valores.itens.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <h3>{item.titulo}</h3>
                            <p>{item.texto}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
