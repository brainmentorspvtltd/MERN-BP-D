/*
Think
1. Button click - Attach Event on Button
Event (click , keypress, drag/drop)
Listener
Action 
2. Print X or 0 
We have 9 buttons , we need to attach event on all 9 buttons , need
to listen the events and then take the action

how i find out which button is click out of 9 buttons, because every button
is calling the same function

Add - FInd out the Win and Lose 
Find out the Draw Condition
Build the reset feature
once game over reset after 5 sec, it show countdown then reset
*/
const buttons = document.getElementsByTagName('button');
console.log('All Buttons ', buttons.length);
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', printXorZero);
}
var flag = true;
function printXorZero(){
    // this - keyword (current calling object reference )
    console.log('printXorZero calls', this);
    const currentButton = this;
    if(currentButton.innerText.length==0){
    currentButton.innerText = flag?"X":"0";
    flag = !flag;
    }
}

