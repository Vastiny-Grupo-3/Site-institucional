import { Button, TituloSecao } from "@/shared/ui"
import { ProdutoCard, produtos, secaoProdutos } from "@/entities/produto"
import styles from "./VitrineProdutos.module.css"

// O widget junta a vitrine (entidade) com o caminho de atendimento.
export function VitrineProdutos() {
    return (
        <section id="produtos" className={styles.secao}>
            <div className={styles.conteudo}>
                <TituloSecao
                    rotulo={secaoProdutos.rotulo}
                    titulo={secaoProdutos.titulo}
                    descricao={secaoProdutos.descricao}
                />
                <div className={styles.grade}>
                    {produtos.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))}
                </div>
                <div className={styles.acao}>
                    <Button href="#contato" variant="secundario">
                        Veja mais
                    </Button>
                </div>
            </div>
        </section>
    )
}
