import { TituloSecao } from "@/shared/ui"
import { MarcaCard, marcas, secaoMarcas } from "@/entities/marca"
import styles from "./Marcas.module.css"

export function Marcas() {
    return (
        <section id="marcas" className={styles.secao}>
            <div className={styles.conteudo}>
                <TituloSecao
                    rotulo={secaoMarcas.rotulo}
                    titulo={secaoMarcas.titulo}
                    descricao={secaoMarcas.descricao}
                />
                <div className={styles.grade}>
                    {marcas.map((marca) => (
                        <MarcaCard key={marca.id} marca={marca} />
                    ))}
                </div>
            </div>
        </section>
    )
}
