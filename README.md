# The-Monster-Slayer
The Monster Slayer

                    <!-- code game The Monster Slayer -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Monster Slayer</title>
    <script src="https://npmcdn.com/vue/dist/vue.js"></script>
    <link rel="stylesheet" type="text/css" href="foundation.min.css">
    <link rel="stylesheet" type="text/css" href="app.css">
</head>
<body>
    <div id="app">
        <section class="row">
            <div class="small-6 columns">
                <h1 class="text-center">YOU</h1>
                <div class="image"><img src="http://keyword-hero.com/wp-content/uploads/2017/04/Cart-Hero.png" height="112px" width="112px"></div>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: #e74c3c; color: #ecf0f1; margin: 0px; width: 100%" :style="{width: heroHealth + '%'}">{{ heroHealth }}</div>
                </div>
            </div>
            <div class="small-6 columns">
                <h1 class="text-center">MONSTER</h1>
                <div class="image"><img src="https://www.publicdomainpictures.net/download-picture.php?id=155188&check=3ecf9374df0b5c8bf8bf232ecd205be4" width="112px" height="112px"></div>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: #e74c3c; color: #ecf0f1; margin: 0px; width: 100%" :style="{width: monsterHealth + '%'}">{{ monsterHealth }}</div>
                </div>
            </div>
        </section>
        <section v-if='!show' class="row controls">
            <div @click= 'show = !show' class="small-12 columns">
                <button @click='startNewGame' id="start-game" >START NEW GAME</button>
            </div>
        </section>
        <section v-else class="row controls">
            <div class="small-12 columns">
                <button id="attack" @click='attacks'>ATTACK</button>
                <button id="special-attack" @click='specialAttack'>SPECIAL ATTACK</button>
                <button id="heal" @click='heal'>HEAL</button>
                <button @click= 'show = !show' id="give-up">GIVE UP</button>
            </div>
        </section>
        <section v-if='turns.length > 0' class="row log">
            <div class="small-12 columns">
                <ul>
                    <li v-for = 'turn in turns'>{{ turn.textLog }}</li>
                </ul>
            </div>
        </section>
    </div>
</body>
<script src="app.js"></script>
</html>
