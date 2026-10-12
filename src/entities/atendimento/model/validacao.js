// Regras de uma solicitação de atendimento válida.
// Ficam na entidade porque valem para qualquer canal que envie o pedido.
// Cada função devolve a mensagem de erro, ou "" quando o valor é válido.

function validarNome(valor) {
    if (valor.trim() === "") return "Nome é obrigatório"
    if (valor.trim().length < 2) return "Informe pelo menos 2 caracteres"
    return ""
}

function validarMensagem(valor) {
    if (valor.trim() === "") return "Mensagem é obrigatória"
    if (valor.trim().length < 10) return "Descreva a solicitação com pelo menos 10 caracteres"
    return ""
}

export function validarAtendimento(formulario) {
    return {
        nome: validarNome(formulario.nome),
        mensagem: validarMensagem(formulario.mensagem),
    }
}

export function temErros(erros) {
    return Object.values(erros).some((mensagem) => mensagem !== "")
}
