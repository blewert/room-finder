import { relations } from "drizzle-orm/relations";
import { buildings, rooms, roomTypes, infoPoints, pageDecks, pages } from "./schema";

export const roomsRelations = relations(rooms, ({one, many}) => ({
	building: one(buildings, {
		fields: [rooms.buildingId],
		references: [buildings.id]
	}),
	roomType: one(roomTypes, {
		fields: [rooms.roomType],
		references: [roomTypes.id]
	}),
	pageDecks: many(pageDecks),
}));

export const buildingsRelations = relations(buildings, ({many}) => ({
	rooms: many(rooms),
	infoPoints: many(infoPoints),
}));

export const roomTypesRelations = relations(roomTypes, ({many}) => ({
	rooms: many(rooms),
}));

export const infoPointsRelations = relations(infoPoints, ({one, many}) => ({
	building: one(buildings, {
		fields: [infoPoints.id],
		references: [buildings.id]
	}),
	pageDecks: many(pageDecks),
}));

export const pagesRelations = relations(pages, ({one}) => ({
	pageDeck: one(pageDecks, {
		fields: [pages.pageDeckId],
		references: [pageDecks.id]
	}),
}));

export const pageDecksRelations = relations(pageDecks, ({one, many}) => ({
	pages: many(pages),
	room: one(rooms, {
		fields: [pageDecks.targetRoomId],
		references: [rooms.id]
	}),
	infoPoint: one(infoPoints, {
		fields: [pageDecks.infoPointId],
		references: [infoPoints.id]
	}),
}));