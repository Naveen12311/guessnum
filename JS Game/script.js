let random = Math.floor(Math.random() * 70);
let score = document.querySelector('#score').innerHTML;
console.log(`${random} -> random`)
  if(random > 0 && random <= 3){document.querySelector('#clueText').innerHTML = "I AM AN INFANT";}
  else  if(random > 3 && random <= 12){document.querySelector('#clueText').innerHTML = "I AM IN MY CHILDHOOD";}
  else  if(random > 12 && random <= 20){document.querySelector('#clueText').innerHTML = "I AM IN AN ADOLESCENT";}
  else  if(random > 20 && random <= 30){document.querySelector('#clueText').innerHTML = "I AM IN MY EARLY ADULTHOOD";}
  else  if(random > 30 && random <= 50){document.querySelector('#clueText').innerHTML = "I AM IN MY LATE ADULTHOOD";}
  else  if(random > 50 && random <= 70){document.querySelector('#clueText').innerHTML = "I AM OLD";}

function submitfn(){
    let guess = document.querySelector('#guessbox').value;
    console.log(`${guess} -> guess`)
    if(random == guess){
        document.querySelector('#clueText').innerHTML = "YOU WON <br> Play Again"; 
        document.querySelector('#numberbox').innerHTML = random; 
        document.querySelector('#numberbox').style.backgroundColor = '#90EE90';
        document.querySelector('#clueText').style.color = "green"; 
        document.querySelector('#ballon').style.display = "block";
        document.querySelector('#guessbox').disabled = "true";
    }else{
        score--;
        if(score>0){
             document.querySelector('#score').innerHTML = score;
            }else if(score == 0){
            document.querySelector('#score').innerHTML = score;
             document.querySelector('#clueText').innerHTML = "GAME OVER!<br> Reset your game.";
             document.querySelector('#guessbox').disabled = "true";
            } 
             document.querySelector('#clueText').style.color = "red"; 
    }
}

function cheatWin(){
    if(document.querySelector('#cheatBtn').getAttribute('value') == 1){
    document.querySelector('#cheatBtn').innerHTML = "CLOSE";
    document.querySelector('#container').style.opacity = "0.1";
    document.querySelector('#cheat').style.opacity = "1";
     document.querySelector('#cheatBtn').setAttribute('value',0)
     
    }else{
            document.querySelector('#cheatBtn').innerHTML = "Cheat Sheet";
            document.querySelector('#container').style.opacity = "1";
            document.querySelector('#cheat').style.opacity = "0";
             document.querySelector('#cheatBtn').setAttribute('value',1)
    }
}

document.querySelector('#submit').addEventListener('click', submitfn);
document.querySelector('#cheatBtn').addEventListener('click', cheatWin);