import styles from "./ProdutoCard.module.css"

// A entidade só sabe exibir um produto. Quem chama decide o que fazer com ele.
export function ProdutoCard(props) {
    const produto = props.produto

    return (
        <article className={styles.card}>
            <div className={styles.foto}>
                <img src={produto.imagem} alt={produto.imagemAlt} loading="lazy" />
            </div>
            <div className={styles.corpo}>
                <p className={styles.aplicacao}>{produto.aplicacao}</p>
                <h3 className={styles.nome}>{produto.nome}</h3>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </article>
    )
}
