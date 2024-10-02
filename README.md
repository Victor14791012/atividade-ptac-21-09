
# Aplicação de Login com Next.js e TypeScript

Este projeto foi desenvolvido como parte de uma atividade para a disciplina **PROGRAMAÇÃO E TECNOLOGIAS PARA APLICAÇÕES CLIENTE 4 (PTAC4)**, utilizando **Next.js** pela primeira vez com **TypeScript**. O objetivo principal foi criar uma aplicação simples de login e rotas básicas.

Repositório do projeto no GitHub: [Atividade PTAC - Login com Next.js e TypeScript](https://github.com/Victor14791012/atividade-ptac-21-09)

## Funcionalidades

- **Next.js com TypeScript**: Primeira aplicação feita com Next.js utilizando TypeScript para maior segurança no código.
- **Rotas Básicas**: Foram criadas rotas simples como a página de login e a página inicial (home).
- **Login com Verificação de Credenciais**: 
  - Se as credenciais estiverem incorretas, uma mensagem de erro é exibida dentro de um elemento `<p>`, informando que o email ou senha estão incorretos.
  - Se as credenciais estiverem corretas, o usuário é redirecionado para a página de **logado**.
  
## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de rotas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, tornando o código mais robusto.
- **CSS**: Utilizado para estilizar as páginas e componentes.

## Estrutura do Projeto

- **Páginas**: Implementa o roteamento com as rotas de login e home.
- **Componentes**: Componentes reutilizáveis, como inputs e formulários, foram criados e utilizados na página de login.
  
## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Victor14791012/atividade-ptac-21-09.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd atividade-ptac-21-09
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e vá para:
   ```
   http://localhost:3000
   ```

## Funcionalidade de Login

A página de login verifica as credenciais inseridas no formulário:

- **Credenciais Incorretas**: Exibe uma mensagem de erro no formulário dizendo "Email ou senha estão incorretos".
- **Credenciais Corretas**: Redireciona o usuário para a página "logado", indicando que a autenticação foi bem-sucedida.

## Status do Projeto

Atualmente, o projeto conta apenas com a funcionalidade de login e a página inicial (home). Futuramente, outras funcionalidades podem ser adicionadas conforme o desenvolvimento avançar.

---

Projeto desenvolvido por **Victor Hugo Lourenço de Carvalho**.
