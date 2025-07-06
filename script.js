
const numInput1 = document.getElementById("num1")
const numInput2 = document.getElementById("num2")

const resultDiv = document.getElementById("result")

const historyList = document.getElementById("history")


 document.getElementById("addbtn").addEventListener("click", function(){
    calculate ('+')
 })

document.getElementById("subbtn").addEventListener("click",function() {
    calculate ('-')
})

 document.getElementById("mulbtn").addEventListener("click", function(){
    calculate ('*')
 })
document.getElementById("divebtn").addEventListener("click", function() {
    calculate('/')
})

document.getElementById("historydltbtn").addEventListener("click", () => {
    historyList.innerHTML = "";
})


function calculate(operator) {
    const num1 = parseFloat(numInput1.value)
    const num2 = parseFloat(numInput2.value)

    if(isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Resutl: Please enter valid numbers!";
        return;
    }

    let result;
    let expression;
    switch(operator) {
        case '+':
        result = num1 + num2;
        expression = `${num1}+${num2} = ${result}`;
        break;

        case '-':
            result = num1 - num2;
            expression = `${num1} - ${num2} = ${result}`;
            break;

            case '*':
                result = num1 * num2;
                expression = `${num1} * ${num2} = ${result}`;
                break;

                case '/':
                    if(num2 ===0) {
                        resultDiv.textContent = "Result: Devison by zero is not allowed!";
                        return;
                    }
                    result = num1 / num2;
                    expression = `${num1}/${num2} = ${result}`;
    }
    resultDiv.textContent = `Result: ${result}`;
    const li = document.createElement('li')
    li.textContent = expression;
    historyList.appendChild(li)
}