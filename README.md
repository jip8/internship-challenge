# Salutho - Desafio de Estágio para Desenvolvedor de Software

## Visão Geral

Este projeto é a submissão para o Desafio de Estágio da Salutho. Consiste em uma aplicação web que calcula o menor número inteiro divisível por todos os números dentro de um intervalo específico.

## Como Funciona

1.  O usuário acessa a interface e insere dois números (início e fim) para definir um intervalo.
2.  O frontend (React) envia uma requisição para a API do backend com este intervalo.
3.  O backend (Django) recebe os números, valida o intervalo e calcula o Menor Múltiplo Comum (MMC) para todos os inteiros contidos nele.
4.  A API retorna o resultado do cálculo, que é então exibido na tela para o usuário.

## Estrutura do Projeto

O repositório está organizado da seguinte forma:

-   `backend/`: Aplicação em Django que expõe a API RESTful para o cálculo.
-   `frontend/`: Aplicação em React que serve como interface para o usuário.
-   `dockerfiles/`: Arquivos de configuração do Docker, incluindo o `docker-compose.yml` para orquestrar os serviços.
-   `swagger/`: Arquivo `swagger.yaml` com a documentação da API.

## Como Rodar o Projeto

A maneira mais simples de executar o projeto é utilizando Docker e Docker Compose.

### Pré-requisitos

-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

### Instruções

1.  Na raiz do projeto, execute o Docker Compose para construir e iniciar os contêineres:
    ```bash
    docker-compose -f ./dockerfiles/docker-compose.yml up --build
    ```

2.  Após a inicialização, a aplicação estará disponível nos seguintes endereços:
    -   **Frontend:** [http://localhost:3000](http://localhost:3000)
    -   **Backend API:** [http://localhost:8000/api/](http://localhost:8000/api/)
    -   **Documentação API:** [http://localhost:8081](http://localhost:8081)