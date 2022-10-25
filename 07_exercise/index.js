const weekDaysNumbers = [7,4,6,3,2];

const input = document.querySelector('.input');
input.innerHTML = weekDaysNumbers.join(', ');
const output = document.querySelector('.output');


const weekNumbersToWords = () => { 
    console.log(8);

    for (let i = 0; i < weekDaysNumbers.length; i += 1) { 
        if (weekDaysNumbers[i] == 1) { 
                weekDaysNumbers.splice(i, 1, 'Montag');
        } else if (weekDaysNumbers[i] == 2) { 
                weekDaysNumbers.splice(i, 1, 'Dienstag');
            } else if (weekDaysNumbers[i] == 3) { 
                weekDaysNumbers.splice(i, 1, 'Mittwoch');
            } else if (weekDaysNumbers[i] == 4) { 
                weekDaysNumbers.splice(i, 1, 'Donnerstag');
            } else if (weekDaysNumbers[i] == 5) { 
                weekDaysNumbers.splice(i, 1, 'Freitag');
            } else if (weekDaysNumbers[i] == 6) { 
                weekDaysNumbers.splice(i, 1, 'Samstag');
            } else if (weekDaysNumbers[i] == 7) { 
                weekDaysNumbers.splice(i, 1, 'Sonntag');
        }
    }
 
    
    
 output.innerHTML = weekDaysNumbers.join(', ');
}
weekNumbersToWords();