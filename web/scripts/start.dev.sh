source /web/constants/config.env

pkill -f "/web/bin/app.fcgi" || true

sleep 0.2

spawn-fcgi \
	-p $PORT \
	-n $OUT &

echo "startup fcgi"
