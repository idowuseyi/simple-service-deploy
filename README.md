# Simple Server API - HNG

## Overview
A simple Express API deployed with Nginx reverse proxy.

## Local Setup

```bash
npm install
node index.js
```

## Runs on:

http://localhost:5000

## API's

GET /

```json

{ "message": "API is running" }

```

GET /health

```json

{ "message": "healthy" }

```

GET /me

```json

{
  "name": "Oluwaseyi Idowu",
  "email": "idowuseyi22@gmail.com",
  "github": "https://github.com/idowuseyi"
}

```

## Live URL
https://devops-one.theraptly.com/


---

## Improvements / Future Scaling

- Add rate limiting in Nginx
- Add structured logging (Winston)
- Add health monitoring endpoint expansion
- Add CI/CD (GitHub Actions deploy)

---
