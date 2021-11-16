FROM php:7.2-apache
RUN a2enmod authn_dbd && a2enmod authn_socache && a2enmod socache_shmcb && apt-get update && apt-get install -y apache2-utils && apt-get install -y libaprutil1-dbd-mysql && service apache2 restart && docker-php-ext-install pdo pdo_mysql mysqli
COPY append.conf append.conf
RUN cat append.conf >> /etc/apache2/apache2.conf