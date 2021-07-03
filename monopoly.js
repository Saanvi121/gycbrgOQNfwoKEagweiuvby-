var name0 = ""
var name1 = ""
var name2 = ""
var name3 = ""
var len = 0;


function give() {

    numberXplayers = document.getElementById("playerno").value
    console.log(numberXplayers)
    document.getElementById("question").innerHTML = "Enter the names of the players"
    document.getElementById("playerno").innerHTML = "0"
    document.getElementById("playerno").style.display = "none"
    if (numberXplayers == '2') {
        len = 2
        var n1 = "<input placeholder='Enter your name' id='name0'>"
        var n2 = "<input placeholder='Enter your name' id='name1'>"
        displaybutton()
        document.getElementById("anything").innerHTML = n1 + "<hr>" + n2 + "<hr>" + newbutton

    }
    else if (numberXplayers == '3') {
        len = 3
        var n1 = "<input placeholder='Enter your name' id='name0'>"
        var n2 = "<input placeholder='Enter your name' id='name1'>"
        var n3 = "<input placeholder='Enter your name' id='name2'>"
        displaybutton()
        document.getElementById("anything").innerHTML = n1 + "<hr>" + n2 + "<hr>" + n3 + "<hr>" + newbutton
    }
    else if (numberXplayers == '4') {
        len = 4
        var n1 = "<input placeholder='Enter your name' id='name0'>"
        var n2 = "<input placeholder='Enter your name' id='name1'>"
        var n3 = "<input placeholder='Enter your name' id='name2'>"
        var n4 = "<input placeholder='Enter your name' id='name3'>"
        displaybutton()
        document.getElementById("anything").innerHTML = n1 + "<hr>" + n2 + "<hr>" + n3 + "<hr>" + n4 + "<hr>" + newbutton

    }
    else {
        document.getElementById("anything").innerHTML = "<h4>Please refresh the website and enter 2, 3 or 4</h4>"
    }
}

var newbutton = ""

function displaybutton() {
    document.getElementById("b1").style.display = "none"
    newbutton = "<button id='b2' onclick = 'move()'> Proceed </button>"
}
var final_players = []
var num_players = []


function move() {
    for (var j = 0; j < len; j++) {
        var array_players = document.getElementById("name" + j).value;
        console.log(array_players);
        final_players.push(array_players);
    }


    var characters = ["Princess Peach", "Donkey Kong", "Yoshi", "Mario"]




    var arr = [];
    while (arr.length < len) {
        var r = Math.floor(Math.random() * len);
        if (arr.indexOf(r) === -1)
            arr.push(r);
    }
    console.log("new  " + arr);
    var player_character_assign = [];
    var final_players_characters = [];

    for (var p = 0; p < len; p++) {
        var player_character = final_players[p] + " - " + characters[arr[p]] + "<br>"
        console.log(player_character);
        final_players_characters.push(player_character);

        //console.log(final_players_characters)
    }

    final_players_characters = final_players_characters.join(" ");
    document.getElementById("final").innerHTML = final_players_characters

}


