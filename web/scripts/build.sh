source /web/constants/config.env

gcc \
	-static $SRC \
	-o $OUT \
	-lfcgi
