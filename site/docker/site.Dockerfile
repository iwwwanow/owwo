# TODO latest version with bug on bild
FROM oven/bun:1.2.1 AS builder

ENV NODE_ENV=production

WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/kirill-ivanovvv/owwo
LABEL org.opencontainers.image.description="Publicaton platform"
LABEL org.opencontainers.image.licenses="BSD 3-Clause License"

COPY . .

RUN bun install
RUN bun site:build
RUN mv /app/site/dist /tmp
RUN rm -rf /app/site
RUN mv /tmp/dist /app/site
RUN rm -rf /tmp

CMD ["bun", "/app/site/index.js"]
