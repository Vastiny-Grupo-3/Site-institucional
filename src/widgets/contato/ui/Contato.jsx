import { Icone, TituloSecao } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import { SolicitarAtendimentoForm } from "@/features/solicitar-atendimento"
import styles from "./Contato.module.css"

// Junta os canais da empresa com a feature de solicitar atendimento.
export function Contato() {
    const contato = empresa.contato

    return (
        <section id="contato" className={styles.secao}>
            <div className={styles.grade}>
                <div>
                    <TituloSecao tom="claro" rotulo={contato.rotulo} titulo={contato.titulo} descricao={contato.texto} />
                    <ul className={styles.canais}>
                        <li>
                            <Icone nome="telefone" />
                            <div>
                                <p>Telefones</p>
                                <a href={contato.telefoneHref}>{contato.telefonesExibicao}</a>
                            </div>
                        </li>
                        <li>
                            <Icone nome="whatsapp" />
                            <div>
                                <p>WhatsApp</p>
                                <a
                                    href={`https://wa.me/${contato.whatsappNumero}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {contato.whatsappExibicao}
                                </a>
                            </div>
                        </li>
                        <li>
                            <Icone nome="pin" />
                            <div>
                                <p>Endereço</p>
                                <span>{contato.endereco}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.painel}>
                    <h3>Solicite atendimento</h3>
                    <p>Preencha os dados e enviamos a mensagem pronta no WhatsApp da DMC.</p>
                    <SolicitarAtendimentoForm />
                </div>
            </div>
        </section>
    )
}
