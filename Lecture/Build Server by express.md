# Build Server by express

## express 서버 구축하기

> 공식문서: https://expressjs.com/

```json
// pakage.json
  "scripts": {
    "dev": "nodemon --exec babel-node src/server.js"
  },
```

## Application

> https://expressjs.com/en/5x/api.html#app

```js
// server.js
import express from 'express';
const app = express();
```

### methods

#### Listen

```js
// server.js
const PORT = 4000;
const handleListening = () => {
  console.log(`server is listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
```

#### Get

- `app.get(path, callback)`
  - 콜백 함수를 사용하여 지정된 경로로 HTTP GET 요청을 보낸다.

```
> http://localhost:4000/

Cannot GET /
```

```js
// server.js
const handleHome = (req, res) => {
  res.send('This is home page');
  res.end();
};
app.get('/', handleHome);
```

### [Request](https://expressjs.com/en/5x/api.html#req)

### [Response](https://expressjs.com/en/5x/api.html#res)

- send: HTTP 응답을 보내는 응답 메서드

### morgan

logging middleware
