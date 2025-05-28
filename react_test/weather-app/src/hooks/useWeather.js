import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4000/api/weather', { params: { city } })
         .then(res => setData(res.data))
         .catch(console.error)
         .finally(() => setLoading(false));
  }, [city]);

  return { data, loading };
}