import { useState } from 'react';
import './App.css';
import Card from "./components/Card"
import { useWeather } from './weatherHooks';

function App() {
  const [inputText, setInputText] = useState("")
  const handleChange = e => {
    setInputText(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setSearch(inputText)
  }
  
  const { weather, setSearch } = useWeather()
  
  return (
    <div className="App">
      <h1>Application!!</h1>
      <div className="search-container">
        <form onSubmit={handleClick}>
          <input
            type="text"
            className="search-input"
            onChange={handleChange}
            value={inputText}
            placeholder="Country name"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <Card weather={weather} />
    </div>
  );
}

export default App;
