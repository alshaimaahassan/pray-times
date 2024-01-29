
//date method
let date= new Date().toLocaleDateString()
let day = new Date().getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days.forEach((day,index)=>{
    if(index == new Date().getDay()){
    document.querySelector(".date").innerHTML= day + "  "+date
        }
    }
)

let cities = [
    {
        engName : "Luxor" ,
        isoName :"Al Uqşur"
    },
    {
        engName : "Cairo" ,
        isoName :"Al Qāhirah"
    },
    {
        engName :  "Aswan",
        isoName :"Aswān"
    },
    {
        engName :"Alexandria",
        isoName :"Al Iskandarīyah"
    },
    {
        engName :"Beni Suef",
        isoName :"Banī Suwayf"
    }
]
//fill options method
for(city of cities){
    document.querySelector("#city").innerHTML += `<option>${city.engName}</option>`
}
//change city method
document.getElementById("city").addEventListener("change",function(){
    let theCity =""
    let spanName = ""
    for(let city of cities){
        if(city.engName==this.value){
            theCity = city.isoName
            spanName = city.engName
        }
    }  

    document.getElementById("btn").addEventListener("click",function(){
    getPrayersTime(theCity)
    setCityName(theCity)

})
let setCityName =()=>{
    document.querySelector("span").innerHTML = " "+spanName
}

})
//choose city methods
let getPrayersTime =  (cityName)=>{ 
    let params = {
        country : "EG",
        city : cityName
}

//fill times method
let fillTimeForPrayer = (id, time) =>{
    document.getElementById(id).innerHTML = time;
}   

//prayer API with axios
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params : params
})
.then(function (response) {
    let timings = response.data.data.timings
    fillTimeForPrayer("fajr",timings.Fajr)
    fillTimeForPrayer("sunrise",timings.Sunrise)
    fillTimeForPrayer("dhohr",timings.Dhuhr)
    fillTimeForPrayer("asr",timings.Asr)
    fillTimeForPrayer("maghreb",timings.Maghrib)
    fillTimeForPrayer("isha",timings.Isha)
    console.log(timings)
})
.catch(function (error) {
console.log(error);
    })
}
