var Vuejs = new Vue({
    el: '#app',
    data: {
        heroHealth: 100,
        monsterHealth: 100,
        show: false,
        turns: [],
    },
    methods: {
        startNewGame: function() {
            this.heroHealth = 100;
            this.monsterHealth = 100;
            this.show = false;
            this.turns = [];
        },
        attacks: function() {
            //damage monster
            var damageHero = Math.floor(Math.random() * 11);
            this.heroHealth -= damageHero;
            this.turns.unshift({
                player: true,
                textLog: 'Monster hits Hero for ' + damageHero,
            });
            //damage hero
            var damageMonster = Math.floor(Math.random() * 11);
            this.monsterHealth -= damageMonster;
                this.turns.unshift({
                player: false,
                textLog: 'Hero hits Monster for ' + damageMonster, 
            });
            //monster win
            if(this.heroHealth <= 0) {
                var questionHero = confirm('Monster WIN!-AGAIN!');
                if (questionHero) {
                    window.location.reload(false);
                    // this.startNewGame();
                }
                else {
                    this.show = false;
                }
                return;
            };
            //hero win
            if (this.monsterHealth <= 0) {
                var questionMonster = confirm('Hero WIN!-AGAIN!');
                if (questionMonster) {
                    window.location.reload(false);
                    // this.startNewGame();
                }
                else {
                    this.show = false;
                }
                
                return;
            }
        },
        specialAttack: function() {
            //damage hero
            var damageSpeciaHero = Math.floor(Math.random() * 11);
            this.heroHealth -= damageSpeciaHero;
            this.turns.unshift({
                player: true,
                textLog: 'Monster hits Hero for ' + damageSpeciaHero, 
            });
            //damage monster
            var damageSpeciaMonster = Math.floor(Math.random() * 21);
            this.monsterHealth -= damageSpeciaMonster;
            this.turns.unshift({
                player: false,
                textLog: 'Hero hits Monster for ' + damageSpeciaMonster, 
            });
            //monster win
            if(this.heroHealth <= 0) {
                var questionSpeciaHero = confirm('Monster WIN!-AGAIN!');
            if (questionSpeciaHero) {
                window.location.reload(false);
                // this.startNewGame();
            }
            else {
                    this.show = false;
            }
                return;
            };
            //hero win
            if (this.monsterHealth <= 0) {
                var questionSpeciaMonster = confirm('Hero WIN!-AGAIN!');
                if (questionSpeciaMonster) {
                    window.location.reload(false);
                    // this.startNewGame();
                }
                else {
                    this.show = false;
                }
                
                return;
            }
        },
        heal: function() {
            //Heal hero
            if(this.heroHealth >= 100){
                return false;
            } else if(this.heroHealth <= 90){
               var heroHeal = this.heroHealth += 10;
                this.turns.unshift({
                player: true,
                textLog: 'Hero Heals for ' + heroHeal,
            });
            }else{
                this.heroHealth = 95;
            }
            //Damage monter
            var damegeMonterWhileHealHero = Math.floor(Math.random() * 13);
            this.heroHealth -= damegeMonterWhileHealHero;
            this.turns.unshift({
                player: false,
                textLog: 'Monster hits Hero for ' + damegeMonterWhileHealHero, 
            });
        }
    },
    computed: {

    }
})
