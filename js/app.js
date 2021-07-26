"use strict";
let nmber = prompt("Guess a number to enter my site ?");
while (nmber != 7) {
    alert("Wrong number  :( ");
    if (nmber > 7)
        alert("Go with a lower number ")
    if (nmber < 7)
        alert("Go with a higher number ")
    nmber = prompt("Try again :)");
}
if (nmber == 7) {
    alert("You are correct great guess !");
    alert("Welcome to my website my name is wasem idres ")
    let name = prompt("Hello there please enter your name ");
    let likesnature = prompt("Do you appreciate nature?").toLowerCase();
    let swimmer = prompt("Do you know how to swim?").toLowerCase();
    let brave = prompt("Are you afraid of animals?").toLowerCase();
    let hunter = prompt("Do you know how to hunt?").toLowerCase();
    let climber = prompt("Do you know how to climb trees or mountains?").toLowerCase();
    if (likesnature == "y")
        likesnature = "yes";
    if (swimmer == "y")
        swimmer = "yes";
    if (brave == "y")
        brave = "yes";
    if (hunter == "y")
        hunter = "yes";
    if (climber == "y")
        climber = "yes";
    if (likesnature == "n")
        likesnature = "no";
    if (swimmer == "n")
        swimmer = "no";
    if (brave == "n")
        brave = "no";
    if (hunter == "n")
        hunter = "no";
    if (climber == "n")
        climber = "no";
    // console.log(" you like nature ?", likesnature);
    // console.log("you are a swimmer ?", swimmer);
    // console.log("you are a brave ?", brave);
    // console.log("you are a hunter ?", hunter);
    // console.log("you are a climber ?", climber);
    // if (swimmer != "yes")
    //     console.log("You should learn swimming its very important")
    // if (climber != "yes")
    //     console.log("You should learn how to hunt because its a very usefull skill")
    if (swimmer != "yes")
        alert("You should learn swimming its very important")
    if (climber != "yes")
        alert("You should learn how to climb because its a very usefull skill")
    alert("Hello " + name + " welcome to my site " + "\n" + "you like nature ?" + likesnature + "\n" + "you are a swimmer ?" + swimmer + "\n" +
        "you are a brave ?" + brave + "\n" + "you are a hunter ?" + hunter + "\n" + "you are a climber ?" + climber +
        "\n" + "thanks for completing my Survey ");

}