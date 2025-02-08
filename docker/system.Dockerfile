FROM alpine:latest

RUN apk add --no-cache openssh-server

RUN mkdir /var/run/sshd

RUN addgroup sftpusers

RUN adduser -D -s /sbin/nologin -G sftpusers appuser

RUN echo "appuser:secret" | chpasswd

RUN mkdir -p /home/appuser/upload && chown root:root /home/appuser && chmod 755 /home/appuser

RUN chown appuser:sftpusers /home/appuser/upload

RUN sed -i 's/#Port 22/Port 22/' /etc/ssh/sshd_config && sed -i 's/#PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config && echo "" >> /etc/ssh/sshd_config && echo "Subsystem sftp internal-sftp" >> /etc/ssh/sshd_config && echo "Match Group sftpusers" >> /etc/ssh/sshd_config && echo "    ChrootDirectory /home/%u" >> /etc/ssh/sshd_config && echo "    ForceCommand internal-sftp" >> /etc/ssh/sshd_config && echo "    X11Forwarding no" >> /etc/ssh/sshd_config && echo "    AllowTCPForwarding no" >> /etc/ssh/sshd_config

RUN ssh-keygen -A

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
