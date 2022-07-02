const API_KEY = APIKEY;

function posOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerHTML =  `In ${data.name},`;
        weather.innerText = `${data.main.temp} C / ${data.weather[0].main}`;
    }); //network 상에서 확인, promise임 시간걸림 
}

function posError(){
    console.log("error");
}

navigator.geolocation.getCurrentPosition(posOk, posError);