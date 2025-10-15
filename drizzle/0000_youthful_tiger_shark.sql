-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations

CREATE TABLE `buildings` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text(32),
	`slug` text(16)
);
--> statement-breakpoint
CREATE TABLE `room_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text(16),
	`description` text(64)
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text(32) NOT NULL,
	`code` text(16),
	`building_id` integer,
	`room_type` integer,
	FOREIGN KEY (`room_type`) REFERENCES `room_types`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`building_id`) REFERENCES `buildings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `info_points` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text,
	`building_id` integer,
	FOREIGN KEY (`id`) REFERENCES `buildings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `page_decks` (
	`id` integer PRIMARY KEY,
	`name` text(32)
);
--> statement-breakpoint
CREATE TABLE `pages` (
	`id` integer PRIMARY KEY,
	`step_title` text,
	`step_description` text,
	`order` integer,
	`page_deck_id` integer,
	FOREIGN KEY (`id`) REFERENCES `page_decks`(`id`) ON UPDATE no action ON DELETE no action
);

