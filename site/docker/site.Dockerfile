FROM oven/bun:1.2.1 AS builder

ENV NODE_ENV=production

WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/kirill-ivanovvv/owwo
LABEL org.opencontainers.image.description="Publication platform"
LABEL org.opencontainers.image.licenses="BSD 3-Clause License"

COPY package.json bun.lock tsconfig.json ./
COPY scripts ./scripts
COPY site ./site

RUN bun install \
    && bun site:build

FROM oven/bun:1.2.1

ENV NODE_ENV=production
ENV UPLOADS_PATH=production

WORKDIR /app

COPY --from=builder /app/site/dist/bundle ./site

CMD ["bun", "/app/site/bundle"]
