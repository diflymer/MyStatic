## Минимальная кастомная тема MkDocs + GitHub Pages

- **Тема**: `theme/main.html` (header, footer, навигация, стилизация главной)
- **Ассеты**: `docs/assets/styles.css`, `docs/assets/app.js`
- **Метаданные**: в `mkdocs.yml` (`site_name`, `site_description`, `site_author`)
- **PostCSS**: `postcss.config.cjs` (autoprefixер, cssnano)
- **Валидация HTML**: `.htmlvalidate.json`
- **Минификация HTML**: `html-minifier-terser`
- **CI/CD**: `.github/workflows/deploy.yml` — сборка и деплой на Pages

### Локально
```bash
pip install mkdocs mkdocs-material
npm install
npm run build
mkdocs serve
```

### GitHub Pages
- В Settings → Pages выберите Deployment: GitHub Actions.
- Пушьте в ветку `main`; после Actions сайт будет доступен по ссылке Pages.
