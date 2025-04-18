FROM alpine:latest AS builder

ARG SRC=main.c
ARG OUT=bin/app.fcgi

RUN apk add --no-cache \
	build-base \
	fcgi-dev

WORKDIR /web
COPY ${SRC} /web/
COPY constants/ /web/constants/
COPY scripts/ /web/scripts/

RUN mkdir bin
RUN /web/scripts/build.sh

FROM alpine:latest
RUN apk add --no-cache spawn-fcgi
COPY --from=builder /web/${OUT} /web/
COPY --from=builder /web/constants/ /web/constants/
COPY --from=builder /web/scripts/start.sh /web/scripts/

EXPOSE 9000
CMD ["sh","/web/scripts/start.sh"]
