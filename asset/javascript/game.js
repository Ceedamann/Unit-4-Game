var randomNumber;
var losses = 0;
var wins = 0;
var choice = 0;
// creation of random guess//
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
}

//on click fucntion to determin when click 
$(".crystal").on("click", function(){
    var number = parseInt($(this).attr("data"));
    choice += number;
    if(choice > randomNumber ){
        losses--;
        $(".losses").html("Losses: " +losses);
        alert("You lose try again")
    }
    else if (choice === randomNumber){
        wins--;
        $(".wins").html("Wins: "+wins);
        alert("You win!!")
    }
    console.log(choice)
})