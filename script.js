
const startbtn=document.querySelector(".startGamebtn")
const message=document.querySelector(".message")
const sumText=document.querySelector(".sum")
const cardsText=document.querySelector(".cards")
const newCardbtn=document.querySelector(".newCardbtn")
const playAgainbtn=document.querySelector(".playAgainbtn")
const standbtn=document.querySelector(".standbtn")
const dealerCardsText=document.querySelector(".dealers-cards")
const dealerSumText=document.querySelector(".dealers-sum")



let firstCard=getRandomCard()
let secondCard=getRandomCard()
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=false

let dealerfirstCard=getRandomCard()
let dealersecondCard=getRandomCard()
let dealersum=dealerfirstCard+dealersecondCard
let dealerhasBlackJack=false
let dealerisAlive=false
let dealercardsshow=false


let cards=[firstCard,secondCard]
let dealercards=[dealerfirstCard,dealersecondCard]



startbtn.onclick=startGame
newCardbtn.onclick=newCard
playAgainbtn.onclick=newGame
standbtn.onclick=dealerTurn



function startGame(){
    
   
    isAlive=true;
    dealercardsshow=false
    renderGame();
   // dealerRenderGame()

}

function renderGame(){
    message.innerText=("Do you want to draw a new card?")
    cardsText.textContent="Cards:  "
    for(i=0;i<cards.length;i++){
        cardsText.textContent+=cards[i]+" "
    }
    sumText.textContent="Sum: "+sum
    
    if(sum<21){
        message.innerText=("Do you want to draw a new card?")
        
    }
    else if (sum == 21){
        message.innerText=("You got black jack!!!")
        hasBlackJack=true
        
    }
    else{
        message.innerText=("You are out of the game")
        
        isAlive=false
        
    }
}

function newCard(){

    if((isAlive==true && hasBlackJack==false)||dealercardsshow==false){
        let newCard=getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame();
    }
    else{
        message.innerText=("You cant get another Card You lost")
    }
}

function newGame(){

    if(isAlive==false||hasBlackJack==true||dealerisAlive==false){
        message.innerText=("New Game ")
        firstCard=getRandomCard()
        secondCard=getRandomCard()
        cards=[firstCard,secondCard]
        sum=firstCard+secondCard

        dealerfirstCard=getRandomCard()
        dealersecondCard=getRandomCard()
        dealercards=[dealerfirstCard,dealersecondCard]
        dealersum=dealerfirstCard+dealersecondCard
        startGame(); 
        dealerCardsText.textContent="Cards: "
        dealerSumText.textContent="Sum: "
        dealerisAlive=false
        
    }
   else{
    message.innerText=("You are already in a game")
   }
}

function dealerTurn(){
    if(isAlive==true){
        message.innerText=("Dealer Turn");
        dealerisAlive=true
       
        dealerRenderGame();





    }
    else{
        message.innerText=("You have lost you cant stand")
    }
    

}


function dealerRenderGame(){

    dealerCardsText.textContent="Cards: "
    for(i=0;i<dealercards.length;i++){
        dealerCardsText.textContent+=dealercards[i]+"  "
    }
    dealerSumText.textContent="Sum: "+dealersum
    dealercardsshow=true
    
    if(dealersum<17){
        dealerNewCard()
        
        
    }
    else if (dealersum == 21){
        message.innerText=("Dealer got black jack!!")
        dealerhasBlackJack=true
        
    }
    
    else if(dealersum>21){
        message.innerText=("You win")
        dealerisAlive=false
        
    }
    checkWinner()
}

function dealerNewCard(){
    if(dealerisAlive==true && dealerhasBlackJack==false){
        let newCard=getRandomCard()
        dealercards.push(newCard)
        dealersum+=newCard
        dealerRenderGame();
    }

}

function checkWinner(){

    if(dealerisAlive==true){
        if(dealersum>sum){
            message.innerText=("Dealer Win you lose")
            isAlive=false
        }
        else if(dealersum<sum){
            message.innerText=("You Win")
            dealerisAlive=false
        }
        else{
            message.innerText=("Take your money back its a draw")
            isAlive=false
            dealerisAlive=false
    
        }
    }

    

}



function getRandomCard(){
    let result=Math.floor(Math.random()*13) +1
    if(result==1)
    return 11;
    else if (result>10)
    return 10;
    else return result
}