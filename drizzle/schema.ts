import { sqliteTable, integer, foreignKey, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const buildings = sqliteTable("buildings", {
	id: integer().primaryKey({ autoIncrement: true }),
	name: text({ length: 32 }),
	slug: text({ length: 16 }),
});

export const roomTypes = sqliteTable("room_types", {
	id: integer().primaryKey({ autoIncrement: true }),
	name: text({ length: 16 }),
	description: text({ length: 64 }),
});

export const rooms = sqliteTable("rooms", {
	id: integer().primaryKey({ autoIncrement: true }),
	name: text({ length: 32 }).notNull(),
	code: text({ length: 16 }),
	buildingId: integer("building_id").references(() => buildings.id),
	roomType: integer("room_type").references(() => roomTypes.id),
});

export const infoPoints = sqliteTable("info_points", {
	id: integer().primaryKey({ autoIncrement: true }).references(() => buildings.id),
	name: text(),
	buildingId: integer("building_id"),
	slug: text(),
});

export const pages = sqliteTable("pages", {
	id: integer().primaryKey(),
	stepTitle: text("step_title"),
	stepDescription: text("step_description"),
	order: integer(),
	pageDeckId: integer("page_deck_id").references(() => pageDecks.id),
});

export const pageDecks = sqliteTable("page_decks", {
	id: integer().primaryKey(),
	name: text({ length: 32 }),
	infoPointId: integer("info_point_id").references(() => infoPoints.id),
	targetRoomId: integer("target_room_id").references(() => rooms.id),
	slug: text(),
});

