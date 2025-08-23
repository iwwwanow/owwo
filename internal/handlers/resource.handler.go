package handlers

import (
	"html/template"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/iwwwanow/owwo/internal/configs"
	"github.com/iwwwanow/owwo/internal/interfaces"
	"github.com/iwwwanow/owwo/internal/utils"
)

func ResouceHandler(tmpl *template.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		resourcePath := strings.TrimPrefix(r.URL.Path, "/")
		fullPath := filepath.Join(configs.PublicDir, resourcePath)

		var resource interfaces.ResourceInfo
		var resources []interfaces.ResourceInfo

		fileInfo, err := os.Stat(fullPath)
		if err != nil {
			http.NotFound(w, r)
			return
		}

		if fileInfo.IsDir() {
			resource.Type = utils.FileTypeDir
			if files, err := os.ReadDir(fullPath); err == nil {
				for _, file := range files {
					info, _ := file.Info()
					resource := interfaces.ResourceInfo{
						Path: filepath.Join(resourcePath, file.Name()),
						Name: file.Name(),
					}
					if file.IsDir() {
						resource.Type = utils.FileTypeDir
					} else {
						resource.Type = utils.GetFileType(file.Name(), info)
						if resource.Type == utils.FileTypeText || resource.Type == utils.FileTypeOther {
							content, err := os.ReadFile(filepath.Join(fullPath, file.Name()))
							if err == nil {
								preview := string(content)
								if len(preview) > configs.PreviewMaxLength {
									preview = preview[:configs.PreviewMaxLength] + "..."
								}
								resource.Preview = preview
							}
						}
					}
					resources = append(resources, resource)
				}
			}
		} else {
			resource.Path = resourcePath
			resource.Name = fileInfo.Name()
			resource.Type = utils.GetFileType(fileInfo.Name(), fileInfo)
			content, err := os.ReadFile(fullPath)
			if err == nil {
				resource.Content = string(content)
			}
		}

		data := interfaces.PageData{
			// TODO base title on domainname
			Title:     "iwwwanowwwwwww",
			Message:   "message",
			Resource:  resource,
			Resources: resources,
		}

		err = tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}
