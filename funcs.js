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




function playRound(hum) {

    //const hum = getHumanChoice();
    const com = getComputerChoice();

    console.log(`human has ${hum} and comp has ${com}`);

   

    if (
        (hum == 'rock' && com == 'scissors') ||
        (hum == 'paper' && com == 'rock') ||
        (hum == 'scissors' && com == 'paper')

    ) { return ['human', com]; 
        

    } else if (hum == com) {
        return ['tie', com];

    } else {
        return ['computer', com];
    } 

    
}




/*function playGame() {

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

}   */

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

body = document.body;



buttons = document.querySelectorAll('button');



let rounds = 0;
let human_score = 0;
let comp_score = 0;

const lineBreak = document.createElement('br');


function getOrCreateDiv() {
  let div = document.querySelector('div');
  if (!div) {
    div = document.createElement("div");
    document.body.appendChild(div);
  }
  return div; // Returns existing or new div
}

buttons.forEach(button => {

    button.addEventListener('click', () => {
        const div1 = getOrCreateDiv();

        rounds++;

        

        if (rounds == 6) {
            body.removeChild(div1);
            rounds = 0;
        }

        const human_choice = button.id;
        const [winner, comp] = playRound(human_choice);

        human_score += (winner == 'human') ? 1 : 0;
        comp_score += (winner == 'computer') ? 1 : 0;
        

        const para = document.createElement('p');

        para.textContent = `human has ${human_choice} and comp has ${comp}!`;

        let result;
        if (winner == 'tie') {
            result = document.createTextNode(` it's tie! boring! ${rounds} rounds have been played`);
        } else {
            result = document.createTextNode(` winner is ${winner}! wowww   ${rounds} rounds have been played`);
        }

        div1.appendChild(lineBreak);
        div1.append(`human score is ${human_score} and comp score is ${comp_score}`)
        div1.appendChild(lineBreak);

        if (rounds == 5 && winner != 'tie') {
            div1.append(` ${winner}  wins the game! click any button to start again`);
            human_score = 0;
            comp_score = 0;

            return;
        }
        else if (rounds == 5) {
            div1.append(`no one wins! it's tie this time`);
            human_score = 0;
            comp_score = 0;
            return;
        }
        

        para.appendChild(result);
        div1.appendChild(para);

        
        

        


    });

});

    


