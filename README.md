## Скачать 

```bash
git clone https://github.com/bauarm/gulp4_template4frontend.git
```
____
#### Проверка на наличие gulp-cli
```bash
npm ls -g --depth=0 
```
##### Если gulp-cli не установлен то установка глобально
```bash
npm i gulp-cli -g 
```
#### Проверка на наличие gulp
```bash
npm gulp -v
```
##### Если gulp не установлен то установка локально в папку с проектом
```bash
npm i gulp 
```
## Привязать проект к рабочему репозиторию
```bash
git remote set-url origin git@git_server.com:user_name/repository_name.git
``` 
____

## Инициализация проекта
```bash
npm i -y 
``` 
____

## Изменить режим разработки
global.isDev и global.isProd это переменные которые отвечают за управление режимами разработки, они вынесены в global ноды для модульности и изменяются в gulpfile.ls
____

## Запустить сервер разработки без библиотек
```bash
gulp
```
#### Запуск сервера разработки через npm script с компиляцией библиотек
```bash
npm run gulp-start
```
#### npm скрипт
```bash
gulp css-libs && gulp js-libs && gulp
```
____

![Alt text](https://i.imgur.com/1HLiI8V.png "Режим наблюдения с компиляцией всех библиотек")
*Режим наблюдения с компиляцией всех библиотек*
____

## Работа с отдельными тасками

### Компиляция различных CSS библиотек

```bash
gulp css-libs
```
*Список подключенных в проект стилевых библиотек находится в файле __csslibs.js__ в массиве модуля __cssLibs__*
____

### Компиляция различных JS библиотек

```bash
gulp js-libs
```
*Список подключенных для проекта JS библиотек находится в файле __jslibs.js__ в массиве модуля __jsLibs__*
____

### Подключение jquery в сборщик webpack

В файл  *dev/js/entry.js*  вставить запись

```js
import $ from "jquery";
```
____

*Список подключенных в проект стилевых библиотек находится в файле __csslibs.js__ в массиве модуля __cssLibs__*



#### Полная очистка папки со сборкой (dist)

```bash
gulp clean
```

#### Проверка или самостоятельный запуск сборщика Pug для верстки

```bash
gulp pug
```
#### Проверка или самостоятельный запуск сборщика SASS/SCSS для стилей

```bash
gulp sass
```
#### Проверка или самостоятельный запуск сборщика WEBPACK для скриптов

```bash
gulp webpack
```
