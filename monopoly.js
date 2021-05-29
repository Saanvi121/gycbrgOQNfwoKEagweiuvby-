function give()
{
    var characters = ["Princess Peach", "Donkey Kong", "Yoshi", "Mario"]
    var max = 3
    var min = 0
    var chosen_one = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(chosen_one)
    var chosen_character = characters[chosen_one]
 var name = document.getElementById("username").value
    document.getElementById("result").innerHTML = name + " got the character "+chosen_character
}