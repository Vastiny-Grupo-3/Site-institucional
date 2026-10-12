// Dados institucionais da DMC. A entidade guarda o que a empresa é;
// widgets e features só leem daqui, sem repetir telefone, endereço ou texto.
export const empresa = {
    nome: "DMC Eletropeças",
    cidade: "Mauá",
    hero: {
        rotulo: "DMC Eletropeças em Mauá",
        titulo: "Peças elétricas automotivas para manter você em movimento.",
        descricao:
            "Atendimento para produtos e serviços relacionados a motores de partida, componentes elétricos e eletroventiladores automotivos.",
        imagem: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600",
        imagemAlt: "Mecânico verificando o motor de um carro em uma oficina",
    },
    sobre: {
        rotulo: "Sobre a DMC",
        titulo: "Atendimento próximo para a rotina elétrica do seu veículo.",
        paragrafos: [
            "A DMC Eletropeças atende em Mauá com produtos e serviços relacionados a componentes elétricos automotivos.",
            "Nossa equipe está disponível para orientar a sua solicitação e apresentar alternativas conforme a aplicação informada.",
        ],
        seloTitulo: "DMC Eletropeças",
        seloTexto: "Atendimento direto para necessidades elétricas automotivas.",
        imagem: "/imagens/fachada-dmc.jpg",
        imagemAlt: "Fachada da loja DMC Eletropeças em Mauá",
    },
    valores: {
        rotulo: "Nossa forma de trabalhar",
        titulo: "Missão, visão e valores",
        itens: [
            {
                id: "missao",
                titulo: "Missão",
                texto: "Oferecer peças elétricas e de injeção automotiva com atendimento próximo, orientação clara e soluções de qualidade para cada necessidade.",
            },
            {
                id: "visao",
                titulo: "Visão",
                texto: "Ser reconhecida pela confiança, agilidade e qualidade no relacionamento com clientes e profissionais do setor automotivo.",
            },
            {
                id: "valores",
                titulo: "Valores",
                texto: "Atendimento, confiança, qualidade, agilidade e compromisso em cada contato e solução apresentada.",
            },
        ],
    },
    diferenciais: {
        rotulo: "Atendimento DMC",
        titulo: "Informação clara para apoiar sua solicitação.",
        texto: "A DMC Eletropeças reúne atendimento local, linhas de componentes automotivos e canais diretos para facilitar o contato.",
        itens: [
            {
                id: "linhas",
                icone: "pacote",
                titulo: "Linhas especializadas",
                texto: "Categorias voltadas a componentes elétricos automotivos.",
            },
            {
                id: "contato",
                icone: "mensagem",
                titulo: "Contato direto",
                texto: "Telefones e WhatsApp disponíveis para atendimento.",
            },
            {
                id: "loja",
                icone: "pin",
                titulo: "Loja em Mauá",
                texto: "Localização na Vila Bocaina, próxima ao Supermercado Baronesa.",
            },
            {
                id: "consulta",
                icone: "chave",
                titulo: "Consulta de aplicação",
                texto: "Solicite informações conforme a aplicação desejada.",
            },
        ],
    },
    contato: {
        rotulo: "Contato e atendimento",
        titulo: "Fale com a DMC Eletropeças.",
        texto: "Entre em contato para consultar produtos, aplicações e atendimento relacionado às linhas elétricas automotivas.",
        telefonesExibicao: "4544-5477 | 4544-2451",
        telefoneHref: "tel:+551145445477",
        whatsappExibicao: "9 4009-2302",
        whatsappNumero: "5511940092302",
        endereco:
            "Rua Alonso de Vasconcelos Pacheco, 777, Vila Bocaina, Mauá. A 50 metros do Supermercado Baronesa.",
    },
    rodape: "Produtos e atendimento para componentes elétricos automotivos em Mauá.",
}

export const navegacao = [
    { id: "sobre", href: "#sobre", rotulo: "Sobre" },
    { id: "solucoes", href: "#solucoes", rotulo: "Soluções" },
    { id: "produtos", href: "#produtos", rotulo: "Produtos" },
    { id: "contato", href: "#contato", rotulo: "Contato" },
]
