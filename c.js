let counterElement = document.getElementById("counterValue");
console.log(counterElement);
console.log(10);
function onIncrement(){
    let pcv = counterElement.textContent;
    let ucv = parseInt(pcv) + 1;
    counterElement.textContent = ucv;

    if (ucv > 0){
        counterElement.style.color = "green";
    } else if (ucv < 0){
        counterElement.style.color = "red";
    } else{
        counterElement.style.color = "black";
    }
}

function onDecrement(){
    let pcv = counterElement.textContent;
    let ucv = parseInt(pcv) - 1;
    counterElement.textContent = ucv;
    if (ucv > 0){
        counterElement.style.color = "green";
    } else if (ucv < 0){
        counterElement.style.color = "red";
    } else{
        counterElement.style.color = "black";
    }

}

function onReset(){
    let ucv = 0;
    counterElement.textContent = ucv;
    if (ucv > 0){
        counterElement.style.color = "green";
    } else if (ucv < 0){
        counterElement.style.color = "red";
    } else{
        counterElement.style.color = "black";
    }

}