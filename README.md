# SBRW Server

[![dependencies Status](https://david-dm.org/aaditya/sbrw-server/status.svg)](https://david-dm.org/aaditya/sbrw-server)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/aaditya/sbrw-server/graphs/commit-activity)
[![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/aaditya/sbrw-server/blob/master/LICENSE)

## Description

This server is a NodeJS port of SBRW Server, written in Java.

If you want to contribute, you might want to change the linting rule linebreak-style as per your OS.

## Requirements

* NodeJS (v12+)

* MongoDB 

## Setup

> Create a file `.env` in the root directory with content as follows:

```env
NODE_ENV=development
PORT=8680
SECRET_KEY=<Token Signing Key>
MONGO_URI=<Mongodb URI>
ENABLE_UDP=false
CRYPT_KEY=<32 character string for encryption>
```

## Installation

* `npm i`

## Running

> Development `npm run start-dev`

> Production `npm start`

## What's done

> Login / Register Works

> Permanent Session is forming well.

> Automated Assets Generation.

### Working Modules

* Products in Category 

* Create/Delete Driver Persona.

* Auth.

### Miscellaneous

* API List.

* UDP server setup.

## To Do

### Priority 1

* Persona Routes

* Baskets

### Priority 2

* Intuitive Logger Function.

* UDP packet capturing.

* Multiplayer Patch

* Freeroam Patch
