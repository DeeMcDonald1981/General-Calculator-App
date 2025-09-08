let mainForm = document.getElementById('mainForm');

mainForm.addEventListener('submit', addNumbers)


function addNumbers(e){
    e.preventDefault();
    let operator = document.getElementById('operator').value
    let output = document.getElementById('output');
    let getNum1 = document.getElementById('num1').value;
    let getNum2 = document.getElementById('num2').value;
    let intNum1 = parseInt(getNum1, 10);
    let intNum2 = parseInt(getNum2, 10);
    e.preventDefault();
    if(isNaN(intNum1) || isNaN(intNum2) || operator === "0"){
        console.log('This is not a valid number')
        output.innerHTML  = /* html */ `
            <span class="error">Please enter valid numbers</span>
            <span class="error">Please select a math operator</span>
        `;
        console.log(operator)
        console.log(typeof(intNum1))
        console.log(typeof(intNum2))
    }else{
        console.log(typeof(intNum1))
        console.log(typeof(intNum2))
        console.log(intNum1)
        console.log(intNum2)
        if(operator === 'add'){
        output.innerHTML = /* html */ `
            <span class="success">${intNum1}  +  ${intNum2} =  ${intNum1 + intNum2}</span>
        `;
        }else if(operator === 'subtract'){
        output.innerHTML = /* html */ `
            <span class="success">${intNum1}  -  ${intNum2} =  ${intNum1 - intNum2}</span>
        `;
        }else if(operator === 'multiply'){
        output.innerHTML = /* html */ `
            <span class="success">${intNum1}  x  ${intNum2} =  ${intNum1 * intNum2}</span>
        `;
        }else if(operator === 'divide'){
            let intDivinde = intNum1 / intNum2;
        output.innerHTML = /* html */ `
            <span class="success">${intNum1}  ∻  ${intNum2} =  ${intDivinde.toFixed(2)}</span>
        `;
        }
    }
}
