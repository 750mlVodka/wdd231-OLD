const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
myHumidity = document.querySelector('#humidity')

const myKey = "a9d27d957846390b0fb35a4a9c48bf56"
const myLat = "18.815639"
const myLong = "-98.948605"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello');
    myTown.innerHTML = data.name;
    myTemperature.innerHTML = `<strong>Temperature: </strong>${data.main.temp} &deg;C`;
    myDescription.innerHTML = `<strong>Description: </strong>${data.weather[0].description};`
    myHumidity.innerHTML = `<strong>Humidity: </strong>${data.main.humidity}%`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute(`src`, iconsrc)
    myGraphic.setAttribute(`alt`, data.weather[0].description)
}
apiFetch();

// Forecast Weather

const myForecast = document.querySelector(`#forecast`)


const myForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function fetchForecast() {
    try {
        const response = await fetch(myForecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log('Forecast data:', data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    forecastList.slice(0, 3).forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

        const description = forecast.weather[0].description;
        const temp = forecast.main.temp;

        const card = document.createElement('div');
        card.innerHTML = `
            <h4>${dayName}</h4>
            <p>${temp}&deg;C</p>
            <p>${description}</p>            
        `;
        myForecast.appendChild(card);
    });
}


fetchForecast();