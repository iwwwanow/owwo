if [ -n "$CONFIG_PATH" ]; then
	source "$CONFIG_PATH"
else 
	source web/constants/local.env
fi

pkill -f $OUT || true

sleep 0.2

spawn-fcgi \
	-p $PORT \
	-n $OUT &

echo "startup fcgi"
