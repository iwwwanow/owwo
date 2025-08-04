package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

const (
	PublicDir = "/var/www/owwo/shared"
)

const (
	FileTypeImage = "image"
	FileTypeText  = "text"
	FileTypeDir   = "directory"
	FileTypeOther = "other"
)

type ResourceInfo struct {
	Path string
	Type string
}

type PageData struct {
	Title     string
	Message   string
	Resources []ResourceInfo
}

func getFileType(filename string, info os.FileInfo) string {
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

func StaticHandler(staticDir string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(staticDir, filepath.Clean(r.URL.Path))

		if _, err := os.Stat(path); os.IsNotExist(err) {
			http.NotFound(w, r)
			return
		}

		switch filepath.Ext(path) {
		case ".css":
			w.Header().Set("Content-Type", "text/css")
		case ".js":
			w.Header().Set("Content-Type", "application/javascript")
		case ".png":
			w.Header().Set("Content-Type", "image/png")
		case ".jpg", ".jpeg":
			w.Header().Set("Content-Type", "image/jpeg")
		case ".svg":
			w.Header().Set("Content-Type", "image/svg+xml")
		}

		http.ServeFile(w, r, path)
	}
}

func main() {

	portStr := os.Getenv("PORT")

	if portStr == "" {
		portStr = "3000"
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		fmt.Println("error portStr formatting:", err)
		return
	}

	tmpl := template.Must(template.ParseFiles(
		"templates/index.html",
		"templates/pages/resource.page.html",

		"templates/fragments/head.fragment.html",
		"templates/fragments/header.fragment.html",
		"templates/fragments/content.fragment.html",
		"templates/fragments/footer.fragment.html",

		"templates/components/resource-card.component.html",
		// TODO
		// "templates/fragments/resource-info.fragment.html",
		// "templates/fragments/resource-group.fragment.html",
	))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		resourcePath := strings.TrimPrefix(r.URL.Path, "/")
		fmt.Printf("resource path %s\n", resourcePath)

		fullPath := filepath.Join(PublicDir, resourcePath)

		var resources []ResourceInfo

		if fileInfo, err := os.Stat(fullPath); err == nil && fileInfo.IsDir() {
			if files, err := os.ReadDir(fullPath); err == nil {
				for _, file := range files {
					info, _ := file.Info()
					resource := ResourceInfo{
						Path: filepath.Join(resourcePath, file.Name()),
					}
					if file.IsDir() {
						resource.Type = FileTypeDir
					} else {
						resource.Type = getFileType(file.Name(), info)
					}
					resources = append(resources, resource)
				}
			}
		}

		fmt.Printf("Requested path: %s\n", resourcePath)
		fmt.Printf("Full path: %s\n", fullPath)
		fmt.Println("Directory contents:", resources)

		data := PageData{
			Title:     "iwwwanowwwwwww",
			Message:   "message",
			Resources: resources,
		}

		err := tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	staticDir := "static"
	http.Handle("/static/", http.StripPrefix("/static/", StaticHandler(staticDir)))

	http.Handle("/public/", http.StripPrefix("/public/", StaticHandler(PublicDir)))

	address := fmt.Sprintf("http://localhost:%d", port)
	fmt.Printf("server listening on %s\n", address)

	err = http.ListenAndServe(":"+strconv.Itoa(port), nil)
	if err != nil {
		fmt.Println("error with launch:", err)
	}
}
