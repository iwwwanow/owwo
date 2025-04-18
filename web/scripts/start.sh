source /web/constants/config.env

spawn-fcgi \
	-p $PORT \
	-n $OUT
