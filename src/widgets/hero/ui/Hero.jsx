import { Button, Icone } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import styles from "./Hero.module.css"

export function Hero() {
    const hero = empresa.hero

    return (
        <section className={styles.hero}>
            <img className={styles.foto} src={hero.imagem} alt={hero.imagemAlt} />
            <div className={styles.overlay} />
            <div className={styles.conteudo}>
                <p className={styles.rotulo}>{hero.rotulo}</p>
                <h1 className={styles.titulo}>{hero.titulo}</h1>
                <p className={styles.descricao}>{hero.descricao}</p>
                <div className={styles.acoes}>
                    <Button href="#contato">
                        Solicitar atendimento
                        <Icone nome="seta" tamanho={18} />
                    </Button>
                    <Button href="#produtos" variant="contornoClaro">
                        Ver produtos
                    </Button>
                </div>
            </div>
        </section>
    )
}
