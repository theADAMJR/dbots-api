# DBots API
Bot for DBots.

**Dashboard**: https://github.com/theADAMJR/DBots

![API](https://socialify.git.ci/DBots-co/API/image?description=1&descriptionEditable=API%20Routes%2FServer%20files%20for%20dbots.co&font=Source%20Code%20Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F70011081%3Fs%3D200%26v%3D4&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

## Installation
1) Fork/download this respository
2) `npm i` to install packages

### Config
`config.json` example:
```
{
    "bot": {
        "token": "",
        "secret": "",
        "ownerId": "218459216145285121",
        "activity": "dbots.co",
        "id": "533947001578979328"
    },
    "guild": {
        "botRoleId": "723982260554039349",
        "devRoleId": "",
        "id": "531196495584821314",
        "logChannelId": "724730682433077359"
    },
    "api": {
        "url": "http://localhost:3000/api/v1",
        "port": "3000",
        "supportInvite": "uDTgxyg"
    },
    "dashboardURL": "http://localhost:4200",
    "mongoURL": "mongodb://localhost/DBots"
}
```

### Redirect URIs
- `https://localhost:3000/api/v1/auth` (locally)
- `https://localhost:4200/dashboard` (locally)
