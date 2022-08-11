import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}${
    import.meta.env.VITE_KEY
  }`;
  // change env with your own api key

  const inputLocationHandler = (event) => {
    setLocation(event.target.value.trim());
  };

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(url);
      const result = await response.json();

      setData(result);

      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={inputLocationHandler}
          onKeyPress={searchLocation}
          autoFocus
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? (
              <p>
                {data.name}, {data.sys ? data.sys.country : ""}
              </p>
            ) : (
              <div className="location">
                <p>{data.cod}</p>
                <p>{data.message}</p>
              </div>
            )}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}M/S</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
