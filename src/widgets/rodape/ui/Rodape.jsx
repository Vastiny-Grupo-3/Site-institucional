import { Logo, empresa, navegacao } from "@/entities/empresa"
import styles from "./Rodape.module.css"

export function Rodape() {
    const contato = empresa.contato

    return (
        <footer className={styles.rodape}>
            <div className={styles.grade}>
                <div>
                    <Logo />
                    <p className={styles.resumo}>{empresa.rodape}</p>
                </div>
                <div>
                    <h2>Navegação</h2>
                    <nav className={styles.links} aria-label="Links do rodapé">
                        {navegacao.map((item) => (
                            <a key={item.id} href={item.href}>
                                {item.rotulo === "Sobre" ? "Sobre a DMC" : item.rotulo}
                            </a>
                        ))}
                    </nav>
                </div>
                <div>
                    <h2>Atendimento</h2>
                    <p>{contato.telefonesExibicao}</p>
                    <p>WhatsApp: {contato.whatsappExibicao}</p>
                </div>
                <div>
                    <h2>Endereço</h2>
                    <p>{contato.endereco}</p>
                </div>
            </div>
            <div className={styles.base}>
                <p>© {new Date().getFullYear()} DMC Eletropeças. Site institucional.</p>
            </div>
        </footer>
    )
}
