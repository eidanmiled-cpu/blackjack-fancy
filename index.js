function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min); 
}

randomNumber(2,10);


let cards=[
    {value:randomNumber(2,10), className:"clipped-diamonds"},
    {value:randomNumber(2,10), className:"clipped-hearth"},
    {value:randomNumber(2,10), className:"clipped-clubs"},
    {value:randomNumber(2,10), className:"clipped-spades"},
     {value:randomNumber(10,12), className:"clipped-joker"},
];





let divs=[]
let myBouton=document.getElementById("button")
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let restartBtn=document.getElementById("restart-btn")

let playedCards=[]



myBouton.addEventListener("click", function(){
let randomCards=generateRandomImage(divs)

    document.getElementById("cards-container").appendChild(randomCards)    
playedCards.push(randomCards.value)
let total=0;
for (let i=0;i<playedCards.length;i++){
    total +=playedCards[i];
}
console.log("Card played:",playedCards);
sumEl.textContent="total: "+total
if (total>21){
   
    messageEl.textContent="You lose😬";
myBouton.disabled=true;
}
if (total===21){

    messageEl.textContent="🤑​Blackjack🔥!!!"
    myBouton.disabled=true;
}if (total<21){
   
    messageEl.textContent="take a new card🙃​"
}
});







for (let i=0; i<cards.length;i++){
let div=document.createElement("div")
div.className =cards[i].className;


const cardsValue=document.createElement("span")
cardsValue.textContent=cards[i].value
div.value = cards[i].value;
 cardsValue.style.cssText=`
position: relative;  /* Nécessaire pour top/right/bottom/left */
top:120%;
left:80%;
height:20px;
  
`
div.appendChild(cardsValue)
divs.push(div);

}

function generateRandomImage(){
  if(divs.length === 0) return null; // plus de cartes disponibles
  
    let randomIndex=Math.floor(Math.random()*divs.length);
    let card =divs[randomIndex]
    divs.splice(randomIndex, 1);
return card;
}

restartBtn.addEventListener("click", function () {
  location.reload();
});