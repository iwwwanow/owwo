if [ -n "$CONFIG_PATH" ]; then
	source "$CONFIG_PATH"
else 
	source web/constants/local.env
fi

export OUT=$OUT
export SRC=$SRC

make -f "$MAKEFILE_PATH" && \
echo "build successful"
