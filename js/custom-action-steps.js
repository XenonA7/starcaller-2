/*
    Author: Lubkuluk
    Created: 09/28/2024

    Description: Action step to utilize starcaller's custom assault projectiles
*/

ig.ACTION_STEP.SPAWN_ASSAULT_STARCALLER = ig.ActionStepBase.extend({
    _wm: new ig.Config({
        attributes: {
            baseStrength: {
                _type: "Number",
                _info: "Base Strength Factor. Should match damageFactor of attack"
            },
            element: {
                _type: "String",
                _info: "Element of Assault projectile",
                _select: sc.ELEMENT,
                _optional: true
            }
        }
    }),
    init: function (a) {
        this.baseStrength = a.baseStrength || 0;
        if (a.element)
            this.element = sc.ELEMENT[a.element]
    },
    run: function (a) {
        var b = this.element === void 0 ? sc.combat.getElementMode(a) : this.element;
        sc.AssaultToolsLSM.spawn(a, b, this.baseStrength);
        return true
    }
});