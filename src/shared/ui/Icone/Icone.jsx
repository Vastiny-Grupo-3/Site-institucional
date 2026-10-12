const icones = {
    menu: (
        <>
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
        </>
    ),
    fechar: (
        <>
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
        </>
    ),
    seta: (
        <>
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
        </>
    ),
    raio: <path d="M13 2L4 14h7l-1 8 10-12h-7l0-8z" />,
    engrenagem: (
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
        </>
    ),
    energia: (
        <>
            <path d="M12 3v9" />
            <path d="M8 7a7 7 0 1 0 8 0" />
        </>
    ),
    escova: (
        <>
            <path d="M8 4h8v6a4 4 0 0 1-8 0V4z" />
            <path d="M10 14v6M14 14v6M9 20h6" />
        </>
    ),
    cabo: <path d="M4 8c4 0 4 8 8 8s4-8 8-8" />,
    medidor: (
        <>
            <path d="M5 19a9 9 0 1 1 14 0" />
            <path d="M12 13l4-4" />
        </>
    ),
    pacote: (
        <>
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
            <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
        </>
    ),
    mensagem: (
        <>
            <path d="M5 6h14v9H8l-3 3V6z" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.2" />
        </>
    ),
    chave: <path d="M14 7a4 4 0 0 0-5.7 5.2L4 16.5V20h3.5l1.2-1.2L10 17.5l1.3-1.3A4 4 0 1 0 14 7z" />,
    telefone: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.33 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.37 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    whatsapp: (
        <path
            d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
            transform="translate(12 12) scale(0.84) translate(-12 -12)"
        />
    ),
}

export function Icone(props) {
    return (
        <svg
            className={props.className}
            width={props.tamanho || 24}
            height={props.tamanho || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icones[props.nome]}
        </svg>
    )
}
