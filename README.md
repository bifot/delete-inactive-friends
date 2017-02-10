# Delete Inactive Friends

Просто скрипт, который удаляет всех, кто не писал N-ое количество дней из вашего списка друзей.

## Установка

Для начала работы понадобится установленный Node.js и NPM.

Затем клонируем репозиторий:

```
$ git clone https://github.com/bifot/deleteInactiveFriends.git
$ cd deleteInactiveFriends
$ npm install
```

## Настройка

После установки открываем файл *app.js*, там находится два аргумента для работы функции — ваш токен и максимальное количество дней, допустимое для неактивности друга.

```javascript
deleteInactiveFriends('b4f62ec4e26098a4efd157a155b01230cc466355277d48df2317b0597d43fa36fb0b694bc50f6496a516c', 10);
```

- **Как получить токен?**

Заходите в [это приложение](https://vk.cc/5ZaXHu), разрешаете доступ, потом в адресной строке ищем токен. Все, что идет от **#access_token=** до **&expires_in** является токеном.

**Пример токена:** b4f62ec4e26098a4efd157a155b01230cc466355277d48df2317b0597d43fa36fb0b694bc50f6496a516c.

## Запуск

Когда все готово, запускаете скрипт командой:

```
$ node app.js
```

## Лицензия

MIT License

Copyright (c) 2017 Mikhail Semin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_________

*Сделано с любовью, автор: [Михаил Семин](http://bifot.ru).*