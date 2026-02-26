# 手语e站项目

## 📌 项目简介

手语e站是一个面向听障人士和手语学习者的一站式前端展示站点。项目通过 HTML、CSS 和 JavaScript 构建，包含首页、课程、手语词典、学习社区和关于我们等多个页面，旨在提供手语学习、交流和工具展示。

设计灵感来源于校园师生对无障碍沟通的需求，突出 AI 手语翻译、课程体系和社区互动。

## 🔧 技术栈

- **HTML5**：页面结构
- **CSS3**：样式与响应式
- **JavaScript**：交互逻辑
- **纯前端**，无后端依赖（图片/视频放在 `images`、`shipin` 文件夹）

## 📁 文件结构

```
xiangmu/
├── about.html          # 关于我们页面
├── about.css
├── community.html      # 学习社区页面
├── courses.html        # 课程页面
├── courses.css
├── courses.js          # 课程交互脚本
├── dictionary.html     # 手语词典
├── dictionary.css
├── dictionary.js       # 词典搜索与视频控制
├── forum.css
├── forum.js            # 学习社区标签切换和滑动效果
├── home.css
├── index.html          # 主页
├── slider.css
├── slider.js           # 轮播图脚本
├── styles.css          # 全局样式
├── backend/            # 存放校徽图片等资源
├── images/             # 静态图片
├── shipin/             # 视频文件
└── README.md           # 项目说明（当前文档）
```

## 🚀 使用说明

1. 直接在支持静态网页的环境（如本地浏览器、静态服务器）打开 `index.html`。
2. 页面导航链接可跳转至其他模块：课程、词典、社区、关于我们。
3. 各个页面均使用 `styles.css` 作为基础样式，配合各自特定的 CSS 文件。
4. JS 脚本主要负责前端交互，如筛选、视频控制、标签切换、轮播等。

> ⭐ 所有功能目前为前端静态演示版，交互逻辑中有 `console.log` 占位，可根据需要接入后端或扩展功能。

## 🛠 开发说明

- **CSS**：采用响应式设计（`@media`）保证在移动端也能良好展示。
- **JavaScript**：使用 `DOMContentLoaded` 监听器初始化交互。标签和按钮都有事件处理。
- **扩展**：可在 `dictionary.js` 中添加实际搜索逻辑，或在课程页面中接入真实课程数据。

## 📣 贡献指南

欢迎提出建议或直接修改源码：

1. Fork 仓库并在本地修改
2. 提交 Pull Request 并描述更改内容
3. 若需增加新页面或脚本，请保持命名规范并更新 README

---

感谢你使用并关注手语e站项目！我们希望这个前端示例能为手语学习者和开发者带来灵感。
