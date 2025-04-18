FROM oven/bun:1.2.3 AS builder

ENV NODE_ENV=production

WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/kirill-ivanovvv/owwo
LABEL org.opencontainers.image.description="Publication platform"
LABEL org.opencontainers.image.licenses="BSD 3-Clause License"

COPY package.json bun.lock tsconfig.json ./
COPY scripts ./scripts
COPY site ./site
COPY public ./public

RUN bun install \
    && bun site:build

FROM oven/bun:1.2.3

ENV NODE_ENV=production
# TODO принимает ли эта переменная входящие данные при компоузе?
ENV UPLOADS_PATH=/home/uploads

WORKDIR /app

COPY --from=builder /app/site/dist/ ./site
COPY --from=builder /app/node_modules/jsdom/lib/jsdom/living/xhr/xhr-sync-worker.js /app/node_modules/jsdom/lib/jsdom/living/xhr/xhr-sync-worker.js
COPY --from=builder /app/public ./public

CMD ["bun", "/app/site/index.js"]
