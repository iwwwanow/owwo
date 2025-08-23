package utils

import (
	"html/template"
)

func GetTemplateInstance() *template.Template {
	tmpl := template.Must(template.ParseFiles(
		"templates/index.html",
		"templates/pages/resource.page.html",

		"templates/fragments/head.fragment.html",
		"templates/fragments/header.fragment.html",
		"templates/fragments/content.fragment.html",
		"templates/fragments/footer.fragment.html",
		"templates/fragments/resource.fragment.html",

		"templates/components/resource-card.component.html",
		"templates/components/resource-content.component.html",
		// TODO
		// "templates/fragments/resource-info.fragment.html",
		// "templates/fragments/resource-group.fragment.html",
	))

	return tmpl
}
