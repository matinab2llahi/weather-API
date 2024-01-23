let btnCopy = document.querySelector(".navgyor_copy")
let btnPeste = document.querySelector(".navgyor_paste")
let btnButtry = document.querySelector(".navgyor_buttry")
////_____copy_____///////
btnCopy.addEventListener("click", ()=>{
    let textCopy = "<p>hello user new</p>"

    window.navigator.clipboard.writeText(textCopy)
})

////////___last peate__///////

btnPeste.addEventListener("click", ()=>{
    if(window.navigator.clipboard){
        window.navigator.clipboard.readText().then(res => console.log("last paste : ",res))
    }
})

////___get buttry_____/////
btnButtry.addEventListener("click", ()=>{
    if(navigator.getBattery){
        window.navigator.getBattery().then(res=>console.log(res))
    }
})





//    userAgent === appVersion   ///
// navigator.appVersion.split(" ")[12].split("/")[0]
// navigator.userAgent.match(/chrome/i)




////method reduce////
let num = ["ali" , "hassan", "ali", "reza", "ali"]
let obj = null

let sum = num.reduce((ferstVal, currentVal)=>{
    return {...ferstVal, [currentVal] : (ferstVal[currentVal] || 0 ) + 1}
}, {})
console.log(sum);
let list = [
    [3, 6],
    [1,8,4],
    [2,4,0],
    [0,4,3],
    [2,6,9]
]


let tets =  list.reduce((arry, currentVal)=>{
    // return arry.concat(currentVal)
    return [...arry , ...currentVal]
})
console.log(tets);



let numbers = [
    19_000 , 16 , 17,18_000
]

let max = null
let testmax2 = numbers.reduce((frst , currnt)=>{
    console.log(frst , currnt)
    if (currnt > max){
        max = currnt
    }
    if (frst > max){
        max = frst
    }
    return currnt
})
console.log(max);


let testmax3 = numbers.reduce((frst, currnt)=>{
    if(frst < currnt){
        return currnt
    }else{
        return frst
    }
}, 0)
console.log(testmax3);