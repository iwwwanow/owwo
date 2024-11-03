CREATE TABLE `acconts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `acconts_username_unique` ON `acconts` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `username_idx` ON `acconts` (`username`);