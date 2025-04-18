FROM alpine:latest AS builder

RUN apk add --no-cache \
	build-base \
	fcgi-dev

WORKDIR /web
COPY hello_fcgi.c /web/
COPY constants/ /web/constants/
COPY scripts/ /web/scripts/
RUN /web/scripts/build.sh

FROM alpine:latest
RUN apk add --no-cache spawn-fcgi
COPY --from=builder /web/hello_fcgi /web/
COPY --from=builder /web/constants/ /web/constants/
COPY --from=builder /web/scripts/start.sh /web/scripts/

EXPOSE 9000
CMD ["sh","/web/scripts/start.sh"]
