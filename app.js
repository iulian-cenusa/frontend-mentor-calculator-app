// get interactive elements
let result = document.querySelector('#result')
let buttons = document.querySelectorAll('.btn')

// get elements that change by theme
let mainBackground = document.getElementsByTagName("body")[0] 
let topTitle = document.querySelector('#title')
let themeText = document.querySelector('#theme-text')
let themeToggle = document.querySelector('#theme-toggle')
let themeToggleCircle = document.querySelector('#theme-toggle-circle')
let display = document.querySelector('#display')
let deleteButton = document.querySelector('#DEL')
let resetButton = document.querySelector('#RESET')
let equalButton = document.querySelector('#equal')
let keypad = document.querySelector('#buttons')

// attribution
let attText = document.querySelector('#attribution-text')
let attLinks = document.querySelectorAll('.attribution-link')

// other variables
let currentTheme = localStorage.getItem('prefers-color-scheme')
setTheme()
let operation = ''
let operand = 0

// theme specific functions

function theme1() {
    mainBackground.style.backgroundColor = 'hsl(222, 26%, 31%)'
    mainBackground.style.color = 'white'
    themeToggle.style.backgroundColor = 'hsl(223, 31%, 20%)'
    themeToggle.style.justifyContent = 'flex-start'
    keypad.style.backgroundColor = 'hsl(223, 31%, 20%)'
    display.style.backgroundColor = 'hsl(224, 36%, 15%)'

    // buttons
    buttons.forEach(button => { 
        button.style.backgroundColor = 'hsl(30, 25%, 89%)'
        button.style.boxShadow = '0px 5px 0px 0px hsl(28, 16%, 65%)'
        button.style.color = 'hsl(221, 14%, 31%)'
    })
    
    deleteButton.style.backgroundColor = 'hsl(225, 21%, 49%)'
    deleteButton.style.boxShadow = '0px 5px 0px 0px hsl(224, 28%, 35%)'
    deleteButton.style.color = 'white'

    resetButton.style.backgroundColor = 'hsl(225, 21%, 49%)'
    resetButton.style.boxShadow = '0px 5px 0px 0px hsl(224, 28%, 35%)'
    resetButton.style.color = 'white'

    equalButton.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalButton.style.boxShadow = '0px 5px 0px 0px hsl(6, 70%, 34%)'
    equalButton.style.color = 'white'

    themeToggleCircle.style.backgroundColor = 'hsl(6, 63%, 50%)'

    topTitle.style.color = 'white'
    themeText.style.color = 'white'
    result.style.color = 'white'

    attText.style.color = 'black'
    attLinks.forEach( link => { link.style.color = 'white' } )

}

function theme2() {
    mainBackground.style.backgroundColor = 'hsl(0, 0%, 90%)'
    mainBackground.style.color = 'hsl(60, 10%, 19%)'
    themeToggle.style.backgroundColor = 'hsl(0, 5%, 81%)'
    themeToggle.style.justifyContent = 'center'
    keypad.style.backgroundColor = 'hsl(0, 5%, 81%)'
    display.style.backgroundColor = 'hsl(0, 0%, 93%)'

    // buttons
    buttons.forEach(button => { 
        button.style.backgroundColor = 'hsl(45, 7%, 89%)'
        button.style.boxShadow = '0px 5px 0px 0px hsl(35, 11%, 61%)'
        button.style.color = 'hsl(60, 10%, 19%)'
    })
    
    deleteButton.style.backgroundColor = 'hsl(185, 42%, 37%)'
    deleteButton.style.boxShadow = '0px 5px 0px 0px hsl(185, 58%, 25%)'
    deleteButton.style.color = 'white'

    resetButton.style.backgroundColor = 'hsl(185, 42%, 37%)'
    resetButton.style.boxShadow = '0px 5px 0px 0px hsl(185, 58%, 25%)'
    resetButton.style.color = 'white'

    equalButton.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalButton.style.boxShadow = '0px 5px 0px 0px hsl(25, 99%, 27%)'
    equalButton.style.color = 'white'

    themeToggleCircle.style.backgroundColor = 'hsl(25, 98%, 40%)';

    topTitle.style.color = 'hsl(60, 10%, 19%)'
    themeText.style.color = 'hsl(60, 10%, 19%)'
    result.style.color = 'hsl(60, 10%, 19%)'

    attText.style.color = 'hsl(60, 10%, 19%)'
    attLinks.forEach( link => { link.style.color = 'hsl(185, 42%, 37%)' } )
    
}

