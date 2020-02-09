
const numbers=document.querySelectorAll(".number")

numbers.forEach((number) => {
    // console.log(number)
    number.addEventListener("click",(event) => {
        // updateScreen(event.target.value)
        updateScreen(currentInput)
    })
    })

const calculatorScreen=document.querySelectorAll(".calculator-screen")

const updateScreen=(number)=>{
   calculatorScreen.value=number
}






let prevInput='0'
let calculationOperator=''
let currentInput="0"

const inputNumber=(number)=>{
    if(currentInput==='0')
    {
       currentInput=number
    }
     else{
         currentInput+=number
     }
}



// number.forEach((number) => {
//     number.addEventListener("click",() => {
//         updateScreen(event.target.value)
//     })
//     //console.log(number)
// })

//     const inputNumber=(number)=>{
//         if(currentInput==='0'){
//             currentInput=number
//         }
//         else{
//             currentInput+=number
//         }
//     }
    const operators=document.querySelectorAll(".operator")
    operators.forEach((operator)=> {
        operator.addEventListener("click", (event) => {
            
            inputOperator(event.target.value)
        })
    })

    const inputOperator = (operator) => {
        
        prevInput=currentInput
        calculationOperator=operator
        currentInput="0"
    }
    const equalSign = document.querySelector('.equal-sign')
    equalSign.addEventListener('click',()=>{
        calculate()
        updateScreen(currentInput)
    })
const calculate = () => {
    let result = 0
    switch(calculationOperator){
        case '+':
            result = parseInt(previnput) + parseInt(currentInput)
            break
            case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            case '/':
            result = parseInt(prevInput) / parseInt(currentInput)            
            break
            default:
                 return
                }
            
                currentInput = result.toString()
                calculationOperator = ''
            }
           

    const clearBtn = document.querySelector('.all-clear')
    clearBtn.addEventListener('click',()=>{
        // console.log('AC button is pressed')
         clearAll()
        updateScreen(currentInput)
    })
    const clearAll = () => {
        prevInput = '0'
        calculationOperator = ''
        currentInput = '0'
    }
 
            
    



