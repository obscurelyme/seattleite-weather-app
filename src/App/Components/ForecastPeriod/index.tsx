import React from 'react';

import './styles.scss';

import { Period, WindDirection } from '../Utils/forecast';

const WIND_DIRECTIONS = new Map<WindDirection, string>([
  ['N', 'North'],
  ['NNE', 'North-Northeast'],
  ['NE', 'Northeast'],
  ['ENE', 'East-Northeast'],
  ['E', 'East'],
  ['ESE', 'East-Southeast'],
  ['SE', 'Southeast'],
  ['SSE', 'South-Southeast'],
  ['S', 'South'],
  ['SSW', 'South-Southwest'],
  ['SW', 'Southwest'],
  ['WSW', 'West-Southwest'],
  ['W', 'West'],
  ['WNW', 'West-Northwest'],
  ['NW', 'Northwest'],
  ['NNW', 'North-Northwest'],
]);

export default function ForecastPeriod(props: Period): React.ReactElement {
  function calculateWindDirection(abbr: WindDirection): string {
    return `${WIND_DIRECTIONS.get(abbr) ?? abbr} winds`;
  }

  return (
    <div id={`${props.name}-Forecast`} style={{ display: 'inline-block', maxWidth: '400px' }}>
      <h4>
        {props.name} - {props.shortForecast}, {props.temperature}&#176; {props.temperatureUnit}
      </h4>
      <h5 style={{ marginTop: '-1rem' }}>
        Wind: <span title={calculateWindDirection(props.windDirection)}>{props.windDirection}</span> at{' '}
        {props.windSpeed}
      </h5>
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <img
          style={{
            paddingRight: '1rem',
            display: 'inline',
            float: 'left',
          }}
          src={props.icon}
          alt={props.shortForecast}
          title={props.shortForecast}
        />
        <p style={{ display: 'inline' }}>{props.detailedForecast}</p>
      </div>
    </div>
  );
}
