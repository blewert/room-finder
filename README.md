
# Running generation

1. Run generation
2. Generated files will now be in `./generated/`
    a) A JSON file is generated for `buildingRoomInfo.json` with all room & building data
    b) A JSON file is generated for each page deck (within `./generated/page-decks/*`)
    c) A JSON file is generated for mappings of slug -> json files, and all info point data (`./generated/infoPoints.json`)

```
npm run generate
```