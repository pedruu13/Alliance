# Banco de Dados

Historicamente, aplicações SPA simples costumam armazenar dados no `localStorage`. Porém, o **Alliance** sendo um sistema de Gestão e ERP lida com dados críticos de estoque e fluxo de caixa, impossibilitando esse modelo.

## O Modelo: SQLite 3
Integramos a engine relacional `sqlite3` rodando puramente no lado Node.js da aplicação.

### Benefícios no Electron
- **Segurança de Memória:** O usuário comum e a interface gráfica (browser do Electron) não possuem acesso direto à base de dados. Um script malicioso injetado via console não consegue dropar ou vazar as tabelas.
- **Offline First:** Por ser um app Desktop voltado para o varejo (lojas físicas de joias), a venda e a emissão não podem parar se a internet cair. Toda transação é salva no arquivo `database.sqlite` em disco.
- **Concorrência e Escalabilidade:** Comandos de INSERT e UPDATE são geridos pela fila do SQLite, evitando colisão de dados no estoque.

### O Serviço (DatabaseService)
Foi criado um arquivo singleton no Backend `src/services/DatabaseService.js` que centraliza as regras de queries, updates, deletes e migrations da aplicação inteira, não havendo "vazamento" de queries SQL cruas.

> **Nota:** Nas versões atuais, o `localStorage` ficou restrito única e exclusivamente a preferências efêmeras de UI, como o estado de menu aberto/fechado ou tema.
