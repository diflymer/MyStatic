## Минимальная кастомная тема MkDocs + GitHub Pages

Ниже — отчёт по выполненному заданию: создана собственная тема (Jinja2), настроена сборка фронтенда (PostCSS), добавлена валидация и минификация HTML и автоматический деплой на GitHub Pages.

### Что реализовано
- **Пользовательская тема**: `theme/main.html`
  - Кастомные `header`/`footer` и навигация на основе `nav`.
  - Стилизованный hero для главной страницы через `page.is_homepage`.
  - Подключение ассетов через `{{ 'assets/...' | url }}`.
- **Ассеты**: `docs/assets/styles.css`, `docs/assets/app.js` (минимальные стили и JS).
- **Метаданные**: в `<head>` выводятся `site_description` и `site_author` из `mkdocs.yml`.
- **Конфигурация MkDocs**: `mkdocs.yml` переведён на `theme: { name: null, custom_dir: theme }`, добавлены `site_name`, `site_description`, `site_author`, `nav`.
- **PostCSS**: `postcss.config.cjs` с `autoprefixer` и `cssnano` для префиксов и минификации CSS.
- **Валидация HTML**: `.htmlvalidate.json` (рекомендованные правила; `valid-id` выключен из‑за автогенерируемых якорей от MkDocs).
- **Минификация HTML**: `html-minifier-terser`, запускается через Node‑скрипт `scripts/minify-html.js`.
- **CI/CD**: `.github/workflows/deploy.yml` — сборка (Node+Python), валидация, минификация, деплой на Pages.


