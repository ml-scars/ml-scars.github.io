# Vue 2.0 template
---

- 網址:
- 主機:
- repo:

- 專案:
- 創意:
- 設計:
- 前端:
- 後端:

---

## NPM scripts

- `npm run d` : Develop mode
- `npm run p` : Production

---

## Gulp Tasks
- `fontmin`  
Extract chars from `/src/assets/font-src/{fontname}.tff`  
based on chars in `/src/assets/font-src/{fontname}.txt`  
to `/src/assets/font/{fontname}.ttf`

- `imagemin`  
Run loosy imagemin from `/src/assets/img-src` to `/src/assets/img`

預設不會安裝以上相關套件，有需要用的時候再裝

- `webpack-build`  
Trivial

- `diff`  
Diff files from `/dist` to `/dist_remote` (for faster FTP syncing)

- `ftp`  
Automated FTP syncing reading configs: `ftp.coffee`, `ftp.credentials.json`

- `p`  
Run sequence `webpack-build`, `diff`

- `pp`  
Run sequence `webpack-build`, `diff`, `ftp`

- `webpack-dev-server` (default)  
Run webpack-dev-server at `localhost:3000`




## Codeing Style
- see [.eslintrc](.eslintrc)
- Vue Component Declaration Order
  - el
  - components
  - props
  - data
  - computed
  - methods
  - watch
  - life cycle hooks (in ordered)
  - others (filters, )
