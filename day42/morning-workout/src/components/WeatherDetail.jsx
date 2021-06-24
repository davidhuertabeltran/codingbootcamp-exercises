function WeatherDetail( props ) {
    const {day, min, max, wind, humidity, percipitation} = props.dayWeather;
    return (
        <div>
            <h2>Day: {day}</h2>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p>Wind: {wind}</p>
            <p>Humidity: {humidity}</p>
            <p>Precipitation: {percipitation}</p>
        </div>
    )
}


// function WeatherDetail( props ) {
//     return (
//         <div>
//             <h2>{props.dayWeather.day}</h2>
//             <p>Min: {props.dayWeather.min}</p>
//             <p>Max: {props.dayWeather.max}</p>
//             <p>Wind: {props.dayWeather.wind}</p>
//             <p>Humidity: {props.dayWeather.humidity}</p>
//             <p>Percipitation: {props.dayWeather.percipitation}</p>
//         </div>
//     )
// }

export default WeatherDetail;