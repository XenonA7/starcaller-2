## 0.6.2 (09/11/25)
### General
- Verified player file skillBonus integrity
### New Content
- Added TinyHead menu icon (for Multibakery)
  * This only activates if menu-ui-replacer is installed (not a hard dependency)
- Added dialogue in starcaller2-lobby with more info about the mod
- Added a new star effect to the summoner lobby teleporter in hideout-southwest if XPC is installed
### Changes
- Added starcaller2 class logo font icon to mod title
- Added light source to effect vengeancePulseAura
- Minor tweak to icon.png
- Added "light": "S" to all default uncharged projectiles (new XPC standard)
- Frozen spike now always shoots both a frozenSpikeDormant and frozenSpikeBullet proxy
- Updated CRATER particle/effects in specials.neutral-starcaller2 to use new XPC standard for Z_FLAT and gfxOffset
- Added randFlip property to all dirt, debris, crater, flame2, etc particles
- Added 1.15 CHANGE_SCALE to all non-neutral default charged projetiles (via ballTrail effects)
- Effect heat-starcaller2.salvoMeteorTrail now uses particle EXPLOSION_BIG_FAST_NO_GUI
- Added ground dust effets to Ritual Blade
- Lowered audio playback speed of default melee sweep sound effects
### Fixes
- Deleted all inert "maxBounds" properties in starcaller2 player file proxies (artifact from vanilla Lea code)
- Removed "hitInvincible" setting from Burning Updraft
- Added the Z_FLAT shapeType to all CRATER particles
- Disabled unfinished "Static Cloud" combat art
- Fixed proxy salvoMeteor missing shadow by removing guiSprites property
### Balance
- Proxy frozenSpikeBullet damageFactor reduced from 3.0 to 2.4
- Proxy frozenSpikeDormant now expires after 7 seconds instead of lasting forever
- Flaming Salvo shoot duration reduced from 0.4 to 0.3 seconds
- Flaming Salvo can now be dash-canceled after 0.5 seconds instead of 0.55 seconds
- Seismic Slam and Starquake hitboxes now extend Z=-32 below the ground for a few niche interactions
- Seismic Slam and Starquake hitboxes now standardized at height Z=8 above ground
- Proxy starcannonBullet speed increased from 400 to 475
- Proxy starcannonBullet knockback reduced from MEDIUM to LIGHT

## 0.6.1 (07/28/25)
### New Content
- XPC's cheat code custom skills are now usable by Starcaller2 if both XPC and ArcaneLab are installed and the quest is complete
- Added Starcaller1 cameo to summoner lobby if Lubkuluk's Playable Classes is installed (low chance to appear)
### Changes
- Stellar Blade now has the NO_PUZZLE property
- Added audio pitch variance to effect beeTrail
- Updated all PLAY_ANIM_RANGE effect steps in the mod to use `"alongY": true`
### Fixes
- All status conditions granted by Starcaller2 combat arts now have functional timers on the GUI (code by Azure Lazuline)
- Fixed instances of file path space padding in effect data sheets
- Fixed repeating 1-frame animations for all particle effects
- Fixed repeating 1-frame animations for all player proxies
- Fixed all instances of WAIT for time 0.01 in all files (increased to 0.02 minimum standard)
- Set withElse value to false for Disarming Shield and Disintegration Shield
- Fixed ENV_STAR2_DARK particles not rotating in effect vengeancePulsePulse
### Balance
- Stellar Blade healing increased from 0.0075 to 0.0175 per hit
- Stellar Blade can no longer be used to target yourself when facing a wall (startDistCollide NONE)

## 0.6.0 (03/02/25)
### New Content
- New ally option: Echinonix (Cold summon tier 1)
- New ally option: Karrotank (Cold summon tier 2)
### Changes
- Improved effect beeTrail particle alignment
- Standardized pumpkin targetDetect settings
### Fixes
- Fixed light duration in effect glacialHiveAppear 
- Fixed light size in effect glacialHiveFinalExplode

