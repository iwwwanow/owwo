package main

import (
	"html/template"
	"net/http"
)

// Данные для передачи в шаблон
type PageData struct {
	Title   string
	Message string
}

func main() {
	// Обработчик для главной страницы
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Создаем данные для шаблона
		data := PageData{
			Title:   "Мой первый HTTP-сервер на Go",
			Message: "Привет, мир!",
		}

		// Парсим шаблон из строки (можно загружать из файла)
		tmpl := template.Must(template.New("index").Parse(`
			<!DOCTYPE html>
			<html>
			<head>
				<title>{{.Title}}</title>
				<meta charset="UTF-8">
			</head>
			<body>
				<h1>{{.Title}}</h1>
				<p>{{.Message}}</p>
			</body>
			</html>
		`))

		// Выполняем шаблон с нашими данными
		err := tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	// Запускаем сервер на порту 8080
	http.ListenAndServe(":8080", nil)
}
