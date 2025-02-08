FROM alpine:latest

ARG UPLOADS_PATH=/home/uploads
ENV UPLOADS_PATH=$UPLOADS_PATH

RUN apk update &&\
    apk add --no-cache openssh

RUN mkdir /var/run/sshd

RUN addgroup sftpusers

RUN adduser -D -s /sbin/nologin -G sftpusers appuser

RUN echo "appuser:secret" | chpasswd

RUN mkdir -p $UPLOADS_PATH/appuser &&\
    chown root:root $UPLOADS_PATH &&\
    chmod 755 $UPLOADS_PATH

RUN chown appuser:sftpusers $UPLOADS_PATH/appuser

RUN sed -i 's/#Port 22/Port 22/' /etc/ssh/sshd_config &&\
    sed -i 's/#PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config &&\
    echo "" >> /etc/ssh/sshd_config &&\
    echo "Subsystem sftp internal-sftp" >> /etc/ssh/sshd_config &&\
    echo "Match Group sftpusers" >> /etc/ssh/sshd_config &&\
    echo "    ChrootDirectory $UPLOADS_PATH" >> /etc/ssh/sshd_config &&\
    echo "    ForceCommand internal-sftp" >> /etc/ssh/sshd_config &&\
    echo "    X11Forwarding no" >> /etc/ssh/sshd_config &&\
    echo "    AllowTCPForwarding no" >> /etc/ssh/sshd_config

RUN ssh-keygen -A

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
