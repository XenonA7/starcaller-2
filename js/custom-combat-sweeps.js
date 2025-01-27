/*
    Author: Lubkuluk
    Created: 09/28/2024

    Description: Custom combat sweep entry for starcaller usage. This makes it so you don't have to
    define 5 different ATTACK/ATTACK_REV/ATTACK_FINISHER actions for all the elements to show the
    proper effects.
*/

sc.COMBAT_SWEEPS.STARCALLER2 = {
    sheet: new ig.EffectSheet("sweeps-starcaller2"),
    keys: ["default", "heat", "cold", "shock", "wave"],
    force: {
        radius: 44,
        zHeight: 24,
        centralAngle: 0.5,
        duration: 0.225,
        attack: {
            type: "MEDIUM",
            damageFactor: 0.95,
            spFactor: 1,
            skillBonus: "MELEE_DMG"
        },
        checkCollision: true
    }
};