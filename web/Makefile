CC = gcc

SRCS = $(shell find $(SRC) -name "*.c")
TARGET = $(OUT)

all: $(TARGET)

$(TARGET): $(SRCS)
	$(CC) $(SRCS) -o $(TARGET) -lfcgi

clean:
	rm -f $(TARGET)
