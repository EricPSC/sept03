var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 15 + 1);
var totalDamage = 0;
while(slaying){
if(youHit = 1){
        console.log('You have landed a hit on the Dragon');
        totalDamage += damageThisRound;
        if (totalDamage >= 10) {
            console.log("You win!");
            slaying = false;
            }else {
                youHit = Math.floor(Math.random() * 2);
                console.log(damageThisRound);
                }
            
    }else{
        console.log('The Dragon landed a hit on you');    
    }
    slaying = false;    
}


var text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}