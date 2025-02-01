![image](https://github.com/user-attachments/assets/3dfd8cff-2bf3-4bd2-9176-c3d6e1b68c79)

# Отчёт: Лабораторная работа №1 <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT-License image"></a>

**Дисциплина:** МДК 13.02

**Учебная группа:** 1ИСП-11-41

**Студент:** Бедин Владислав

**Исследуемая область:** Ubuntu (Linux), Node.js

**Тема работы:** Простая программа на Node.js


## 1. Создание простого сервера 

![1_http_server](https://github.com/user-attachments/assets/1b4df369-9503-4e80-b1fa-6ed304cc7351)


## 2. Создание проекта. Добавление [package.json](core/start-express/package.json) и установка зависимостей

#### Создание проекта

```bash
npm init
```

#### Установка необходимых зависимостей

```bash
npm i -S express hbs morgan winston
```

- **Express:** основной фреймворк, на котором будет написано приложение
- **Hbs:** система визуализации (сокращение Handlebars)
- **Morgan** и **Winston:** библиотеки для логирования приложения

![2_package-json_dependences_views_index-js](https://github.com/user-attachments/assets/ee552d2b-41cc-4524-a87e-b17d45ff4840)


## 3. Простое веб-приложение и финальные представления (views)
 
#### [index.hbs](core/start-express/views/index.hbs) 
Запрос: *http://localhost:8787/?username=Vlad%20Bedin*

![4_index-hbs](https://github.com/user-attachments/assets/72b3c24a-7f52-4e40-a3a4-6abd8b3d1bea)

#### [about.hbs](core/start-express/views/about.hbs)
Запрос: *http://localhost:8787/about*

![5_about-hbs](https://github.com/user-attachments/assets/66a70baa-9c18-46d5-b35a-76bcfd638e7b)

#### [feedback.hbs](core/start-express/views/feedback.hbs)
Запрос: *http://localhost:8787/feedback*

![6_feedback-hbs](https://github.com/user-attachments/assets/2e15b46c-8099-4a6c-bf61-7943e5fb62cc)

#### [news.hbs](core/start-express/views/news.hbs)
Запрос: *http://localhost:8787/news*

![7_news-hbs](https://github.com/user-attachments/assets/e13ab9c9-2739-4825-b2c3-0e072d67de7f)


## 4. Финальный скрипт index.js

![3_index-js_finale](https://github.com/user-attachments/assets/4f211fd1-a2d4-4123-b7bb-1840d4a3713e)


## 5. Лицензия

Этот проект распространяется под лицензией MIT - смотрите файл [LICENSE](LICENSE) для деталей.


## 6. Автор

Бедин Владислав ([MindlessMuse666](https://github.com/MindlessMuse666))
- GitHub: [MindlessMuse666](https://github.com/MindlessMuse666 "Владислав: https://github.com/MindlessMuse666")
- Telegram: [@mindless_muse](t.me/mindless_muse)
- Gmail: [mindlessmuse.666@gmail.com](mindlessmuse.666@gmail.com)
