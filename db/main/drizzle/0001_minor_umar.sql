ALTER TABLE `accounts` RENAME TO `blablabla`;--> statement-breakpoint
DROP INDEX IF EXISTS `accounts_username_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `blablabla_username_unique` ON `blablabla` (`username`);