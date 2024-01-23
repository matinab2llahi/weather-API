let $ = document 
let inputWeather = $.querySelector(".sct_wethr .header__wethr input")
let bodyWeather = $.querySelector(".sct_wethr .body__wethr")
let boxErrorWeather = $.querySelector(".box__error")
let loding = $.querySelector(".loding")
function hideSection(){
    document.querySelectorAll("section").forEach((el)=>{
        el.style.display = "none"
    })
}
hideSection()
function showSection(){
    document.querySelectorAll("section").forEach((el)=>{
        el.style.display = "flex"
    })
}

function lodedAdd(){
    showSection()
    loding.classList.add("loded")
}
function lodedRemove(){
    hideSection()
    loding.classList.remove("loded")
}

inputWeather.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        lodedRemove()
        let serchCity = null
        weatherSerch()
    }
})

let Weathar = null

function weatherSerch(){
    serchCity = inputWeather.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serchCity.trim()}&appid=b41d25256016bba6701105dcd9546f68`)
    .then(rea=>rea.json())
    .then(el=>{
        if(el.cod === 200){
            boxErrorWeather.style.display = "none"
            newWeather(el)
            localStorage.setItem("weather", JSON.stringify(Weathar))
        }else if(el.cod === "404"){
            errorWeather(el)
        }
    })
    .catch((err)=>{console.log(err)})
    .finally(()=>{
        inputWeather.value =""
        lodedAdd()
    })
}





function  errorWeather(el){
    boxErrorWeather.style.display = "flex"
    Weathar = { msg : el.message + ". plesa city weather enter agin", url : "404"}
    bodyWeather.innerHTML = ""
    document.documentElement.style.setProperty("--url-bg", `url(../img/${Weathar.url}.png)`)
    boxErrorWeather.innerHTML = `<h2>${Weathar.msg}</h2>`
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function newWeather(el){
    let dataNew = new Date()
    Weathar = {
        
        temp : Math.floor(+el.main.temp - 273.15),
        tempMax : Math.floor(+el.main.temp_max - 273.15),
        tempMin : Math.floor(+el.main.temp_min - 273.15),
        date :  dataNew.toString().slice(4,15)+ " "+ days[dataNew.getDay()],
        nameCityLong : el.name,
        nameCityShort : el.sys.country,
        waetharNow : el.weather[0].main,
        dateTime : dataNew.getHours()
    }
    if(Weathar.dateTime >= 4 && Weathar.dateTime <= 17){
        document.documentElement.style.setProperty("--url-bg", `url(../img/${Weathar.waetharNow}.jpg)`)
    }else{
        document.documentElement.style.setProperty("--url-bg", `url(../img/${Weathar.waetharNow}Night.jpg)`)
    }

    
    boxErrorWeather.innerHTML = ""
    bodyWeather.innerHTML = ""
    bodyWeather.innerHTML = `
    
    <h2  class="text___name_city"       >${Weathar.nameCityLong} - ${Weathar.nameCityShort}</h2>
    <p   class="text___date_now"        >${Weathar.date}</p>
    <h1  class="text___temp_now"        >${Weathar.temp}&deg;c</h1>
    <h2  class="text___condition"       >${Weathar.waetharNow}</h2>
    <p   class="text___temp_min_and_max">${Weathar.tempMin}&deg;c /  ${Weathar.tempMax}&deg;c</p>
    
    `
}
let nameCity = null
window.addEventListener("load" , ()=>{

    Weathar = JSON.parse(localStorage.getItem("weather"))
    if(window.navigator.onLine){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Weathar.nameCityLong.toLowerCase()}&appid=b41d25256016bba6701105dcd9546f68`)
        .then(rea=>rea.json())
        .then(el=>{
            if(el.cod === 200){
                boxErrorWeather.style.display = "none"
                newWeather(el)
                localStorage.setItem("weather", JSON.stringify(Weathar))
            }else if(el.cod === "404"){
                errorWeather(el)
            }
        })
        .catch((err)=>{console.log(err)})
        .finally(()=>{
            lodedAdd()
            inputWeather.value =""
        })
    }else{
        if(Weathar.dateTime >= 4 && Weathar.dateTime <= 17){
            document.documentElement.style.setProperty("--url-bg", `url(../img/${Weathar.waetharNow}.jpg)`)
        }else{
            document.documentElement.style.setProperty("--url-bg", `url(../img/${Weathar.waetharNow}Night.jpg)`)
        }
    
        bodyWeather.innerHTML = `
        <h2  class="text___name_city"       >${Weathar.nameCityLong} - ${Weathar.nameCityShort}</h2>
        <p   class="text___date_now"        >${Weathar.date}</p>
        <h1  class="text___temp_now"        >${Weathar.temp}&deg;c</h1>
        <h2  class="text___condition"       >${Weathar.waetharNow}</h2>
        <p   class="text___temp_min_and_max">${Weathar.tempMin}&deg;c /  ${Weathar.tempMax}&deg;c</p>
        `
        lodedAdd()
    }
})

/////////////////////////////////////////////////////////////
function UserTest (id,name , age){
    this.getId = function(){
        return id
    }
    this.getName = function(){
        return name
    }
    this.getAge = function(){
        return age
    }
    this.setId = function(newId){
        id = newId
    }
    this.setName = function(newName){
        name = newName
    }
    this.setAge = function(newAge){
        age = newAge
    }
}
let userSetNew = new UserTest(12, "matin", 15)
// console.log(userSetNew.getAge());
/////////////////////////////////////////////
class UserTest2 {
    constructor(id,name){
        // console.log("user new : ", id , name);
        this.newUserId = id
        this.newUserName = name
    }
    ///////meathod in the class////////
    //////___________1___________///////
    ///برای اینکه تابعی ماند بالای درست کنیم این کار را میکنیم///
    phoneFution (phone){
        console.log(this.newUserId , this.newUserName , phone);
    }
}



//set//
let users = [
    new UserTest2(12, "mhd"),
    new UserTest2(1, "hassan"),
    new UserTest2(14, "ali")
]

///////meathod in the class////////
///////_____2______///////
users[1].phoneFution(915_233_6457)

///get////
console.log(users[0].newUserId);

////////////////////////////
class StudentPress{
    constructor(id , name , age){
        this.id = id
        this.name = name
        this.age = age
    }
}

/////////برای اینکه یه سری پارمنت ها مثل اسم ایدی و... /////////
/////////هم برای معلم و دانش اموز دو بار تکرار نشه از////////
//////_______extends_______///////
class TecherPress extends StudentPress{
    constructor(id , name , age, code , phone){
        ////////////////////////
        super(id , name , age)
        this.code= code
        this.phone = phone
    }
}
let techer = [
    new TecherPress(2, "ali", 40, 721737143, 914_135_3634),
    new TecherPress(1, "kivan", 30, 49, 721737143, 914_135_3634),
    new TecherPress(1, "kivan", 30, 49, 721737143, 914_135_3634),
    new TecherPress(7, "amin", 35, 42, 721737143, 914_135_3634)
]
let studens = [
    new StudentPress(14, "matin", 16),
    new StudentPress(12, "amir", 19),
    new StudentPress(19, "reza", 17)
]
console.log(techer.map(el=>console.log(el)));
console.log(studens.map(el=>console.log(el)));
