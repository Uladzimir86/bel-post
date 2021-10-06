import { useEffect, useState } from 'react';
import './header.scss';

const Header = () => {
  
  const [weather, setWeather] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate() < 10 ? 0 + String(currentDate.getDate()) : currentDate.getDate();

    setDate(day + ' ' + month + ' ' + year);

    function getPosition(position) {
      const coords = position.coords;
      const key = 'acbbd6d86799ba1603a31338faa84b6c';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`)
        .then((res) => res.json())
        .then((res) => {
          const {main, weather} = res;
          const temp = Math.round(main.temp - 273,15)
          const icon = weather[0].icon;
          const iconDescription = weather[0].description ?? 'Icon depicting current weather';
          return({
            temp,
            icon,
            iconDescription
          })
        })
        .then((data) => setWeather({...data}))
    };
    //navigator.geolocation.getCurrentPosition(getPosition);
  },[])

  useEffect(() => {
    setWatch()
    const watch = setInterval(() => setWatch(), 1000);
    return () => clearInterval(watch);
  },[])

  const setWatch = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? 0 + String(currentDate.getHours()) : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? 0 + String(currentDate.getMinutes()) : currentDate.getMinutes();
    setTime(hours + ':' + minutes)
  }

  return (
    <header className="header">
      <div className="header__left-block">
        {time}
        {(weather.temp !== undefined) && <span className="header__weather">{weather.temp}<sup>o</sup>C 
          <img src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.description} className="header__image"/></span>
        }
      </div>
      <div className="header__right-block">
        {date}
      </div>
    </header>
  )
}

export default Header;