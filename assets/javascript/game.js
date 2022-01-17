var factions = ["The Arborec", "The Barony of Letnev", "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan", "The Federation of Sol", "The Ghosts of Creuss", "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus", "Sadakk N'orr", "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom", "The Yin Brotherhood", "The Yssaril Tribes"];
var colors =["Green", "Blue", "Yellow", "Red", "Purple", "Black"];

var speaker = "";
var players = [];


$("#change-speaker").on("click", function(){
    speaker = prompt("Who is the speaker?");

    $("#speaker").text("Current Speaker: " + speaker);
});

$("#start-button").on("click", function(){

    $("#welcome").hide();

    var playercount = prompt("How many players are there?");

    console.log(playercount);

    for (var i = 0; i < playercount; i++) {
        players.push(prompt("Who is player " + (i+1)));
        }

        console.log(players);
        
});