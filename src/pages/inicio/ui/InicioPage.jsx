import { Cabecalho } from "@/widgets/cabecalho"
import { Contato } from "@/widgets/contato"
import { Diferenciais } from "@/widgets/diferenciais"
import { Hero } from "@/widgets/hero"
import { Marcas } from "@/widgets/marcas"
import { Rodape } from "@/widgets/rodape"
import { Sobre } from "@/widgets/sobre"
import { Solucoes } from "@/widgets/solucoes"
import { Valores } from "@/widgets/valores"
import { VitrineProdutos } from "@/widgets/vitrine-produtos"

// A página só monta o layout e encaixa os widgets.
export function InicioPage() {
    return (
        <>
            <Cabecalho />
            <main id="conteudo">
                <Hero />
                <Sobre />
                <Valores />
                <Solucoes />
                <VitrineProdutos />
                <Marcas />
                <Diferenciais />
                <Contato />
            </main>
            <Rodape />
        </>
    )
}
