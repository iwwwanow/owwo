module default {
	type User {
		required username: str;
		required password: str;
	}
	type Page {
		multi authors: User;
		}
};
