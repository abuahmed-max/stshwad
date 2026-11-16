CREATE TABLE `members` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`user` text NOT NULL,
	`day` text NOT NULL,
	`values` text NOT NULL,
	PRIMARY KEY(`user`, `day`)
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`start` text NOT NULL,
	`owner` text NOT NULL
);
