# DBots API
Bot for DBots.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dbots-co/api)

---

Projects to Host Series - https://www.youtube.com/watch?v=ARkTLD_j2cM&list=PLGfT2ttRbfiyyci-6_mmKaTA0-2qm_U6H&index=1

**Website**: https://github.com/DBots-co/Website

![API](https://socialify.git.ci/DBots-co/API/image?description=1&descriptionEditable=API%20Routes%2FServer%20files%20for%20dbots.co&font=Source%20Code%20Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F70011081%3Fs%3D200%26v%3D4&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

## Installation
1) Fork/download this respository
2) `npm i` to install packages
3) Setup `.env`

### .env
This file is used for storing private data and secrets.
It must be created for the app to run correctly.

`.env` example:
```.env
API_URL="http://localhost:3000/api/v1"
BOT_ID="NTMzOTQ3MDAxNTc4OTc5MzI4.XDsK5Q.Fq1LOiPscusQSvNecRpUR81Ii3o"
BOT_TOKEN="KL1gYYEee2TmR9xr4wdtM46mkaX5H1_R"
BOT_SECRET="533947001578979328"
BOT_ROLE_ID="723982260554039349"
DASHBOARD_URL="http://localhost:4200"
DEV_ROLE_ID="761610131703463997"
DOWNTIME_CHANNEL_ID="724730682433077359"
LOG_CHANNEL_ID="724730682433077359"
GUILD_ID="531196495584821314"
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
API_URL="http://localhost:3000/api/v1"
BOT_ID="NTMzOTQ3MDAxNTc4OTc5MzI4.XDsK5Q.lx2V4n38wqEKYHPM9bXZfr2IFXw"
BOT_TOKEN="NTMzOTQ3MDAxNTc4OTc5MzI4.XDsK5Q.8OID96ZNFv4U369DErk0SQIIK28"
BOT_SECRET="7re3396ielpA37WXnCdhRwJ4RgPh_x1B"
BOT_ROLE_ID="723982260554039349"
DASHBOARD_URL="http://localhost:4200"
DEV_ROLE_ID="761610131703463997"
DOWNTIME_CHANNEL_ID="724730682433077359"
LOG_CHANNEL_ID="724730682433077359"
GUILD_ID="test_guild_123"
PORT="3001"
MONGO_URI="mongodb://localhost/DBots-Test"
```
