ALTER TABLE `blablabla` RENAME TO `accounts`;--> statement-breakpoint
DROP INDEX IF EXISTS `blablabla_username_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_username_unique` ON `accounts` (`username`);