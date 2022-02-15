let a = Math.trunc(Math.random() * 70)+1;
console.log(a);

if(a > 0 && a<4){
    document.querySelector('#clueText').innerHTML = "I AM A INFANT"
}else if(a > 3 && a<13){
    document.querySelector('#clueText').innerHTML = "I AM IN MY CHILDHOOD"
}else if(a > 12 && a< 21){
    document.querySelector('#clueText').innerHTML = "I AM IN MY ADOLSCENT"
}else if(a > 20 && a<31){
    document.querySelector('#clueText').innerHTML = "I AM IN MY EARLY ADULTHOOD"
}else if(a > 30 && a<51){
    document.querySelector('#clueText').innerHTML = "I AM IN MY LATE ADULTHOOD"
}else{
    document.querySelector('#clueText').innerHTML = "I AM ELDER"
}

document.querySelector('#submit').addEventListener('click',checkinput)

function checkinput(){
    let input = document.quebberySelector('#guessbox').value;
    if(input == a){
        document.querySelector('#numberbox').style.backgroundColor = 'green';
        document.querySelector('#numberbox').innerHTML = a;
        document.querySelector('#guessbox').disabled = true;
        document.querySelector('#ballon').style.display = 'block';
        document.querySelector('#clueText').innerHTML = "YOU WON! PLAY AGAIN";
        document.querySelector('#clueText').style.color = 'green';
        console.log('correct')
    }else{
        console.log('wrong')
        let wrong = document.querySelector('#score').innerHTML
        wrong--;
        if(wrong == 0){
            document.querySelector('#clueText').innerHTML = "GAME OVER";
            document.querySelector('#guessbox').disabled = true;
        }else{
            document.querySelector('#score').innerHTML = wrong
            document.querySelector('#clueText').style.color = 'red';
        }

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

document.querySelector('#cheatBtn').addEventListener('click', cheatWin);