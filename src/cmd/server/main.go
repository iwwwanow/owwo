package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
	"strconv"
)

type PageData struct {
	Title   string
	Message string
}

func main() {

	portStr := os.Getenv("PORT")

	if portStr == "" {
		portStr = "3000" // Значение по умолчанию в виде строки
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		fmt.Println("Ошибка преобразования порта:", err)
		return
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := PageData{
			Title:   "Мой первый HTTP-сервер на Go",
			Message: "Привет, мир!",
		}

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

		err := tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	address := fmt.Sprintf("http://localhost:%d", port)
	fmt.Printf("server listening on %s\n", address)

	err = http.ListenAndServe(":"+strconv.Itoa(port), nil)
	if err != nil {
		fmt.Println("Ошибка при запуске сервера:", err)
	}
}
