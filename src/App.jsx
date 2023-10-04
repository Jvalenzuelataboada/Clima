import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherContainer from './components/WeatherContainer';


function App() {
  const [weather, setWeather] = useState(null)

  const [cityName, setCityName] = useState('san isidro')

  const success = (pos) =>{
    console.log(pos);
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "a68f8433dbff835ef1d6cd8694fab847"
    
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(( {data }) => setWeather(data))
      .catch((err) => console.log(err))
    }

    const success1 = () =>{
      const API_KEY = "a68f8433dbff835ef1d6cd8694fab847"
      

      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        )
        .then(( {data }) => setWeather(data))
        .catch((err) => console.log(err))
      }

    const handleCity = ({value}) => {
      setCityName(value)
    }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  const handleDark = () => {
    let element = document.body;
    element.classList.toggle("dark");
}
  return (

    <main className='font-["Lato"] justify-center items-center min-h-screen
    bg-blue-900 text-white px-2 grid dark:bg-sky-300'>
      
      <div className='grid p-2 gap-3'>
        <button type="button" id="toggle" onClick={handleDark} className='bg-white rounded-md flex flex-auto text-zinc-950 justify-center p-1'>Dia / Noche</button>
         <input onChange={handleCity} type="search" className='text-black' />
      </div>
      {
        weather === null ? <h3>Cargando(Tiene que permitir la localizacion)...</h3> : <WeatherContainer weather={weather}/>
      }
    </main>
  )
}

export default App
