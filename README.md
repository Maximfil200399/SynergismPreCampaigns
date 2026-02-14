# SynergismPreCampaigns - the mod

This mod is based on version 3.1.2 of Synergism, the final version before the Campaigns Update. Originally made to, well, play a more balanced version of Synergism, it has then been expanded to contain changes to existing content as I frankly haven't been able to resist changing things. Because of that, it's not really vanilla Synergism anymore... But I don't care! I'm having fun, and that's all that matters!

Any changes made to this will be listed at the bottom.

## Running the mod locally
Before running any of these commands below, make sure to have installed:

VSCode - https://code.visualstudio.com/Download

NodeJS - https://nodejs.org/en/ (some recent version)

---
1. Fork this repository at https://github.com/sipayumsertvfh/SynergismPreCampaigns/fork
2. Clone the repository you forked with `git clone https://github.com/<USERNAME>/SynergismPreCampaigns` (make sure to change `<USERNAME>` with your own Github username)
3. Open the repository you just downloaded in VSCode
4. Install the project dependencies, running `npm install` (or `make install` - If you intend to use `make` from here and on, make sure it is installed first)
5. Install the liveserver extension for VSCode at https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer (or by searching for `Live Server` inside the Extensions Marketplace in VSCode. You can open the Extensions Marketplace by pressing `Ctrl+Shift+X`)
6. Run `npm run watch:esbuild` (or `make watch`). Not required if you don't want to make any changes.
7. Open the liveserver (bottom right corner icon similar to an Antenna in VSCode)
8. Make your desired changes and test them. Enjoy!
---
To get a list of available commands in the Makefile, run `make help` or just `make`

## Current changes:
- For a more complete list, check the wiki.
- Locked the Patreon bonus to 100% (now called an "existence" bonus) and removed the Event/PseudoCoin tabs
- Rewrote many descriptions, often for fun. Also added i18n to Platonic Upgrades
- Made an awful attempt at improving Stats for Nerds (it kinda worked???)
- Singularities 11, 100, and 150 have something to tell you
- The event code `23andme` has returned!
- Was that 'Save Offerings' toggle useless for you? I agree! I replaced it with a 'Buy Max' toggle :3
- The tool to write your own story is unlocked 23(!!!) Singularities earlier
- Various miscellaneous fixes, buffs, and QoL improvements
