# aitum-goxlr-cc

![Discord](https://img.shields.io/discord/105940401805856768)
![Twitch Status](https://img.shields.io/twitch/status/itsALPINE)
![Twitter Follow](https://img.shields.io/twitter/follow/alpineMakes)

## Summary

These scripts are written for [AitumCC] to control a GoXLR interface running the [GoXLRUtility] control software with [AITUM](https://aitum.tv)

## Installation

Follow the AitumCC guides to install and run the scripts.
You need  to install [GoXLR JS] lib, available via [npm](https://npmjs.org/goxlr)

`npm i goxlr@latest`

## Scripts

This is currently just a quick proof of concept. More complex scripts are currently in development.

### Channel Volume Control

Control the Volume (0-100) of every available channel on the GoXLR, including the ones not active on the faders:

- Mic
- LineIn
- Console
- System 
- Game
- Chat
- Sample
- Music
- Headphones
- MicMonitor
- LineOut

### Mute Faders

This script lets you remotely use mute buttons below the faders (1-4), so it remembers the volume on unmute. This script uses the "MuteToX" rule, so it follows the set mutegroup.

## :heart:

Thanks [FrostyCoolSlug](https://github.com/FrostyCoolSlug) for creating the GoXLR Utility alongside the GoXLR on Linux Organisation. [^4]

[AitumCC]:https://github.com/Aitum/custom-code
[GoXLRUtility]:https://github.com/GoXLR-on-Linux/goxlr-utility
[GoXLR JS]:https://github.com/teddybrine/goxlr-js
[^4]: