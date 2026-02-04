// let city = document.getElementById("cityInput")
// let temp = document.getElementById("temp")
// let feelsLike = document.getElementById("feelsLike")
// let weatherCard = document.getElementById("weatherCard")

// async function getWeather(city) {
//     try {
//         let apiKey = "b92e57938eaebc6ded1fcf3a2f5b4bc3";
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

//         let raw = await fetch(url);
//         if(!raw.ok){
//             throw new Error("City not found")
//         }
//         let result = await raw.json();
//         console.log(`${city} Tempratur is : ${result.main.temp}, feels like : ${result.main.feels_like}, max temperatur : ${result.main.temp_max}, min temperatur : ${result.main.temp_min}, humidity : ${result.main.humidity}, pressure : ${result.main.pressure}, sea level : ${result.main.sea_level}, ground level : ${result.main.grnd_level}`);
//         console.log(`Visibility : ${result.visibility}`);
//         console.log(`Weather : ${result.weather[0].description} `)

//         weatherCard.style.display = "block"

//         temp.innerHTML = `${result.main.temp}`
//         feelsLike.innerHTML = `${result.main.feels_like}`

        
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }
// let btn = document.getElementById("searchBtn")
// btn.addEventListener("click", ()=>{
//     getWeather(cityInput.value)
// })





const apiKey = "b92e57938eaebc6ded1fcf3a2f5b4bc3";

function kToC(k) {
    return (k - 273.15).toFixed(1);
}

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('City not found');
    return res.json();
}

function updateUI(result) {
    const weatherCard = document.getElementById('weatherCard');
    const temp = document.getElementById('temp');
    const feels = document.getElementById('feels');
    const cityName = document.getElementById('cityName');
    const desc = document.getElementById('desc');
    const icon = document.getElementById('icon');
    const minmax = document.getElementById('minmax');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const visibility = document.getElementById('visibility');

    cityName.textContent = `${result.name}, ${result.sys?.country || ''}`;
    desc.textContent = result.weather?.[0]?.description || '';
    if (result.weather?.[0]?.icon) {
        icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
        icon.alt = result.weather[0].description || 'weather icon';
    }

    temp.textContent = kToC(result.main.temp);
    feels.textContent = kToC(result.main.feels_like);
    minmax.textContent = `${kToC(result.main.temp_min)} / ${kToC(result.main.temp_max)}`;
    humidity.textContent = result.main.humidity ?? '--';
    pressure.textContent = result.main.pressure ?? '--';
    visibility.textContent = result.visibility ?? '--';

    weatherCard.classList.remove('hidden');
}

function showError(msg) {
    const cityName = document.getElementById('cityName');
    const desc = document.getElementById('desc');
    const weatherCard = document.getElementById('weatherCard');
    cityName.textContent = msg;
    desc.textContent = '';
    weatherCard.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cityInput');
    const btn = document.getElementById('searchBtn');

    async function handleSearch() {
        const city = input.value.trim();
        if (!city) return;
        try {
            const data = await fetchWeather(city);
            updateUI(data);
        } catch (err) {
            console.error(err);
            showError(err.message || 'Error fetching weather');
        }
    }

    btn.addEventListener('click', handleSearch);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSearch(); });
});


