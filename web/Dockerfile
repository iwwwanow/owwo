FROM alpine:latest AS builder

RUN apk add --no-cache \
	build-base \
	fcgi-dev

WORKDIR /web
COPY hello_fcgi.c .
RUN gcc -static hello_fcgi.c -o hello_fcgi -lfcgi

FROM alpine:latest
RUN apk add --no-cache spawn-fcgi
COPY --from=builder /web/hello_fcgi /web/

EXPOSE 9000
CMD ["spawn-fcgi", "-p", "9000", "-n", "/web/hello_fcgi"]
