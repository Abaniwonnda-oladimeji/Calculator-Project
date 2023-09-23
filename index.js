const userInput = document.querySelector('#userInput')
const button = document.querySelectorAll('button')

userInput.value = ''

function press(num){
    if (userInput.value === 'syntax error'){
        userInput.value = ''
    }
    else{
    userInput.value += num;
    }
}
function equal(){
    try{
    userInput.value = eval(userInput.value)
    }
    catch(error){
        userInput.value = 'syntax error'
    }
 
}
function erase(){
userInput.value = ''
}