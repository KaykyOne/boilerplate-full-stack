# Dockerização da API

## Resumo

Adicionada a infraestrutura Docker para executar a API com PostgreSQL e worker de filas.

## Arquivos alterados

- `api/Dockerfile`
- `api/.dockerignore`
- `docker-compose.yml` (raiz)
- `.env.example` (raiz), `.gitignore` (raiz), `README.md`

## Alterações

- Imagem `php:8.4-cli-alpine` com `pdo_pgsql` e `pcntl` (o `composer.lock` exige PHP 8.4).
- Serviço `api` roda `migrate --force` e `artisan serve` na porta 8000.
- Serviço `queue` roda `queue:work` (`QUEUE_CONNECTION=database`).
- Serviço `db` (postgres:17) com healthcheck e volume; `storage` em volume nomeado.
- Configuração via variáveis no compose; `APP_KEY` obrigatório no `.env` da raiz.

## Decisões

- Sem alteração de código da aplicação.
- Sessão/cache/fila continuam em `database`; `SANCTUM_STATEFUL_DOMAINS` mantém `localhost:3000`.

## Estado atual

`docker compose up db api queue` sobe, migra e responde (POST /api/login sem corpo retorna 422).

## Pendências

- Nenhuma.
