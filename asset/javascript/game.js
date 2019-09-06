var randomNumber;
var losses = 0;
var wins = 0;
var choice = 0;
// creation of random guess//
var game = function (){
    $(".crystals").empty();

    randomNumber = Math.floor(Math.random()*90)+30;
$(".randomSpot").html("Number to get: " + randomNumber) ;
// for loop to create the 4 div need 
for (var i = 0; i < 4; i++){

// random number generated for crytals
    var random = Math.floor(Math.random() *11 ) +1;

    console.log(random);

//creation of div and assigning random value
    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data": random
    })
$(".crystals").append(crystal);
$(".choice").html("You Have: 0 ");
}
}
game();
//on click fucntion to determin when click 
$(document).on("click",".crystal", function(){
    var number = parseInt($(this).attr("data"));
    choice += number;
    $(".choice").html("You Have: " + choice) ;
    if(choice > randomNumber ){
        losses++;
        $(".losses").html("Losses: " +losses);
        alert("You lose try again")
        choice =0;
        game();
    }
    else if (choice === randomNumber){
        wins++;
        $(".wins").html("Wins: "+wins);
        alert("You win!!");
        choice =0;
        game();
    }
    console.log(choice)
})