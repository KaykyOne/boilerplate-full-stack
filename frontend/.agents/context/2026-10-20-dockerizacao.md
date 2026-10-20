# Dockerização do frontend

## Resumo

Adicionado Dockerfile multi-stage do Next.js e serviço no `docker-compose.yml` da raiz.

## Arquivos alterados

- `frontend/Dockerfile`
- `frontend/.dockerignore`

## Alterações

- Estágios deps (`npm ci`), builder (`npm run build`) e runner (`npm run start`, porta 3000).
- `BACKEND_URL` entra como build arg (padrão `http://api:8000`), pois os rewrites do `next.config.ts` são resolvidos no build.

## Decisões

- Browser continua chamando apenas o Next; `/api/*` e `/sanctum/*` passam pelos rewrites.
- `next.config.ts` não foi alterado.

## Estado atual

O build de produção falha por um problema pré-existente: `app/(public)/(sign-up)/sing-up-user/page.tsx` está vazio ("is not a module"). Com esse arquivo corrigido, a imagem deve compilar.

## Pendências

- Corrigir/implementar `sing-up-user/page.tsx` (nome com typo "sing") para o build passar.
