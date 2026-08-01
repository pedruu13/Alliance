# Arquitetura do Sistema

O **Alliance** adota uma arquitetura inspirada no padrão MVC simplificado para o Front-end, acoplado a uma estrutura rigorosa de processo isolado via Electron.

## 1. Visão Geral (Front-end e Back-end)
A aplicação possui dois universos independentes que não se tocam diretamente:
- **Renderer Process (Front-end):** Escrito em Vanilla JS, constrói a tela baseada no DOM (`index.html`) e no CSS moderno. Ele não possui acesso ao banco de dados ou arquivos do sistema.
- **Main Process (Back-end / Electron):** Roda o NodeJS, abriga as integrações pesadas e lida diretamente com o banco de dados (SQLite3) e com as requisições API seguras.

## 2. A Ponte: Preload e Context Isolation
Para que a interface gráfica peça informações ao banco de dados, ela utiliza o arquivo `preload.js` (a "ponte").
Essa ponte expõe o objeto `window.api`, garantindo que apenas funções específicas possam ser disparadas do front para o back, bloqueando injeções maliciosas.

## 3. Padrão Controller
No lado da interface gráfica (`src/controllers/`), dividimos as regras de negócio em arquivos separados por contexto:
- `DashboardController.js`
- `EstoqueController.js`
- `VendasController.js`
- `ClientesController.js`
- etc.

Apesar de ser Vanilla JS, a arquitetura mimetiza módulos React/Vue na injeção de estado. Toda ação é capturada nos componentes, enviada para o respectivo Controller que empacota os dados e os despacha para a `window.api`.
