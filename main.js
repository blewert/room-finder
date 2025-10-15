const { drizzle } = require('drizzle-orm/libsql');
const { pageDecks, pages, buildings, infoPoints, rooms, roomTypes } = require("./drizzle/schema.ts");
const { eq } = require('drizzle-orm');
const db = drizzle("file:./local.db");

const fs = require("fs");

async function getDeckPages(deck)
{
    const deckPages = await db.select().from(pages).where(eq(pages.pageDeckId, deck.id)).orderBy(pages.order);

    return deckPages;
}

async function getInfoPointAllDecks(infoPoint)
{
    let infoPointDecks = await db.select().from(pageDecks).where(eq(pageDecks.infoPointId, infoPoint.id));

    return await Promise.all(infoPointDecks.map(async (x) => {
        return {
            ...x, 
            pages: await getDeckPages(x)
        }
    }));
}

async function getBuildingInfoPoints(building)
{
    let buildingInfoPoints = await db.select().from(infoPoints).where(eq(infoPoints.buildingId, building.id));

    return await Promise.all(buildingInfoPoints.map(async (x) => {
        return { 
            ...x,
            decks: await getInfoPointAllDecks(x)
        }
    }));
}

async function getAllInfoPoints()
{
    const allInfoPoints = await db.select().from(infoPoints);

    return await Promise.all(allInfoPoints.map(async (x) => {
        return {
            ...x, 
            decks: await getInfoPointAllDecks(x)
        }
    }));
}

async function main()
{
    const allBuildings = await db.select().from(buildings);
    const allRooms = await db.select().from(rooms);
    const allRoomTypes = await db.select().from(roomTypes);

    const buildingRoomInfo = {
        buildings: allBuildings,
        rooms: allRooms,
        roomTypes: allRoomTypes
    };

    const allInfoPoints = await getAllInfoPoints();
    const basePathOutTmp = "./generated/";


    fs.rmSync(basePathOutTmp, { recursive: true, force: true });
    fs.mkdirSync(basePathOutTmp);


    for(let infoPoint of allInfoPoints)
    {
        const fileOutput = `${basePathOutTmp}${infoPoint.slug}.json`;
        const infoPointData = JSON.stringify(infoPoint);

        fs.writeFileSync(fileOutput, infoPointData);
    }

    fs.writeFileSync(`${basePathOutTmp}buidlingRoomInfo.json`, JSON.stringify(buildingRoomInfo));
}

main();


