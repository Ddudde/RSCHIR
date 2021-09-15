#!/usr/bin/env python3
# Импорт системных библиотек Python.
# Эти библиотеки будут использоваться для создания веб-сервера.
# Не нужно устанавливать что-то особенное, эти библиотеки устанавливаются вместе с Python.
import http.server
import socketserver

# Эта переменная нужна для обработки запросов клиента к серверу.
handler = http.server.SimpleHTTPRequestHandler
# Здесь указываемся, что сервер будет запущен на порте 1234.
# Нужно запомнить эти сведения, так как они очень пригодятся в дальнейшем, при работе с docker-compose.
with socketserver.TCPServer(("", 1234), handler) as httpd:
# Благодаря этой команде сервер будет выполняться постоянно, ожидая запросов от клиента.
  httpd.serve_forever()