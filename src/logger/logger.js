// const welcome = ()=>{
//     return 'Welcome to my application. I am <name> and a part of FunctionUp Thorium cohort';
// }

// module.exports.welcome = welcome; 


//Module 1
let url = 'https://www.google.com'

function printMyMessage(message) {
    console.log(message)    
}

function welcome() {
    console.log('Welcome to my application. I am Shivam and a part of FunctionUp Thorium cohort')
}

module.exports.url = url
module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = welcome