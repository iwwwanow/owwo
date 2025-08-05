- [x] подключить стили в директорию public. передавать их независимо от шаблонов
- [x] - рендер сетки в директории
  - [x] - выбор directory || text || image || other для шаблона resouce-card
   - [x] - для type=text сделать подготовку preview
     - для image можно заталкивать туда ссылку
- [ ] - рендер страницы с ресурсом
  - [ ] - get resource content
  - [ ] - full-size-image
  - [ ] - md text to html
- [ ] - docker, docker-compose for deploy, or docker only for deploy. it will be better
  - [ ] - ssh-connection
  - [ ] - linux-enveronment
  - [ ] - remote-server-usage

- покачто делаю без зарезервированных имен, типа кавера, resource-info.json и пр
- также делаю без даты типа дата создания, дата регистрации и пр
- просто рендер изобрежений и текста
- после рендера страницы настраивать деплой

ltf:
- [ ] directory resource type card design. должен отличаться
- [ ] resource page
  - [ ] - css link to page
  - [ ] - js link to page
  - [ ] - custom json data
- [ ] resource full page render:
  - [ ] - cover
  - [ ] - other resource data
  - [ ] - root layout. как это реализовать в шаблоне? просто встроить стили в страницу?
  - [ ] - hr для футера. 2 режима отображения - с текстом и без
  - [ ] - content. 2 режима отображения - grid и full-size (image & text)
  - [ ] - изображения
  - [ ] - текст
  - [ ] - прочие файлы. при нажатии на них - скачивание, прямо из сетки. пре переходе на страницу - тоже скачивание

---

- [x] базовая верстка, без контента
  - просто перенести верстку из предыдущих версий
- [ ] рендер контента
  - енв, который принимает путь до директории с файлами

---

- https://chat.deepseek.com/a/chat/s/d2e60272-d8be-4724-9925-723ecae87d50

- [ ] - get mime type
- [ ] - get cover path
- [ ] - pass it to renders

---

- [ ] - нужно переделать структуру. сначала получение верстки в виде строк, затем рендер

- [x] - чтение директории
- [x] - вынести отрисовку child-resources в ui
- [x] - рендирить актуальные файлы со ссылкой
  - [x] - перебрал функцию getfilenames. нужно передавать в неё готовый struct
- [ ] - рендерить информацию о текущей директории
  - [ ] - вынести uploads-dir-path в env-переменную
  - [ ] - лепить строку из uploads-dir-path и uri
  - [ ] - передавать её в get-resource-data
  - [ ] - возвращаемым значение должнен быть массив из resources. в которых будет mimetype, path, name, description, cover
    - все маршруты будут относительными путями до соответствующих файлов
- [ ] - переходить по вложенным директориям и рендерить их информацию
- [ ] - можно покачто просто рендерить названия файлов. без вожений, типо список
- [ ] - дальше углубляться искать covers, (descriptions?) and etc
- [ ] - чтение js-файла, который отвечает за reload_js
  - https://chat.deepseek.com/a/chat/s/acf46b4a-7284-430b-8ebd-a3ade4de4577

---

- [ ] - нужно организовать отправку собранных стилей в проде
- [ ] - нужно добавить nginx в докер, обрубить его на сервере
- [ ] - структура репозитория какбудто просится разделиться на site и system
  - скрипты поместить в site
  - docker у каждого приложения свой
  - owwo-deploy можно вынести в собственный репозиторий. тамже прописать и настройки nginx

- [x] - tsc
- [x] - move static folder out of src
- [x] - static folder to env
- [x] - check required env on startup
- [x] - test docker on local
  - [x] - build docker
  - [x] - env with uploads path to docker
  - [x] - external uploads dir
  - [x] - system docker build
  - [x] - system docker connect via sftp
  - [x] - system docker build with my keys (will be in secrets later)
  - [x] - system docker connect via sftp
  - [x] - secrets to docks
  - [x] - secrets to github actions
  - [x] - compose test
- [x] - refactor system docker
  - [x] - connect only by key
  - [x] - connect via root (full system available)
  - [x] - connect via effectivnayarabota1 (era1 directory only)
- [ ] - workflows:
    x если в докер будут зашиты приватные ключи (пароль для аутентификации), то как я могу публиковать докер в публичное пространство?
    - в докер зашивается только публичный ключ, поэтому пофиг
  - [x] - release (docker) on merge master
  - [x] - pull docker on hosting on merge master (deploy)
    - 1. - создать ключ для прямого подключения к хосту (с локалки)
    - 2. - создать ключ для подключения через гитхаб экшенс
    - 3. - добавить authorized keys на хост (оба)
    - 4. - удалить изначальный ключ на хосте
    - 5. - прописать компоуз на хосте
    - 6. - прописать .env на хосте
    - 7. - смотри пример в naked science, вроде все достаточно просто
- [ ] - FEAT stage branch; stage subdomain

- [ ] - FEAT cover for md, css and other files; nerd fonts or icons?
- [ ] - FEAT html to iframe
  - [ ] - md or html - optional
  - [ ] - if html - render it in iframe
  - [ ] - может нахуй гельветику спиратить?
- [ ] - FEAT отрисовка страниц-файлов. (extended-page)

- [x] - dont show reserved page
- [x] - dont show resources if it empty
- [x] - dont show reserverd names
- [x] - /effectivnayarabota1/Screenshot%20from%202025-02-18%2021-12-12.png - didnt work
- [x] - 404 if resource not found
- [x] - favicon
- [x] - test page with md and inner images
- [x] - about page
- [x] - rename Text component to Content component
- [x] - rm unused from header

- [x] - show file content on html md css and js and other
- [x] - connect html, css, js into page

- [x] - getCoverByPath - file cover
- [x] - not render image on cart if it not exits or false

- [x] - repository refactor
- [x] - in the start of repository define type of resource and next steps depends on it

- [x] - что делать с пробелами?
- [x] - каждую карточку сделать идентичного размера. изображения ровняются по верхнему краю. рамка
