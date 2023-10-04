import { useState } from "react"
import WeatherStat from "./WeatherStat"

const WeatherContainer = ({weather}) => {

    const [isCelsius, setisCelsius] = useState(true)

    const changeUnitTemp = (temp) => {
        if(isCelsius){
            // Transformacion a celsius
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return `${celsiusTemp}°C`
        }else{
            // Tranformacion a Farenheit
            const fahrenheit = (((temp - 273.15) * 9/5) + 32).toFixed(1)
            return `${fahrenheit}°F`
        }
    }

    // const weaterIcons = {
    //     "broken clouds": "/clouds.png"
    // }


    const handleChangeUnit = () => {
        setisCelsius(!isCelsius)
    }

    
    
    
  return (
    <section className="text-center gap-5 grid">
      <h3 className="text-xl"> {weather.name}, {weather.sys.country}</h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* Seccion superior  */}
        <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3">
            <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
            <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
            <picture className="m-auto">
                <img src={`/icons/${weather.weather[0].icon}.png`} alt="" />
            </picture>
        </article>

        {/* Seccion inferior  */}
        <article className="grid grid-cols-3 justify-items-center bg-slate-500/40 rounded-2xl
        p-2 py-3 sm:grid-cols-1">
            <WeatherStat icon="/wind1.png" unit="m/s" value={weather.wind.speed} />
            <WeatherStat icon="/humidity.png" unit="%" value={weather.main.humidity} />
            <WeatherStat icon="/presure1.png" unit="hPa" value={weather.main.pressure} />
        </article>

      </div>

        <button className="text-cyan-50 rounded-lg p-1 sm: bg-blue-300 sm:text-zinc-600" onClick={handleChangeUnit}>C° / F° </button>

    </section>
  )
}

export default WeatherContainer
