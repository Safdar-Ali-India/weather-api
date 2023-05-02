import React, { useState, useEffect } from 'react';
import "./style.css";
const Temp = () => {
const [searchValue, setSearchValue] = useState("Bangalore");
// const [getWeather, setGetWeather] = useState("Bangalore");
const getWeather =async()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={a6662cb9-5ec4-47cb-8d0a-7b7a0465edfa}`;
}catch(error){
console.log(error);
}

};
useEffect(() => {
    getWeather();
}, [])

return (
    <>
    <div className='wrap'>
    <div className='search'>
<input type="search" placeholder='search...' 
autoFocus
id='search'
className='searchTerm' value={searchValue} 
onChange={(e)=>setSearchValue(e.target.value)}
/>
        <button className='searchButton' type="button" onClick={getWeather}>Search</button>
    </div>


    </div>

    <article className='widget'>
<div className='weatherIcon'>
<i className={'wi wi-day-sunny'}></i>


</div>
<div className='weatherInfo'>
   <div className='temperature'>
    <span>25.5&deg;</span>
    </div> 
    <div className='description'>
        
    <div className='weatherCondition'>sunny</div>
    <div className='place'>Bangalore, India</div>
    </div>

</div>
<div className='date'>{ new Date().toLocaleString()}</div>
    <div className="extra-temp">
<div className='temp-info-minmax'>
<div className='two-sided-section'>
<p>
    <i className= {"wi wi-sunset"}>
        </i></p>
        <p className='extra-info-leftside'> 18:59 PM <br /> Sunny</p>
    
</div>
<div className='two-sided-section'>
<p>
    <i className= {"wi wi-humidity"}>
        </i></p>
        <p className='extra-info-leftside'> 18:59 PM <br />Humidity</p>
    
</div>
</div>
<div className='weather-extra-info'>
<div className='two-sided-section'>
<p>
    <i className= {"wi wi-rain"}>
        </i></p>
        <p className='extra-info-leftside'> 18:59 PM <br />Pressure</p>
    
</div>
<div className='two-sided-section'>
<p>
    <i className= {"wi wi-strong-wind"}>
        </i></p>
        <p className='extra-info-leftside'> 18:59 PM <br />Speed</p>
    

</div>

</div>

    </div>
    </article>
    
    </>
  )
}

export default Temp;