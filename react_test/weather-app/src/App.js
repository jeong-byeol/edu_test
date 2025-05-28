import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherBox2 from './components/WeatherBox2';

function App() {
  return (
    <div>
      <h1>🌤️ Weather App</h1>
      
      <WeatherBox defaultCity='Tokyo' />
      <WeatherBox2 defaultCity='Seoul' />
    </div>

    
  );
}

export default App;
