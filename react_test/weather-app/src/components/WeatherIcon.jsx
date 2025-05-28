import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from 'weather-icons-react';

const Map = { '01': WiDaySunny, '02': WiCloud, '03': WiCloud,
              '04': WiCloud,    '09': WiRain, '10': WiRain,
              '11': WiRain,     '13': WiSnow, '50': WiFog };

const WeatherIcon = React.memo(({ icon, size = 64 }) => {
  const Icon = Map[icon.slice(0,2)] ?? WiDaySunny;
  return <Icon size={size} />;
});

export default WeatherIcon;

