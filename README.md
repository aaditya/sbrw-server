# SBRW Server

[![dependencies Status](https://david-dm.org/aaditya/sbrw-server/status.svg)](https://david-dm.org/aaditya/sbrw-server)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/aaditya/sbrw-server/graphs/commit-activity)
[![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/aaditya/sbrw-server/blob/master/LICENSE)

## Overview

This is a compatible server implementation for Need For Speed World and borrows a lot of references from the SoapBox RaceWorld Project. It still is a work in progress and still has a lot of stuff which needs to be taken care of. So far the game loads into the login screen and can create driver (persona). Need to create the logic for other stuff as well.

This uses NoSQL DB paradigm so everything needs to be reworked from the original SBRW project accordingly.

## Requirements

* NodeJS (v12+)

* MongoDB 

## Setup

> Create a file `.env` in the root directory with content as follows:

```env
NODE_ENV=development
PORT=8680
SECRET_KEY=<Token Signing Key>
MONGO_URI=<MongoDB URI>
ENABLE_UDP=false
CRYPT_KEY=<32 character string for encryption>
```

## Installation and Running

> `npm i`

> In Development Mode `npm run start-dev`

> In Production Mode `npm start` (You have to set up environment variables accordingly)

## Contributing

* Fork this repository.

* Create a branch with name as per your feature/issue.

* Commit the code and raise a pull request.

* Wait for code review and further actions.

## Notes

> You might want to use the sister repo [sbrw-capture](https://github.com/aaditya/sbrw-capture) to monitor the requests' data and appropriate response from this server or any other sbrw server.

> You might want to change linting rules for line break according to your OS.
