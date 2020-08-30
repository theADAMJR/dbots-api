# DBots API
Bot for DBots.

**Dashboard**: https://github.com/theADAMJR/DBots

![2PG Avatar](https://dbots.co/assets/img/logo.png)

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
        "url": "http://localhost:3000/api",
        "port": "3000",
        "supportInvite": "uDTgxyg"
    },
    "dashboardURL": "http://localhost:4200",
    "mongoURL": "mongodb://localhost/DBots"
}
```

### Redirect URIs
- `https://localhost:3000/api/auth` (locally)
