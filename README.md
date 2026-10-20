<div align="center">

# Full-Stack Boilerplate

**Uma base moderna para construir aplicações web com Laravel e Next.js.**

[![Laravel](https://img.shields.io/badge/Laravel_13-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Backend e frontend independentes durante o desenvolvimento, versionados juntos em um único monorepo.

</div>

---

## Visão geral

Este repositório é um ponto de partida full-stack com uma API em Laravel e uma aplicação web em Next.js. A estrutura separa claramente as responsabilidades de backend e frontend, mas mantém todo o produto sob o mesmo histórico Git, facilitando mudanças coordenadas, revisão de código e deploy.

| Projeto | Responsabilidade | Tecnologias principais |
| --- | --- | --- |
| `api/` | Regras de negócio, persistência, filas e endpoints HTTP | PHP 8.3, Laravel 13, SQLite, PHPUnit, Pint |
| `frontend/` | Interface web, componentes e experiência do usuário | Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui |

## Stack

### Backend

- **PHP 8.3** e **Laravel 13**
- **SQLite** como banco local padrão, facilmente substituível por PostgreSQL ou MySQL
- **Eloquent ORM**, migrations, seeders, filas e cache do Laravel
- **PHPUnit 12** para testes
- **Laravel Pint** para padronização de código
- **Vite 8** e **Tailwind CSS 4** para os assets do Laravel

### Frontend

- **Next.js 16** com App Router e React Server Components
- **React 19** e **TypeScript 5**
- **Tailwind CSS 4**
- **shadcn/ui**, Base UI e Lucide Icons
- **Zod** para validação de dados
- Componentes preparados para formulários, tabelas, gráficos, diálogos, navegação e feedback visual

## Estrutura do projeto

```text
boilerplate-full/
├── api/                 # Aplicação Laravel
│   ├── app/             # Domínio, models, controllers e providers
│   ├── database/        # Migrations, factories e seeders
│   ├── routes/          # Rotas da aplicação
│   └── tests/           # Testes unitários e de integração
├── frontend/            # Aplicação Next.js
│   ├── app/             # Rotas, layouts e páginas
│   ├── components/      # Componentes reutilizáveis e UI
│   ├── lib/             # Utilitários e configurações
│   └── public/          # Arquivos estáticos
└── README.md
```

## Pré-requisitos

- PHP `8.3+`
- Composer `2+`
- Node.js `20.9+`
- npm `10+`
- Git

## Primeiros passos

Clone o repositório e entre na pasta:

```bash
git clone <url-do-repositorio>
cd boilerplate-full
```

### 1. Configurar a API

```bash
cd api
composer install
php -r "file_exists('.env') || copy('.env.example', '.env');"
php -r "file_exists('database/database.sqlite') || touch('database/database.sqlite');"
php artisan key:generate
php artisan migrate
npm install
```

Inicie o servidor Laravel, o worker de filas, os logs e o Vite em conjunto:

```bash
composer run dev
```

A API ficará disponível em [http://localhost:8000](http://localhost:8000).

### 2. Configurar o frontend

Em outro terminal, partindo da raiz:

```bash
cd frontend
npm install
```

Crie o arquivo de ambiente:

```bash
cp .env.example .env
```

No PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Inicie a aplicação:

```bash
npm run dev
```

O frontend ficará disponível em [http://localhost:3000](http://localhost:3000).

## Docker

Sobe PostgreSQL, API (com migrations automáticas), worker de filas e frontend:

```bash
cp .env.example .env
# gere uma chave e cole em APP_KEY no .env
echo "base64:$(openssl rand -base64 32)"
docker compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:8000](http://localhost:8000)

O navegador acessa apenas o frontend; `/api/*` e `/sanctum/*` são encaminhados à API pelos rewrites do Next (`BACKEND_URL` é definido no build como `http://api:8000`).

## Comandos úteis

| Contexto | Comando | Descrição |
| --- | --- | --- |
| API | `composer run dev` | Inicia servidor, fila, logs e Vite |
| API | `composer test` | Executa os testes do Laravel |
| API | `./vendor/bin/pint` | Formata o código PHP |
| API | `php artisan migrate:fresh --seed` | Recria e popula o banco local |
| Frontend | `npm run dev` | Inicia o Next.js em desenvolvimento |
| Frontend | `npm run lint` | Executa o ESLint |
| Frontend | `npm run build` | Gera e valida o build de produção |
| Frontend | `npm run start` | Executa o build de produção |

## Fluxo Git do monorepo

Existe **um único repositório Git na raiz**. As pastas `api/` e `frontend/` não são submódulos nem repositórios separados: ao executar um comando Git dentro delas, o Git encontra automaticamente o repositório pai.

Para manter o histórico organizado, faça commits por projeto a partir da raiz:

```bash
# Alterações somente na API
git add api
git commit -m "feat(api): descreva a mudança"

# Alterações somente no frontend
git add frontend
git commit -m "feat(frontend): descreva a mudança"
```

Uma mudança full-stack também pode ser versionada em conjunto:

```bash
git add api frontend
git commit -m "feat: descreva a entrega full-stack"
```

O remoto e o push pertencem sempre ao repositório raiz:

```bash
git remote add origin <url-do-repositorio> # necessário apenas na primeira vez
git push -u origin main                     # primeiro push
git push                                    # próximos pushes
```

### Convenção sugerida de commits

```text
feat(api): adiciona autenticação
fix(api): corrige validação do cadastro
feat(frontend): cria tela de login
fix(frontend): ajusta responsividade do menu
chore: atualiza dependências do monorepo
```

## Qualidade antes do commit

Execute as verificações do projeto alterado:

```bash
# API
cd api
composer test
./vendor/bin/pint --test

# Frontend
cd ../frontend
npm run lint
npm run build
```

## Próximos passos

- Definir os endpoints da API em `api/routes/`
- Configurar a URL da API nas variáveis de ambiente do frontend
- Adicionar autenticação e autorização
- Escolher o banco de produção
- Configurar CI/CD e ambientes de deploy

---

<div align="center">

Feito para começar rápido, crescer com organização e manter frontend e backend alinhados.

</div>
