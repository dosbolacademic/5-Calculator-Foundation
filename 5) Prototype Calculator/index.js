
const display = document.getElementById('display')

const addFunction =(input)=>{
    display.value +=input

}

const deleteFunction = () =>{
    display.value = ""
}

const calculateFunction = () =>{
    try{display.value = eval(display.value)}
    catch(error){
        display.value = "ERROR"
        const buttons = document.querySelectorAll('button')
        buttons.forEach(button=>button.disabled=true)
    }
    
}

const removeFunction = () =>{
    display.value = display.value.slice(0,-1)
}