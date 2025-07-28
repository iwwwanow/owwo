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
		portStr = "3000"
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		fmt.Println("error portStr formatting:", err)
		return
	}

	tmpl, err := template.ParseFiles("src/templates/index.html")
	if err != nil {
		fmt.Printf("Error template loading: %v\n", err)
		return
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := PageData{
			Title:   "title",
			Message: "message",
		}

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
		fmt.Println("error with launch:", err)
	}
}
