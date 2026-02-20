let input=document.querySelector("input")

//add values

function advalues(a){
    input.value+=a
}

//clear all value

function clr(b){
    input.value=""
}

//clear single value

function clrsing(c){
    let inputval=input.value
    input.value=inputval.slice(0,inputval.length-1)
}

function maths(d){
    
    input.value=eval(input.value)
}

