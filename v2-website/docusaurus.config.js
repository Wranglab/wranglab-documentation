module.exports={
  "title": "Wranglab",
  "tagline": "Dokumentation",
  "url": "https://Wranglab.github.io",
  "baseUrl": "/",
  "organizationName": "Wranglab",
  "cname": 'help.wranglab.com',
  "projectName": "wranglab-documentation",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.wranglab.com",
        "pinned": true
      }
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": "./sidebars.json",
          "routeBasePath": '/',
        },
        "blog": {},
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Wranglab",
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": []
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Wranglab GmbH",
      "logo": {
        "src": "img/favicon.ico"
      }
    }
  }
}