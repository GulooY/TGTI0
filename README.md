# TGTI 桌游人格测试

TGTI 是一个纯静态网页应用，用于测试桌游玩家人格类型。项目不依赖后端和构建工具，可直接通过 GitHub Pages 部署。

当前版本包含：

- 6 道分流题 + 30 道主测试题
- 27 种桌游人格结果
- 主人格、副人格、风味标签
- 维度占比条形统计
- 人格小传长文案
- 右上角人格类型总览弹窗
- 移动端和桌面端自适应布局

## 本地预览

直接打开 `index.html` 即可预览：

```text
index.html
```

也可以用任意静态服务器预览，例如 VS Code Live Server。

## GitHub Pages 部署

仓库已包含 GitHub Pages 工作流：

```text
.github/workflows/pages.yml
```

部署步骤：

1. 将本项目推送到 GitHub 仓库。
2. 在仓库设置中进入 `Settings -> Pages`。
3. 将 `Build and deployment` 的来源设置为 `GitHub Actions`。
4. 推送到 `main` 分支后，工作流会自动部署。

## 文件结构

```text
.
├── index.html
├── styles.css
├── app.js
├── .nojekyll
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

## 内容维护

- 测试题目、评分规则、人格类型数据都在 `app.js`。
- 页面结构在 `index.html`。
- 视觉样式在 `styles.css`。
