import React from 'react';
import useWeatherApi from '../Hooks/useWeatherApi';

import './styles.scss';

import Button from '../Button';
import ForecastPeriod from '../ForecastPeriod';
import { getGeolocation } from '../Utils';
import { ListItem, UnorderedList } from '../List';
import RelativeLocation from '../RelativeLocation';
import Greeting from '../Greeting';
import { MiniForecast } from '../MiniForecastPeriod';

export default function Main(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [forecast, setForecast] = React.useState<any>();
  const [point, setPoint] = React.useState<any>();
  const { getForecastProperties, getForecast } = useWeatherApi();

  async function handleClick() {
    setLoading(true);
    const [latitude, longitude] = await getGeolocation();
    const { data, error } = await getForecastProperties(latitude, longitude);
    if (error) {
      setError(true);
      console.error(error);
      return;
    }
    setPoint(data);
    const forecastResults = await getForecast(data?.forecast ?? '');
    if (forecastResults.error) {
      setError(true);
      console.error(forecastResults.error);
      return;
    }
    setForecast(forecastResults.data);
    setLoading(false);
  }

  return (
    <main>
      <div>
        <Greeting />
        <Button aria-label="Fetch Weather Report" onClick={handleClick} loading={loading} disabled={loading}>
          Fetch my weather report
        </Button>
        {forecast && <MiniForecast forecasts={forecast.periods} />}
      </div>

      {/* {forecast && (
        <div>
          <RelativeLocation {...point} />
          <h6>Updated: {new Date(forecast.generatedAt).toLocaleTimeString()}</h6>
          <UnorderedList>
            {forecast.periods.map((period: any) => {
              return (
                <ListItem key={period.number}>
                  <ForecastPeriod {...period} />
                </ListItem>
              );
            })}
          </UnorderedList>
        </div>
      )} */}

      {error && (
        <div id="WebserviceErrors" className="error">
          <strong>
            There was an error connecting to the National Weather Service. If you are unsure of an error, please check
            your internet connection.
          </strong>
        </div>
      )}
    </main>
  );
}
