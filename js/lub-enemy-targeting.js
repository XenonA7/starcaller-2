sc.Combat.inject ({ 
        getPlayerTargetVar: function (a) {
            var b = ig.game.playerEntity.combatStats.lastTarget,
                c = sc.party.getStrategy("TARGET");
                
            // If the player has a target and the party member strategy is to target
            if (c.same && b && !b.isDefeated() && !b._killed) {
                return b;
            }
            
            // If the above condition is not met, select a random enemy in combat
            var d = this.getActiveCombatants(sc.COMBATANT_PARTY.ENEMY, true),
                e = d.length;
                
            // Return a random enemy from the list
            return d[Math.floor(Math.random() * e)];
        },
});

sc.EnemyType.inject ({
    updateTarget: function (a) {
            if (a.target) {
                if (!sc.model.isForceCombat()) {
                    var c = a.distanceTo(a.target);
                    a.targetLoseTimer = c > this.targetDetect.loseDistance ? a.targetLoseTimer + ig.system.tick : 0;
                    a.targetLoseTimer >= this.targetDetect.loseTime && a.setTarget(null);
                }
            } else if (ig.game.playerEntity) {
                var b = ig.game.playerEntity,
                    c = a.distanceTo(b),
                    d = Math.abs(a.coll.pos.z - b.coll.pos.z);
        
                if (c < this.targetDetect.detectDistance && (!this.targetDetect.detectZDelta || d < this.targetDetect.detectZDelta)) {
                    if (a.party == sc.COMBATANT_PARTY.PLAYER) {
                        // Use getPlayerTarget if the enemy is from the player's combat party
                        this.reselectTarget(a, true, false, false); // Adjust parameters as needed
                    } else {
                        this.targetDetect.onDistance ? this.assignTarget(a, b, true) : this.targetDetect.onCloseBattle && b.targetedBy.length > 0 && this.assignTarget(a, b, true);
                    }
                }
            }
        },
        reselectTarget: function (a, b, c, d) {
            var e;
            if (a.party == sc.COMBATANT_PARTY.PLAYER) {
                // Use getPlayerTarget if the enemy is from the player's combat party
                e = sc.combat.getPlayerTargetVar(a);
            } else {
                e = sc.combat.getEnemyTarget(a);
            }
            e && this.assignTarget(a, e, b, c, d);
        },
});