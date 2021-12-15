FROM composer:latest AS composer
FROM php:7.2-apache
RUN apt-get update && apt-get install -y zlib1g-dev && apt-get install -y libzip-dev && apt-get install -y unzip && pecl install redis
RUN docker-php-ext-install pdo pdo_mysql mysqli zip
RUN docker-php-ext-enable redis
COPY composer.json /var/www/html/composer.json
ENV COMPOSER_ALLOW_SUPERUSER 1
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer dumpautoload