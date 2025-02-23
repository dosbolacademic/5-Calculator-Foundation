

const display = document.getElementById('display')

const AddFunction =(input)=>{
    display.value +=input
}

const deleteFunction = (input)=>{
    display.value=""

}

const calculateFunction = () =>{
    try{display.value = eval(display.value)}
    catch(error){
        display.value = "ERROR"
        const buttons = document.querySelectorAll('button')
        buttons.forEach(button=>button.disabled=true)
    }
    
}

const removeElement = ()=>{
    display.value = display.value.slice(0,-1)


}