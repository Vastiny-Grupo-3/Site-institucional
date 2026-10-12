import { useState } from "react"

import { Button, Input, Textarea } from "@/shared/ui"
import { empresa } from "@/entities/empresa"
import { montarMensagemWhatsapp, temErros, validarAtendimento } from "@/entities/atendimento"
import styles from "./SolicitarAtendimentoForm.module.css"

const formularioVazio = {
    nome: "",
    veiculo: "",
    mensagem: "",
}

// A feature conduz a ação: valida com a entidade e abre o WhatsApp da empresa.
export function SolicitarAtendimentoForm() {
    const [dados, setDados] = useState(formularioVazio)
    const [erros, setErros] = useState({})
    const [enviado, setEnviado] = useState(false)

    function aoAlterar(event) {
        const { name, value } = event.target
        setDados((atuais) => ({ ...atuais, [name]: value }))
        setEnviado(false)
    }

    function aoEnviar(event) {
        event.preventDefault()
        const resultado = validarAtendimento(dados)
        setErros(resultado)
        if (temErros(resultado)) return

        const texto = montarMensagemWhatsapp(dados)
        const url = `https://wa.me/${empresa.contato.whatsappNumero}?text=${encodeURIComponent(texto)}`
        window.open(url, "_blank", "noopener,noreferrer")
        setEnviado(true)
    }

    return (
        <form className={styles.formulario} onSubmit={aoEnviar} noValidate>
            <Input
                id="nome"
                name="nome"
                label="Nome"
                placeholder="Como podemos te chamar"
                autoComplete="name"
                value={dados.nome}
                error={erros.nome}
                onChange={aoAlterar}
            />
            <Input
                id="veiculo"
                name="veiculo"
                label="Veículo"
                placeholder="Ex.: Honda Civic 2008"
                value={dados.veiculo}
                onChange={aoAlterar}
            />
            <Textarea
                id="mensagem"
                name="mensagem"
                label="Mensagem"
                placeholder="Conte o que você precisa consultar"
                value={dados.mensagem}
                error={erros.mensagem}
                onChange={aoAlterar}
            />
            <Button type="submit">Enviar pelo WhatsApp</Button>
            {enviado && (
                <p className={styles.confirmacao} role="status">
                    Abrimos o WhatsApp com a sua mensagem. Se a janela não aparecer, fale no{" "}
                    {empresa.contato.whatsappExibicao}.
                </p>
            )}
        </form>
    )
}
