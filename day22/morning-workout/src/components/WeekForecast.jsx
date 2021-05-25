import DayForecast from './DayForecast';
import {forecast} from '../forecast.js';

const Week = () => {
    return (
        <>
        <h1 className="title-weather">Weekly Weather Forecast</h1>
        <div className="week-forecast">
            <DayForecast dailyInfo={forecast[0]} />
            <DayForecast dailyInfo={forecast[1]} />
            <DayForecast dailyInfo={forecast[2]} />
            <DayForecast dailyInfo={forecast[3]} />
            <DayForecast dailyInfo={forecast[4]} />
            <DayForecast dailyInfo={forecast[5]} />
            <DayForecast dailyInfo={forecast[6]} />
        </div>
        </>    
    )
}

export default Week;