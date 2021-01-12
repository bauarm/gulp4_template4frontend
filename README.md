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
npm init -y 
``` 
____

## Запустить сервер разработки
```bash
gulp
```
____

## Работа с отдельными тасками

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
gulp WEBPACK
```