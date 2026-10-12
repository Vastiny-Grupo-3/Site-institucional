// Monta o texto que segue para o WhatsApp. Não conhece o número da loja:
// quem envia (a feature) junta a mensagem com o contato da empresa.
export function montarMensagemWhatsapp(dados) {
    const linhas = [`Olá, meu nome é ${dados.nome.trim()}.`]

    if (dados.veiculo.trim() !== "") {
        linhas.push(`Veículo: ${dados.veiculo.trim()}.`)
    }

    linhas.push(dados.mensagem.trim())
    return linhas.join("\n")
}
