## ! private keys must be provided into ssh config

### local dev secrets, uses for pack docker image

1. `./secrets/username` - uses for creation user on system image create
2. `root_id_rsa.pub` - public ssh key for root auth by ssh
3. `id_rsa.pub` - public ssh key for user auth by sftp

### github action secrets, uses for pack docker image

1. `vars.SYSTEM_USERNAME_AS_BASE64` - uses for system docker sft conntection username **as base 64**
2. `secrets.ROOT_KEY_PUB_AS_BASE64` - public ssh key for root auth by ssh **as base64**
3. `secrets.USER_KEY_PUB_AS_BASE64` - public ssh key for user auth by sftp **as base64**
