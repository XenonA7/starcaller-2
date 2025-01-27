/*
    Author: Lubkuluk
    Created: 09/28/2024

    Description: Custom projectiles used by the assault modifier. These travel farther than the
    default ones and are more suitable for starcaller melee attacks.
*/

ig.module("game.feature.combat.starcaller-combat-assault").requires("game.feature.combat.model.combat-params", "game.feature.combat.entities.ball").defines(function () {
    var m = {
        type: "BALL",
        effects: "ball-assault",
        speed: 375,
        maxBounce: 0,
        timer: 0.166,
        animation: {
            name: "default",
            sheet: {
                src: "media/entity/balls/default.png",
                width: 16,
                height: 16,
                offY: 168
            },
            time: 0.05,
            repeat: true,
            frames: [0],
            renderMode: "lighter",
            guiSprites: true
        },
        attack: {
            type: "NONE",
            visualType: "LIGHT",
            element: "HEAT",
            damageFactor: 0.6,
            reverse: false,
            spFactor: 1,
            guardable: "",
            skillBonus: "MELEE_DMG",
            hints: ["NO_PUZZLE"]
        },
        behaviors: []
    };
    sc.ASSAULT_PROJECTILES_CUSTOM = {};
    for (var a in sc.ELEMENT) {
        var d = sc.ELEMENT[a],
        c = ig.copy(m);
        c.attack.element = a;
        c.animation.frames[0] = d;
        sc.ASSAULT_PROJECTILES_CUSTOM[d] = new sc.BallInfo(c)
    }
    var e = Vec3.create(),
    f = Vec2.create();
    sc.AssaultToolsLSM = {
        spawn: function (a, m, c) {
            var d = a.params.getModifier("ASSAULT") * c;
            if (d) {
                c = Math.max(1, Math.round(d / 0.2));
                if (m = sc.ASSAULT_PROJECTILES_CUSTOM[m]) {
                    m.data.attack.damageFactor = d / c;
                    d = a.getAlignedPos(ig.ENTITY_ALIGN.BOTTOM, e);
                    for (d.z = d.z +
                            Constants.BALL_HEIGHT; c--; ) {
                        var k = Vec2.assign(f, a.face);
                        Vec2.rotate(k, Math.PI * 0.4 * (Math.random() - 0.5));
                        Vec2.length(k, 4);
                        m.spawn(d.x + k.x, d.y + k.y, d.z, a, k)
                    }
                }
            }
        }
    }
});