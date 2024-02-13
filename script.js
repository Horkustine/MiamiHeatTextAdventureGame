// Text Adventure Game
const start = `Welcome to the Miami Heat Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER! You didn't meet Jimmy :( ";

const q1 = `You are trying to get a picture with Jimmy "Himmy" "Jimmy G. Buckets" Butler. You have arrived at a random Miami Heat game.
 Should you...
1. Get concessions first (you are hungry)
OR
2. Immediately go to your seat
${enter}`;

const gameOver1 = `You stand in line so long that you miss the entire game and Jimmy goes home. ${gameOver}`;

const q2 = `Once you get to your seat, you realize that Tyler Herro is warming up in front of you. Should you...
1. Ask him about the Jack Harlow song
OR
2. Shout at him in support
${enter}`;

const gameOver2 = `Tyler was not very happy about your cringy question. He has you escorted out of the arena. ${gameOver}`;

const q3 = `Tyler nods at you in recognition of your fandom. The game has started and the Heat are up big in the first. Should you...
1. Heckle the other team's players while they shoot free throws
OR
2. Take a nap
${enter}`;

const gameOver3 = `During your nap, you sleep through the entire game, including a Jimmy Butler game winner! How unfortunate... ${gameOver}`;

const q4 = `Your support for the Heat has paid off! The game was close enough so that Jimmy gets a shot at a game winner. He shoots... BANG!!! The Miami Heat have won! Should you...
1. Scream as loud as you can
OR
2. Rush the court so that you can try to speak to Jimmy after his incredible moment
${enter}`;

const gameOver4 = `You rush the court, but you are apprehended by the arena security. ${gameOver}`;

const q5 = `Your fanfare has caught the attention of Tyler Herro, who remembers the support you gave him earlier. He offers you a picture Should you...
1. Say that you only came here for a picture with Jimmy, and anything less would be failure.
OR
2. Accept the picture with Tyler
${enter}`;

const gameOver5 = `Tyler grants you a picture and you never get the chance to meet Jimmy. ${gameOver}`;

const q6 = `Tyler respects that Jimmy is your favorite player and takes you to the media room. You have managed to make it into the press room with Jimmy. Should you...
1. Ask him for a picture
OR
2. Insult the Boston Celtics`;

const gameOver6 = `Jimmy didn't like your desperation. He tells you to get out of here. ${gameOver} `;

const win = `Jimmy was impressed with your hatred of the Boston Celtics. He offers you a picture and a cup of coffee.`;

// Alerts the user to start the game

alert(start);

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional Statement
// 


let userInput = prompt(q1);

if(userInput==2){
    userInput= prompt(q2);
    if(userInput==2){
        userInput = prompt(q3);
        if(userInput==1){
            userInput=prompt(q4);
            if(userInput==1){
                userInput=prompt(q5)
                if(userInput==1){
                    userInput=prompt(q6)
                    if(userInput==2){
                        alert(win);

                    }
                    else{
                        alert(gameOver6);
                    }
                }
                else{
                    alert(gameOver5);
                }
            }
            else{
                alert(gameOver4);
            }
        }
        else{
            alert(gameOver3);
        }
    }
    else{
        alert(gameOver2);
    }
}
else{
    alert(gameOver1);
}

