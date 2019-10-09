function calculateGPA(grade1, grade2, grade3) {
    return (grade1 + grade2 + grade3) / 3
}

function onButtonPress() {
    // get the total and the rate so we can calc other values
    const grade1 = Number(document.querySelector('#first-field').value)
    const grade2 = Number(document.querySelector('#second-field').value)
    const grade3 = Number(document.querySelector('#third-field').value)
    
    // calc values
    const average = calculateGPA(grade1, grade2, grade3);

    // update label to represent the calculated value
    document.querySelector('#average').innerHTML = `${average.toFixed(2)}`
}

// Add button listen event
document.querySelector('#btn-average').addEventListener('click', onButtonPress)