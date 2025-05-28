import useWeather from '../hooks/useWeather';
import WeatherIcon from './WeatherIcon';

export default function WeatherBox({ defaultCity = 'Tokyo' }) {
  const { data, loading } = useWeather(defaultCity);

  if (loading) return <p>Loading...</p>;
  if (!data)    return <p>Error</p>;

  return (
    <section>
      <h2>{data.city}</h2>
      <WeatherIcon icon={data.icon} />
      <p>{data.temp}°C · {data.desc}</p>
    </section>
  );
}