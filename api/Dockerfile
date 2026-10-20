# syntax=docker/dockerfile:1

FROM php:8.4-cli-alpine

# Extensões PHP necessárias (PostgreSQL)
RUN apk add --no-cache libpq-dev \
    && docker-php-ext-install pdo_pgsql pcntl

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# local (padrão) instala dependências de dev (ex.: Faker para seeders); production não
ARG APP_ENV=local

# Dependências (camada cacheável)
COPY composer.json composer.lock ./
RUN if [ "$APP_ENV" = "production" ]; then NO_DEV="--no-dev"; fi; \
    composer install $NO_DEV --no-scripts --no-autoloader --prefer-dist --no-interaction

# Código da aplicação
COPY . .
RUN if [ "$APP_ENV" = "production" ]; then NO_DEV="--no-dev"; fi; \
    composer dump-autoload --optimize $NO_DEV \
    && mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
