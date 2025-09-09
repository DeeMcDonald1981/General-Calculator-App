let mainForm = document.getElementById('mainForm');
let subBtn = document.getElementById('submit');

mainForm.addEventListener('submit', addNumbers)
mainForm.addEventListener('change', changeOperator)

function addNumbers(e){
    e.preventDefault();
    let operator = document.getElementById('operator').value
    let output = document.getElementById('output');
    let getNum1 = document.getElementById('num1').value;
    let getNum2 = document.getElementById('num2').value;
    let intNum1 = parseInt(getNum1, 10);
    let intNum2 = parseInt(getNum2, 10);

    if(isNaN(intNum1) || isNaN(intNum2) || operator === "0"){
        output.innerHTML  = /* html */ `
            <span class="error">Please enter valid numbers</span>
            <span class="error">Please select a math operator</span>
        `;
    }else{
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


function changeOperator(){
    let operator = document.getElementById('operator').value;
    if(operator === 'add'){
        subBtn.textContent = 'Add Numbers';
    }else if(operator === 'subtract'){
        subBtn.textContent = 'Subtract Numbers';
    }else if(operator === 'divide'){
        subBtn.textContent = 'Divide Numbers';
    }else if(operator === 'multiply'){
        subBtn.textContent = 'Multiply Numbers';
    }else{;
        subBtn.textContent = 'Add Numbers'
    }
}