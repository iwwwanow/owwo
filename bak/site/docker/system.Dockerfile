FROM alpine:latest

RUN apk add --no-cache openssh shadow \
    && ssh-keygen -A \
    && mkdir -p /var/run/sshd

COPY secrets/id_rsa.pub /tmp/id_rsa.pub
COPY secrets/username /tmp/username

COPY secrets/root_id_rsa.pub /tmp/root_id_rsa.pub

ARG UPLOADS_PATH=/home/uploads
ENV UPLOADS_PATH=$UPLOADS_PATH

RUN addgroup sftpusers \
    && USERNAME=$(cat /tmp/username) \
    && echo "Creating user: $USERNAME" \
    && adduser -D -h /home/$USERNAME -s /bin/ash -G sftpusers $USERNAME \
    && mkdir -p $UPLOADS_PATH \
    && chown root:root $UPLOADS_PATH \
    && chmod 755 $UPLOADS_PATH \
    && mkdir -p $UPLOADS_PATH/$USERNAME \
    && chown $USERNAME:sftpusers $UPLOADS_PATH/$USERNAME \
    && mkdir -p /home/$USERNAME/.ssh \
    && chmod 700 /home/$USERNAME/.ssh \
    && cat /tmp/id_rsa.pub >> /home/$USERNAME/.ssh/authorized_keys \
    && chmod 600 /home/$USERNAME/.ssh/authorized_keys \
    && chown -R $USERNAME:sftpusers /home/$USERNAME/.ssh \
    && sed -i "/^$USERNAME:/s/:[^:]*/::/" /etc/shadow  # Разблокировка пользователя

RUN mkdir -p /root/.ssh \
    && chmod 700 /root/.ssh \
    && cat /tmp/root_id_rsa.pub >> /root/.ssh/authorized_keys \
    && chmod 600 /root/.ssh/authorized_keys

RUN sed -i \
    -e 's/#Port 22/Port 22/' \
    -e 's/#PermitRootLogin.*/PermitRootLogin prohibit-password/' \
    -e 's/#PasswordAuthentication yes/PasswordAuthentication no/' \
    /etc/ssh/sshd_config \
    && echo "" >> /etc/ssh/sshd_config \
    && echo "Subsystem sftp internal-sftp" >> /etc/ssh/sshd_config \
    && echo "Match Group sftpusers" >> /etc/ssh/sshd_config \
    && echo "    ChrootDirectory $UPLOADS_PATH" >> /etc/ssh/sshd_config \
    && echo "    ForceCommand internal-sftp" >> /etc/ssh/sshd_config \
    && echo "    X11Forwarding no" >> /etc/ssh/sshd_config \
    && echo "    AllowTCPForwarding no" >> /etc/ssh/sshd_config

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D", "-e"]
