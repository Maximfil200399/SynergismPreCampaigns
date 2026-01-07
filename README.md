# SynergismPreCampaigns - the game

Any changes made to this will be listed at the bottom.

## Running the game locally
Before running any of these commands below, make sure to have installed:

VSCode - https://code.visualstudio.com/Download

NodeJS - https://nodejs.org/en/ (current, not LTS).

---
1. Fork this repository at https://github.com/sipayumsertvfh/SynergismPreCampaigns/fork
2. Clone the repository you forked with `git clone https://github.com/<USERNAME>/SynergismOfficial` (make sure to change `<USERNAME>` with your own Github username)
3. Open the repository you just downloaded in VSCode
4. Install the project dependencies, running `npm install` (or `make install` - If you intend to use `make` from here and on, make sure it is installed first)
5. Install the liveserver extension for VSCode at https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer (or by searching for `Live Server` inside the Extensions Marketplace in VSCode. You can open the Extensions Marketplace by pressing `Ctrl+Shift+X`)
6. Run `npm run watch:esbuild` (or `make watch`). Not required if you don't want to make any changes.
7. Open the liveserver (bottom right corner icon similar to an Antenna in VSCode)
8. Make your desired changes and test them. Enjoy!
---
To get a list of available commands in the Makefile, run `make help` or just `make`

Current changes:
- Locked the Patreon bonus to 100% and disabled PseudoCoin upgrades (due to poor coding, the event/pseudocoin tabs are still there :derpsmith:)
- Added i18n to Platonic Upgrades
- Moved The Ultimate Pen to s277 and limited certain singularity challenges so they can't go above 277
- Achievements 45-47 (up to -20% taxes based on prestige time) have their effect maxed at all times
- Rewrote many, MANY descriptions for consistency, grammatical correctness, and just for the fun of it
- Made the code `23andme` usable at any time. Try using it once you've unlocked Octeracts!
