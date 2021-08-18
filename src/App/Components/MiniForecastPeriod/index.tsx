import React, { useState } from 'react';

import './styles.scss';

import Button from '../Button';
import { ListItem, UnorderedList } from '../List';
import Temperature from '../Temperature';
import { Period, TemperatureUnit } from '../Utils/forecast';
import { ChevronLeft, ChevronRight } from '../Icons';

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
    return forecasts;
  };

  const [state] = useState(createForecastPeriods);

  return state;
}

interface MiniForecastProps {
  forecasts?: Period[];
}

export function MiniForecast({ forecasts }: MiniForecastProps): React.ReactElement {
  const maxLeft = 0;
  const minLeft = -248;
  const thresholds = 124; // same size as each period div
  const [marginLeft, setMarginLeft] = useState(0);

  function handleRightClick(): void {
    if (marginLeft - thresholds >= minLeft) {
      setMarginLeft(marginLeft - thresholds);
    }
  }

  function handleLeftClick(): void {
    if (marginLeft + thresholds <= maxLeft) {
      setMarginLeft(marginLeft + thresholds);
    }
  }

  // TODO: Create a better parser to combine the day/night cycles into a single Forecast Period
  return (
    <div style={{ display: 'flex', height: '181px' }}>
      <Button disabled={marginLeft === maxLeft} onClick={handleLeftClick} className="MiniForecastPeriod-ListButton">
        <ChevronLeft />
      </Button>
      <div className="MiniForecastPeriod-ListContainer">
        <UnorderedList
          horizontal
          className="MiniForecastPeriod-List"
          style={{
            marginLeft,
          }}
        >
          {forecasts?.map((forecast, i) =>
            i < 7 ? (
              <ListItem key={i}>
                <MiniForecastPeriod {...forecast} />
              </ListItem>
            ) : null
          )}
        </UnorderedList>
      </div>
      <Button disabled={marginLeft === minLeft} onClick={handleRightClick} className="MiniForecastPeriod-ListButton">
        <ChevronRight />
      </Button>
    </div>
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
      <h5 style={{ margin: '0.1rem', textAlign: 'center' }}>{props.name}</h5>
      <Temperature temperature={props.temperature} temperatureUnit={props.temperatureUnit} />
      <span style={{ textAlign: 'center' }}>{props.shortForecast}</span>
    </div>
  );
}
