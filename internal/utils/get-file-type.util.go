package utils

import (
	"os"
	"path/filepath"
	"strings"
)

const (
	FileTypeImage = "image"
	FileTypeText  = "text"
	FileTypeDir   = "directory"
	FileTypeOther = "other"
)

func GetFileType(filename string, info os.FileInfo) string {
	ext := strings.ToLower(filepath.Ext(filename))

	switch ext {
	case ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp":
		return FileTypeImage
	case ".txt", ".md", ".csv", ".json", ".xml", ".html", ".css", ".js":
		return FileTypeText
	default:
		return FileTypeOther
	}
}
