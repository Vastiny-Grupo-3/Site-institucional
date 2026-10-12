import { TituloSecao } from "@/shared/ui"
import { ServicoCard, secaoServicos, servicos } from "@/entities/servico"
import styles from "./Solucoes.module.css"

export function Solucoes() {
    return (
        <section id="solucoes" className={styles.secao}>
            <div className={styles.conteudo}>
                <TituloSecao
                    rotulo={secaoServicos.rotulo}
                    titulo={secaoServicos.titulo}
                    descricao={secaoServicos.descricao}
                />
                <div className={styles.grade}>
                    {servicos.map((servico) => (
                        <ServicoCard key={servico.id} servico={servico} />
                    ))}
                </div>
            </div>
        </section>
    )
}
