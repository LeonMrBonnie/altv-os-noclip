# Open Source - Noclip

Created by LeonMrBonnie

[:heart: Support me by becoming a Patron](https://www.patreon.com/leonmrbonnie/)<br>
⭐ This repository if you found it useful!

---

# Description

This repository provides an alt:V resource to allow the player to noclip.

With noclip you can move through the map very fast.

This resource provides two easy events to start and stop noclip for a player.

## Installing Dependencies / Installation

**I cannot stress this enough. Ensure you have NodeJS 13+ or you will have problems.**

-   [NodeJS 13+](https://nodejs.org/en/download/current/)
-   An Existing or New Gamemode
-   General Scripting Knowledge


After simply add the name of this resource to your `server.cfg` resource section.

`altv-os-noclip`

Then simply clone this repository into your main server resources folder.

```
cd resources
git clone https://github.com/LeonMrBonnie/altv-os-noclip
```

Ensure your `package.json` includes this property:

```json
"type": "module"
```

# Starting and stopping Noclip

To start or stop noclipping for a player you just have to emit the event to the player. You can do this from the clientside or serverside.<br>

| Action    | Event          |
| --------- | -------------- |
| Start     | `noclip:start` |
| Stop      | `noclip:stop`  |

The events take no arguments, you just have to emit the event to the player.<br>

# Using the noclip

When you have noclip enabled you have a few keys to move in different directions: (These directions are always computed from the direction you are looking with the camera)

| Key          | Description           |
| ------------ | --------------------- |
| `W`          | Moves forward.        |
| `A`          | Moves to the left.    |
| `S`          | Moves backwards.      |
| `D`          | Moves to the right.   |
| `SPACE`      | Moves upwards.        |
| `LEFT CTRL`  | Moves downwards.      |
| `SHIFT`      | Increases the speed.  |

When you press `SHIFT` in combination with one of the other keys (press them both at the same time), the speed you move at is much faster.

# Other alt:V Open Source Resources

-   [Authentication by Stuyk](https://github.com/Stuyk/altv-os-auth)
-   [Discord Authentication by Stuyk](https://github.com/Stuyk/altv-discord-auth)
-   [Global Blip Manager by Dzeknjak](https://github.com/jovanivanovic/altv-os-global-blip-manager)
-   [Global Marker Manager by Dzeknjak](https://github.com/jovanivanovic/altv-os-global-marker-manager)
-   [Chat by Dzeknjak](https://github.com/jovanivanovic/altv-os-chat)
-   [Nametags by Stuyk](https://github.com/Stuyk/altv-os-nametags)
-   [Entity Sync for JS by LeonMrBonnie](https://github.com/LeonMrBonnie/altv-os-js-entitysync)
-   [Context Menu by Stuyk](https://github.com/Stuyk/altv-os-context-menu)
-   [Global Textlabels by Stuyk](https://github.com/Stuyk/altv-os-global-textlabels)
-   [Interactions by LeonMrBonnie](https://github.com/LeonMrBonnie/altv-os-interactions)
