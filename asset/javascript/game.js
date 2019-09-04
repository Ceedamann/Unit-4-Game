var randomNumber;
var losses
var win;
// creation of random guess//
randomNumber = Math.floor(Math.random()*90)+30;
console.log(randomNumber)

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