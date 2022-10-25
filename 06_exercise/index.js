const weekDays = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

const input = document.querySelector('.input');
input.innerHTML = weekDays;
const output = document.querySelector('.output');
const outputLast = document.querySelector('.output-last');
let sortedWeek = weekDays.sort();
output.innerHTML = sortedWeek;
function getLastValue() { 
    outputLast.innerHTML = sortedWeek[sortedWeek.length - 1];
}

getLastValue()