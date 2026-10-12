import { Icone } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import styles from "./Sobre.module.css"

export function Sobre() {
    const sobre = empresa.sobre

    return (
        <section id="sobre" className={styles.secao}>
            <div className={styles.grade}>
                <div className={styles.moldura}>
                    <img src={sobre.imagem} alt={sobre.imagemAlt} />
                    <div className={styles.selo}>
                        <strong>{sobre.seloTitulo}</strong>
                        <span>{sobre.seloTexto}</span>
                    </div>
                </div>
                <div>
                    <p className={styles.rotulo}>{sobre.rotulo}</p>
                    <span className={styles.traco} aria-hidden="true" />
                    <h2 className={styles.titulo}>{sobre.titulo}</h2>
                    {sobre.paragrafos.map((paragrafo) => (
                        <p key={paragrafo} className={styles.texto}>
                            {paragrafo}
                        </p>
                    ))}
                    <a className={styles.link} href="#produtos">
                        Ver produtos em destaque
                        <Icone nome="seta" tamanho={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}
