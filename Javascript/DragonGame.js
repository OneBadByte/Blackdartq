/**
 * Created by blackdartq on 12/6/15.
 */
var slaying = true;
var dragonsHealth = 100;
var playersHealth = 50;
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var youHit = Math.floor(Math.random()*2);
var totalDamage = 0;

function healthBar(){
    console.log("your health: ", playersHealth);
    console.log("dragons health: ", dragonsHealth);
    console.log("damage done: ", damageThisRound);
}

var swingAgain = raw.input("hit space to attack the dragon again");
while(slaying){
    if (dragonsHealth > 0 || playersHealth > 0){
        if(youHit === 1){
            damageThisRound;
            dragonsHealth -= damageThisRound;
            healthBar();

        }

        else if(youHit === 0){
            damageThisRound;
            playersHealth -= damageThisRound;
            healthBar();

        }
    }

    else if(dragonsHealth <= 0 || playersHealth <= 0){
        if(dragonsHealth <= 0){
            console.log("You defeated the dragon!!!");
            slaying = false;
        }else if(playersHealth <= 0 ) {

            console.log("Dragon defeated you!!!");
            slaying = false;
        }
    }

    var swingAgain = window.prompt("hit space to attack the dragon again");
    if(swingAgain === ' '){
        slaying = true;
    }else{
        slaying = false;
    }


}