FROM oven/bun:latest

ENV NODE_ENV=production

RUN bun site:build

WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/kirill-ivanovvv/owwo
LABEL org.opencontainers.image.description="Publicaton platform"
LABEL org.opencontainers.image.licenses="BSD 3-Clause License"

COPY /dist /app

CMD ["bun", "index.js"]
