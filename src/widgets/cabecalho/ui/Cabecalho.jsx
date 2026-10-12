import { useEffect, useState } from "react"

import { Button, Icone } from "@/shared/ui"
import { Logo, navegacao } from "@/entities/empresa"
import styles from "./Cabecalho.module.css"

export function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [rolado, setRolado] = useState(false)

    useEffect(() => {
        function aoRolar() {
            setRolado(window.scrollY > 10)
        }

        aoRolar()
        window.addEventListener("scroll", aoRolar, { passive: true })
        return () => window.removeEventListener("scroll", aoRolar)
    }, [])

    function fecharMenu() {
        setMenuAberto(false)
    }

    return (
        <header id="inicio" className={`${styles.cabecalho} ${rolado ? styles.rolado : ""}`}>
            <a className={styles.pular} href="#conteudo">
                Pular para o conteúdo
            </a>
            <div className={styles.barra}>
                <a href="#inicio" className={styles.logo} aria-label="Ir para o início">
                    <Logo alt="" />
                </a>

                <nav className={styles.nav} aria-label="Navegação principal">
                    {navegacao.map((item) => (
                        <a key={item.id} className={styles.link} href={item.href}>
                            {item.rotulo}
                        </a>
                    ))}
                </nav>

                <div className={styles.acoes}>
                    <Button href="#contato">Fale com a DMC</Button>
                    <button
                        type="button"
                        className={styles.menu}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuAberto}
                        aria-controls="menu-mobile"
                        onClick={() => setMenuAberto((aberto) => !aberto)}
                    >
                        <Icone nome={menuAberto ? "fechar" : "menu"} />
                    </button>
                </div>
            </div>

            <nav
                id="menu-mobile"
                className={`${styles.mobile} ${menuAberto ? styles.aberto : ""}`}
                aria-label="Navegação mobile"
            >
                {navegacao.map((item) => (
                    <a key={item.id} href={item.href} onClick={fecharMenu}>
                        {item.rotulo}
                    </a>
                ))}
            </nav>
        </header>
    )
}
