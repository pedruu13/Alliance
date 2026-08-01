# Changelog

Todas as modificações notáveis neste projeto serão documentadas neste arquivo.

## [1.0.0] - 2026-08-01

Esta é a release oficial inicial (v1.0.0) que marca a consolidação do Alliance como um Desktop App robusto, saindo de sua fase MVP web para uma aplicação instalável, segura e visualmente polida.

### 🚀 Funcionalidades (Features)
- **Gestão de Estoque Completa:** Inserção, edição e exclusão com suporte para gramaturas específicas (Ouro, Prata).
- **Módulo PDV (Vendas):** Lançamento ágil de vendas com cálculo automático de margens de lucro.
- **Integração NF-e via API Focus NFe:** Configuração isolada com autorização e emissão em 1 clique direto pela tela de Vendas.
- **Compra de Ouro:** Gestão de aquisição baseada em cotação atualizada, com cálculos automáticos de quilates (24K, 18K).
- **Gestão de Caixa:** Abertura, suprimento, sangria, lançamentos parciais e fechamento de fluxo.
- **Gestão de Equipe e Comissões:** Cálculo automático de comissionamento individual das vendedoras com metas configuráveis.

### 💅 Design e UI/UX (Aesthetics)
- **Glassmorphism:** Adoção profunda do estilo Glassmorphism (fundos translúcidos e bordas envidraçadas) para um visual premium em todas as telas.
- **Responsividade Híbrida:** Adaptação da interface para funcionar tanto como janela maximizada quanto em menores resoluções, através de Flexbox e Grid CSS refinados.
- **Micro-interações:** Adicionadas animações suaves em modais, toasts (notificações) e hover de botões (Neumorphism elements).

### 🛠️ Arquitetura e Engenharia (Under the Hood)
- **Migração para Electron + Vite:** Substituição da base puramente web por um executável nativo Windows gerenciado pelo Electron, garantindo acesso local e sem necessidade de servidor externo.
- **Banco de Dados Local (SQLite3):** Remoção total do `localStorage` como fonte de verdade (utilizado agora apenas para preferências de UI) e implementação de persistência assíncrona blindada no SQLite3.
- **Isolamento de Contexto (Context Isolation):** Adoção das melhores práticas de segurança do Electron (`nodeIntegration: false`, `contextIsolation: true`) com ponte via `preload.js` (`window.api`).
- **Controladores Modulares:** Separação das responsabilidades lógicas do Front-end em controladores dedicados (`EstoqueController`, `VendasController`, etc).

### 🔐 Segurança
- Implementação de bloqueio de navegação no `main.js` (apenas protocolos HTTP/HTTPS) para evitar exploração local (`file://`, `javascript:`).
- Fechamento da possibilidade de injeção direta de scripts no DOM através do saneamento das chamadas da API de banco de dados via IPC (Inter-Process Communication).
