# exciting.starbucks

> Exciting Starbucks Web App

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 20180625 추가

- husky + lint-staged + prettier 추가

  > 코드 커밋할 때 prettier 가 css, js, json 을 .prettierrc.json 규격에 맞춰서 변환 한 후에 커밋이 됨

- `npm start` 할 때 포트번호는 8081 로 변경
  > Elastic Beanstalk 의 nginx 기본 설정(upstream)포트가 8081 로 설정값이 기본으로 변경됨
