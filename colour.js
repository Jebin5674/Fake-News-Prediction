function changeRed(){
    const red=document.getElementById('red');
    red.style.backgroundColor="red";
    document.body.style.backgroundColor="red";
}
function changeBlue(){
    const blue=document.getElementById('blue');
    blue.style.backgroundColor="blue";
    document.body.style.backgroundColor="blue";
    
}

function changeGreen(){
    const green=document.getElementById('green');
    green.style.backgroundColor="green";
    document.body.style.backgroundColor="green";
 
}

function reset(){
    const red=document.getElementById('red');
    red.style.backgroundColor="";
    const blue=document.getElementById('blue');
    blue.style.backgroundColor="";
    const green=document.getElementById('green');
    green.style.backgroundColor="";
    document.body.style.backgroundColor="white";
   
}