function theme3() {
    mainBackground.style.backgroundColor = 'hsl(268, 75%, 9%)'
    mainBackground.style.color = 'hsl(52, 100%, 62%)'
    themeToggle.style.backgroundColor = 'hsl(268, 71%, 12%)'
    themeToggle.style.justifyContent = 'flex-end'
    keypad.style.backgroundColor = 'hsl(268, 71%, 12%)'
    display.style.backgroundColor = 'hsl(268, 71%, 12%)'

    // buttons
    buttons.forEach(button => { 
        button.style.backgroundColor = 'hsl(268, 47%, 21%)'
        button.style.boxShadow = '0px 5px 0px 0px hsl(290, 70%, 36%)'
        button.style.color = 'hsl(52, 100%, 62%)'
    })
    
    deleteButton.style.backgroundColor = 'hsl(281, 89%, 26%)'
    deleteButton.style.boxShadow = '0px 5px 0px 0px hsl(285, 91%, 52%)'
    deleteButton.style.color = 'white'

    resetButton.style.backgroundColor = 'hsl(281, 89%, 26%)'
    resetButton.style.boxShadow = '0px 5px 0px 0px hsl(285, 91%, 52%)'
    resetButton.style.color = 'white'

    equalButton.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equalButton.style.boxShadow = '0px 5px 0px 0px hsl(177, 92%, 70%)'
    equalButton.style.color = 'hsl(198, 20%, 13%)'

    themeToggleCircle.style.backgroundColor = 'hsl(176, 100%, 44%)';

    topTitle.style.color = 'hsl(52, 100%, 62%)'
    themeText.style.color = 'hsl(52, 100%, 62%)'
    result.style.color = 'hsl(52, 100%, 62%)'

    attText.style.color = 'hsl(281, 89%, 26%)'
    attLinks.forEach( link => { link.style.color = 'hsl(52, 100%, 62%)' } )
    
}

// if press keys 1,2,3 then theme will be changed to the corresponding number 
document.addEventListener('keydown', function (event) {
    if (event.key === '1') {
        currentTheme = 1
        theme1()
        localStorage.setItem('prefers-color-scheme', currentTheme )
    }
    if (event.key === '2') {
        currentTheme = 2
        theme2()
        localStorage.setItem('prefers-color-scheme', currentTheme )
    }
    if (event.key === '3') {
        currentTheme = 3
        theme3()
        localStorage.setItem('prefers-color-scheme', currentTheme )
    }
  })

// if theme toggle is pressed
themeToggle.addEventListener("click", ()=>{
    
    if ( currentTheme == 1 ){
        currentTheme = 2
        theme2()
        localStorage.setItem('prefers-color-scheme', currentTheme )
        
    }
    else if ( currentTheme == 2 ){
        currentTheme = 3
        theme3()
        localStorage.setItem('prefers-color-scheme', currentTheme )
        
    }
    else if( currentTheme == 3 ){
        currentTheme = 1
        theme1()
        localStorage.setItem('prefers-color-scheme', currentTheme )
        
    }

})

function setTheme(){
    if ( currentTheme == 1 ){
        theme1()
    }
    else if ( currentTheme == 2 ){
        theme2()
    }
    else if( currentTheme == 3 ){
        theme3()
    }
}

// button handlers

buttons.forEach(
    button =>{
        button.addEventListener("click", buttonHandler)
    }
)

function buttonHandler(){

    // RESET
    if ( this.innerHTML === 'RESET' ){
        result.innerHTML = '0'
        operation = ''
        operand = 0
        return
    }

    // DELETE
    if ( this.innerHTML === 'DEL' ){
        if (result.innerHTML.length == 1){
            result.innerHTML = '0'
            return
        }else{
            result.innerHTML = result.innerHTML.slice(0,-1)
            return
        }
    }

    // plus
    if ( this.innerHTML === '+' ){
        operation = 'add'
        operand = parseFloat(result.innerHTML)
        result.innerHTML = '0'
        return
    }

    // minus
    if ( this.innerHTML === '-' ){
        operation = 'sub'
        operand = parseFloat(result.innerHTML)
        result.innerHTML = '0'
        return
    }

    // multiply
    if ( this.innerHTML === 'x' ){
        operation = 'mul'
        operand = parseFloat(result.innerHTML)
        result.innerHTML = '0'
        return
    }

    // divide
    if ( this.innerHTML === '/' ){
        operation = 'div'
        operand = parseFloat(result.innerHTML)
        result.innerHTML = '0'
        return
    }

    // point
    if ( this.innerHTML === '.' ){
        if ( result.innerHTML.indexOf('.') > -1 ){
            return
        }else{
            result.innerHTML += '.'
            return
        }
    }

    // zero
    if ( this.innerHTML === '0' ){
        if ( result.innerHTML === '0'){
            return
        }else{
            result.innerHTML += this.innerHTML
            return
        }
    }

    //equal
    if ( this.innerHTML === '='){
        switch ( operation ){
            case 'add':
                result.innerHTML = (operand + parseFloat( result.innerHTML)).toFixed(2)
                break
            case 'sub':
                result.innerHTML = (operand - parseFloat( result.innerHTML)).toFixed(2)
                break
            case 'mul':
                result.innerHTML = (operand * parseFloat( result.innerHTML)).toFixed(2)
                break           
            case 'div':
                // div by 0
                if ( result.innerHTML === '0' ){
                    result.innerHTML = '0'
                }else{
                    result.innerHTML = (operand / parseFloat( result.innerHTML)).toFixed(2)
                }
                break
        }
        return
    }

    if( this.innerHTML !== '0'){
        if ( result.innerHTML === '0'){
            result.innerHTML = this.innerHTML
            return
        }else{
            result.innerHTML += this.innerHTML
            return
        }
    }

}