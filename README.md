# Testes Automatizados para Projeto de Detecção de Fogo

Este repositório contém testes automatizados para o projeto de detecção de fogo, utilizando **Playwright** para garantir a qualidade e a funcionalidade da aplicação web.

## Funcionalidades dos Testes

- Verificação da página inicial e sua funcionalidade.
- Testes para a página de teste de modelo, onde o usuário pode testar a detecção de fogo utilizando a câmera do notebook.
- Captura de vídeo e rastreamento de erros em caso de falhas nos testes.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- **Node.js** (versão 12 ou superior)
- **Playwright**

### Instalação do Projeto

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/seu-usuario/frontend-fogo-teste.git
    cd frontend-fogo-teste
    ```

2. **Instale as dependências**:

    Após clonar o repositório, execute o seguinte comando para instalar todas as dependências necessárias:

    ```bash
    npm install
    ```

### Estrutura do Projeto

O projeto segue a seguinte estrutura:

```plaintext
frontend-fogo-teste/
├── pages/                  # Classes para representar as páginas da aplicação
│   ├── homePage.js         # Página inicial
│   └── testarModeloPage.js # Página de teste do modelo de detecção de fogo
│
├── tests/                  # Testes automatizados
│   ├── home.test.js        # Testes da página inicial
│   └── testar_modelo.test.js # Testes da página de detecção de fogo
│
├── playwright.config.js    # Configuração do Playwright
├── package.json            # Gerenciador de dependências
└── .gitignore              # Arquivos e pastas ignorados pelo Git
