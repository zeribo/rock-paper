function getComputerChoice() {
    let x = Math.floor(Math.random(0) * 3);

    if (x == 0) {
        return 'rock';
    }
    else if (x == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

getComputerChoice();

function getHumanChoice() {
    let input = prompt('enter rock, paper or scissors ');

    if (input.toLowerCase() == 'rock') {
        return 'rock';
    }
    else if (input.toLowerCase() == 'paper') {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}




function playRound() {

    const hum = getHumanChoice();
    const com = getComputerChoice();

    console.log(`human has ${hum} and comp has ${com}`);

   

    if (
        (hum == 'rock' && com == 'scissors') ||
        (hum == 'paper' && com == 'rock') ||
        (hum == 'scissors' && com == 'paper')

    ) { return 'human'; 
        

    } else if (hum == com) {
        return 'tie';

    } else {
        return 'computer';
    } 

    
}




function playGame() {

    let human_score = 0, computer_score = 0;

    for (let i = 0; i < 5; i++) {
        let x = playRound();

        if (x == 'human') {
            human_score++;
            console.log(`now human has ${human_score} points! \n`);
        }
        else if (x=='computer') {
            computer_score++;
            console.log(`now computer has ${computer_score} points!`);
        } else {
            console.log('meow');
        }
    }

    if (human_score > computer_score) {
        console.log('wow! human wins!');
    } else if (human_score < computer_score) {
        console.log('wow! pc wins!');
    } else {
        console.log('boring! it\'s tie');
    }




}