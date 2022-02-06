// var factions = ["The Arborec", "The Barony of Letnev", "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan", "The Federation of Sol", "The Ghosts of Creuss", "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus", "Sadakk N'orr", "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom", "The Yin Brotherhood", "The Yssaril Tribes"];
// var colors =["Green", "Blue", "Yellow", "Red", "Purple", "Black"];

var speaker = "";
var players = [];
var factions =[];
var colors = [];
// var vpoints1 = 0;
// var vpoints2 = 0;
// var vpoints3 = 0;
// var vpoints4 = 0;
// var vpoints5 = 0;
// var vpoints6 = 0;


$("#change-speaker").on("click", function(){
    speaker = prompt("Who is the speaker?");

    $("#speaker").text(speaker);
});

$("#start-button").on("click", function(){

    $("#welcome").hide();
    $("#speaker-div").toggle();

    var playercount = prompt("How many players are there?");

    console.log(playercount);

    for (var i = 0; i < playercount; i++) {
        var vpoints = 0;
        var vpoints0 = 0;
        var vpoints1 = 0;
        var vpoints2 = 0;
        var vpoints3 = 0;
        var vpoints4 = 0;
        var vpoints5 = 0; 
        
        players.push(prompt("Who is player " + (i+1) + "?"));
        factions.push(prompt("What faction is player " + (i+1) +"?" ));
        colors.push(prompt("What color is player " + (i+1) + "?"));

        

        
        $("#players").append("<div class='player-card' style ='outline-color: " + colors[i] + "'> <p>" + players[i] + " </p><p>" + factions[i] + "</p><p id='vpoints" + [i] + "'>Victory Points: "+ vpoints +"</p><button id='add-point"+[i]+"'>Add Point</button><button id='subtract-point"+[i]+"'>Subtract Point</button></div>");
        
    }

//ADD BUTTON FUNCTIONS

    $("#add-point0").on("click", function(){
        console.log("click");
        vpoints0++;
        console.log(vpoints0);
        $("#vpoints0").text("Victory Points: " + vpoints0);
        });

    $("#add-point1").on("click", function(){
        console.log("click");
        vpoints1++;
        console.log(vpoints1);
        $("#vpoints1").text("Victory Points: " + vpoints1);
        });

    $("#add-point2").on("click", function(){
        console.log("click");
        vpoints2++;
        console.log(vpoints2);
        $("#vpoints2").text("Victory Points: " + vpoints2);
        });

    $("#add-point3").on("click", function(){
        console.log("click");
        vpoints3++;
        console.log(vpoints3);
        $("#vpoints3").text("Victory Points: " + vpoints3);
        });

    $("#add-point4").on("click", function(){
        console.log("click");
        vpoints4++;
        console.log(vpoints4);
        $("#vpoints4").text("Victory Points: " + vpoints4);
        });
        
    $("#add-point5").on("click", function(){
        console.log("click");
        vpoints5++;
        console.log(vpoints5);
        $("#vpoints5").text("Victory Points: " + vpoints5);
        });


//SUBTRACT BUTTON FUNCTIONS

    $("#subtract-point0").on("click", function(){
        console.log("click");
        vpoints0--;
        console.log(vpoints0);
        $("#vpoints0").text("Victory Points: " + vpoints0);
        });

    $("#subtract-point1").on("click", function(){
        console.log("click");
        vpoints1--;
        console.log(vpoints1);
        $("#vpoints1").text("Victory Points: " + vpoints1);
        });

    $("#subtract-point2").on("click", function(){
        console.log("click");
        vpoints2--;
        console.log(vpoints2);
        $("#vpoints2").text("Victory Points: " + vpoints2);
        });

    $("#subtract-point3").on("click", function(){
        console.log("click");
        vpoints3--;
        console.log(vpoints3);
        $("#vpoints3").text("Victory Points: " + vpoints3);
        });

    $("#subtract-point4").on("click", function(){
        console.log("click");
        vpoints4--;
        console.log(vpoints4);
        $("#vpoints4").text("Victory Points: " + vpoints4);
        });
        
    $("#subtract-point5").on("click", function(){
        console.log("click");
        vpoints5--;
        console.log(vpoints5);
        $("#vpoints5").text("Victory Points: " + vpoints5);
        });


    console.log(vpoints);
    console.log(players);     
});







