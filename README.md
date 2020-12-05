# DBots - API
Quickly and easily find Discord bots. Comes with prebuilt website; just uncomment lines in [api/server.ts](tree/stable/src/api/server.ts) to get this to work.

![Discord](https://img.shields.io/discord/236608364333891585?color=6ca294&amp;label=Support&amp;style=for-the-badge)
![Lines of Code](https://img.shields.io/tokei/lines/github/DBots-co/API?color=6ca294&style=for-the-badge)
![Repo Stars](https://img.shields.io/github/stars/DBots-co/API?color=6ca294&style=for-the-badge)

![Website Preview](https://i.ibb.co/mJKfRLK/image.png)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dbots-co/api)

## License Notice
![License Notice](https://i.ibb.co/Q8vQDTs/image.png)
- Keep your repository open source, with same license.
- Link to your repository on website (if editing, it links here by default).

---

Projects to Host Series - https://www.youtube.com/watch?v=ARkTLD_j2cM&list=PLGfT2ttRbfiyyci-6_mmKaTA0-2qm_U6H&index=1

**Website**: https://github.com/DBots-co/Website

## Installation
1) Fork/download this repository
2) `npm i` to install packages
3) Setup `.env`

### `.env`
This file is used for storing private data and secrets.
It must be created for the app to run correctly.

`.env` example:
```.env
API_URL="http://localhost:3000/api/v1"
BOT_ID=""
BOT_TOKEN=""
BOT_SECRET=""
BOT_ROLE_ID=""
DASHBOARD_URL="http://localhost:4200"
DEV_ROLE_ID=""
DOWNTIME_CHANNEL_ID=""
LOG_CHANNEL_ID=""
GUILD_ID=""
PORT="3000"
MONGO_URI="mongodb://localhost/DBots"
```

### Redirect URIs
- `http://localhost:3000/api/v1/auth` (locally)

---

## Testing
Create a `test/.env` file similar to above, with a few differences (i.e. different database and port).

Test `.env` example:
```.env
API_URL="http://localhost:3001/api/v1"
BOT_ID=""
BOT_TOKEN=""
BOT_SECRET=""
BOT_ROLE_ID=""
DASHBOARD_URL="http://localhost:4200"
DEV_ROLE_ID=""
DOWNTIME_CHANNEL_ID=""
LOG_CHANNEL_ID=""
GUILD_ID="test_guild_123"
PORT="3001"
MONGO_URI="mongodb://localhost/DBots-Test"
```
