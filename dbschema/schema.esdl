module default {
	type User {
		required username: str;
		required password: str;
		multi link pages := .<authors[is Page]
	}
	type Page {
		required multi authors: User;
		state: str {
			default := 'default'
			};
		cover: str;
		title: str {
			default := 'title'
			};
		desc: str {
			default := 'desc'
			};
		}
};
