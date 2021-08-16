import React, { useState } from 'react';

import './styles.scss';

import { ListItem, UnorderedList } from '../List';
import Temperature from '../Temperature';
import { Period, TemperatureUnit } from '../Utils/forecast';

function useForecastPeriods(): Period[] {
  const createForecastPeriods: () => Period[] = () => {
    const primaryForecast: Period = {
      number: 1,
      name: 'Today',
      startTime: '',
      endTime: '',
      isDaytime: true,
      temperature: 75,
      temperatureUnit: TemperatureUnit.F,
      temperatureTrend: null,
      windSpeed: '3',
      windDirection: 'S',
      icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
      shortForecast: 'Mostly Sunny',
      detailedForecast: 'Lorem ipsum dolor amet...',
    };
    const forecasts: Period[] = [];

    for (let i = 0; i < 7; i++) {
      forecasts.push({ ...primaryForecast });
    }
    console.log('Rendered');
    return forecasts;
  };

  const [state] = useState(createForecastPeriods);

  return state;
}

export function MiniForecast(): React.ReactElement {
  const forecasts = useForecastPeriods();

  return (
    <UnorderedList horizontal>
      {forecasts.map((forecast, i) => (
        <ListItem key={i}>
          <MiniForecastPeriod {...forecast} />
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default function MiniForecastPeriod(props: Period): React.ReactElement {
  return (
    <div className="MiniForecastPeriod">
      <div className="MiniForecastPeriod-Icon">
        <img src={props.icon} alt={props.shortForecast} title={props.shortForecast} />
        <img
          src="https://api.weather.gov/icons/land/night/sct?size=medium"
          alt={props.shortForecast}
          title={props.shortForecast}
        />
      </div>
      <h4>
        {props.name} - <Temperature temperature={props.temperature} temperatureUnit={props.temperatureUnit} />
      </h4>
      <span>{props.shortForecast}</span>
    </div>
  );
}
