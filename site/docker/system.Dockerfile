FROM alpine:latest

COPY secrets/password /tmp/password
COPY secrets/username /tmp/username

ARG UPLOADS_PATH=/home/uploads
ENV UPLOADS_PATH=$UPLOADS_PATH

RUN \
  apk update && \
  apk add --no-cache openssh && \
  mkdir /var/run/sshd && \
  addgroup sftpusers

RUN \
  USERNAME=$(cat /tmp/username) && \
  PASS=$(cat /tmp/password) && \
  adduser -D -s /sbin/nologin -G sftpusers $USERNAME && \
  echo $USERNAME:$PASS | chpasswd && \
  mkdir -p $UPLOADS_PATH/$USERNAME &&\
  chown root:root $UPLOADS_PATH &&\
  chmod 755 $UPLOADS_PATH && \
  chown $USERNAME:sftpusers $UPLOADS_PATH/$USERNAME

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
