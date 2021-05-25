const DayForecast = (props) => {
    return (
        <>
        
            <div className="day-forecast">
                <div className="day-forecast__header">{props.dailyInfo.weekday}</div>
                <div className="day-forecast__body">
                    <div className={`day-forecast__image weather-${props.dailyInfo.weather}`}></div>
                    <div className="day-forecast__temps">
                        <span className="temp-day">{props.dailyInfo.tempDay}°</span>
                        <span className="temp-night">{props.dailyInfo.tempNight}°</span>
                    </div>
                </div>
            </div>

    </>    
    )
    
}

export default DayForecast;