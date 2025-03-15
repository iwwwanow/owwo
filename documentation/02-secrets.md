## ! private keys must be provided into ssh config

### local dev secrets, uses for pack docker image

1. `./secrets/username` - uses for creation user on system image create
2. `root_id_rsa.pub` - public ssh key for root auth by ssh
3. `id_rsa.pub` - public ssh key for user auth by sftp

### github action secrets, uses for pack docker image

1. `SYSTEM_USERNAME` - uses for system docker sft conntection username
2. `ROOT_KEY_PUB` - public ssh key for root auth by ssh
3. `USER_KEY_PUB` - public ssh key for user auth by sftp
