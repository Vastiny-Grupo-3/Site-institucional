# DMC Eletropeças — site institucional em Feature-Sliced Design

Site institucional da DMC Eletropeças, organizado nas mesmas camadas do projeto de referência.
O conteúdo (textos, produtos, serviços, contato) fica nas entidades. A página só encaixa os blocos.

## Como rodar

Na pasta do projeto, no terminal:

```bash
npm install
npm run dev
```

O `npm install` baixa as dependências e só precisa na primeira vez. O `npm run dev` abre o site em http://localhost:5173.

Para gerar a versão final e conferir ela:

```bash
npm run build
npm run preview
```

## As camadas

O código fica em `src/`. Cada camada só importa das camadas **abaixo** dela.

```
app        ← inicializa a aplicação (estilos globais, renderiza a página)
 ↓
pages      ← a página inicial só monta o layout
 ↓
widgets    ← blocos da tela (cabeçalho, hero, vitrine, contato...)
 ↓
features   ← ação do usuário: solicitar atendimento pelo WhatsApp
 ↓
entities   ← empresa, produto, serviço, marca e regras do atendimento
 ↓
shared     ← botão, campo, título de seção e ícones, sem regra de negócio
```

## Slices

```
src/
├── app/
├── pages/inicio/
├── widgets/
│   ├── cabecalho/
│   ├── hero/
│   ├── sobre/
│   ├── valores/
│   ├── solucoes/
│   ├── vitrine-produtos/
│   ├── marcas/
│   ├── diferenciais/
│   ├── contato/
│   └── rodape/
├── features/solicitar-atendimento/
├── entities/
│   ├── empresa/
│   ├── produto/
│   ├── servico/
│   ├── marca/
│   └── atendimento/
└── shared/ui/
```

## Regras que o projeto segue

1. **Import só para baixo.** A feature de atendimento usa `entities` e `shared`, nunca `widgets` ou `pages`.
2. **Slices da mesma camada não se conhecem.** `produto` não importa `empresa`. Quem junta as partes é o widget.
3. **Public API.** Cada slice tem um `index.js`. O resto do projeto importa só por ele:

   ```js
   import { ProdutoCard, produtos } from "@/entities/produto"          // ✅
   import { ProdutoCard } from "@/entities/produto/ui/ProdutoCard"     // ❌ import profundo
   ```

   O `@` aponta para `src/` (`vite.config.js` e `jsconfig.json`).
4. **Regra de negócio mora na entidade.** Nome e mensagem obrigatórios ficam em `entities/atendimento/model/validacao.js`. A feature só aplica essa validação e abre o WhatsApp.