## 0.5.1 (03/01/25)
### Changes
- Bees now have collideCancel 1
### Balance
- Glacial Hive now grants HEAVY hit stability during the art

## 0.5.0 (03/01/25)
### New Content
- New combat art: Bullet Hail (Cold Throw Lv.1A)
- New combat art: Frigid Spikes (Cold Throw Lv.2B)
- New combat art: Icy Star (Cold Dash Lv.1A)
- New combat art: Crystalline Armor (Cold Guard Lv.1B)
- New combat art: Volatile Ice (Cold Melee Lv.1A)
- New combat art: Glacial Hive (Cold Melee Lv.2A)
### Changes
- Frozen Spike changed from THROW_SPECIAL1_A to THROW_SPECIAL1_B
### Fixes
- Fixed proxy frozenSpikeBullet wrong shadow size

## 0.4.1 (02/18/25)
### Fixes
- Added missing "repository" field in ccmod.json

## 0.4.0 (02/17/25)
### New Content
- New combat art: Blast Zone (Heat Melee Lv.2B)
- New combat art: Moth Strike (Heat Dash Lv.1B)
- New combat art: Frozen Spike (Cold Throw Lv.1A)
- New combat art: Ice Grinder (Cold Guard Lv.1A)
- New ally option: Pumpkin (Heat summon tier 1)
### Changes
- Renamed Tornadic Updraft to Burning Updraft
- Renamed Stardust Rush to Stardust Embers
- Sun Beetle summon ID changed from 1 to 2
- Increased the size of the HEAT_BIG_STAR_GUI particle in effect burningUpdraftPlayerFX
- Added randFlip property to all FLAME1 and FLAME2 particles in all heat effects
- Added a pulsing HEAT_BIG_CIRCLE_GUI to effect burningUpdraftHeatwave
### Fixes
- Fixed ATTACK_FINISHER hitbox to rotate CCW
- Fixed missing BALL_BOUNCE particle in neutral/heat effects starBallBounce
### Balance
- Blazing Star delay between shooting blazingStarWall decreased from 0.10 to 0.09
- Flaming Salvo now grants HEAVY hit stability

## 0.3.0 (02/09/25)
### New Content
- New combat art: Blazing Star (Heat Throw Lv.2A)
- New combat art: Kindling Rush (Heat Dash Lv.2A)
- New combat art: Tornadic Updraft (Heat Guard Lv.2A)
### Changes
- Deleted spritesheet "starcaller2 - old.png"
- Changed animation "bowl" sprite timing from 0.1 to 0.075
- Renamed effect flamingSalvoAura to flamingSalvoPlayerFX
### Fixes
- Fixed rotation frame data on Lychee's Comet proxy
### Balance
- Increased Shimmering Bombs cone of fire from 0.02 to 0.03
- Flaming Salvo rock landing distance increased from 40 to 48
- Flaming Salvo damage increased

## 0.2.0 (02/01/25)
### New Content
- New combat art: Shimmering Bombs (Heat Throw Lv.1A)
- New combat art: Flare Blast (Heat Melee Lv.1B)
- New combat art: Stardust Rush (Heat Dash Lv.1A)
- New combat art: Flaming Salvo (Heat Guard Lv.1A)
- New combat art: Pulsing Flames (Heat Guard Lv.1B)
- New ally option: Sun Beetle (Heat summon tier 2)
### Changes
- Made all SIGNAL hitboxes unguardable
- Deleted cheat-animationViewerProxy from starcaller2 player file
### Fixes
- Fixed allies not properly recognizing when combat ends
- Fixed Hillkat Alley and Rockin' Rampage melee hitbox zHeight
- Fixed Wave Security Brute HP cost not being 25%
### Balance
- Nerfed dice mage ally's status inflict factors for dice attacks
- Increased ally decay factor from 0.008 to 0.009

## 0.1.0 (01/26/2025)
- Initial Release!
- 14 neutral combat arts
- 3 neutral allies
- 1 wave ally