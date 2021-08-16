import { useCallback } from 'react';
import { WEATHER_API_ORIGIN } from '../Utils/constants';
import { httpFetchJson2 } from '../Utils';
import { Forecast, PointProperties } from '../Utils/forecast';

interface AsyncResponse<T> {
  data?: T;
  error?: Error;
}

interface WeatherAPI {
  getForecastProperties: (latitude: number, longitude: number) => Promise<AsyncResponse<PointProperties>>;
  getForecast: (url: string) => Promise<AsyncResponse<Forecast>>;
}

export default function useWeatherApi(): WeatherAPI {
  const getForecastProperties = useCallback(
    async (latitude: number, longitude: number): Promise<AsyncResponse<PointProperties>> => {
      const [data, error] = await httpFetchJson2(`${WEATHER_API_ORIGIN}/points/${latitude},${longitude}`);
      if (data?.properties) {
        return { data: data.properties as PointProperties, error: undefined };
      }
      return { data: undefined, error: error as Error };
    },
    []
  );

  const getForecast = useCallback(async (url: string): Promise<AsyncResponse<Forecast>> => {
    const [data, error] = await httpFetchJson2(url);
    if (data?.properties) {
      return {
        data: data.properties,
        error: undefined,
      };
    }
    return {
      data: undefined,
      error: error as Error,
    };
  }, []);

  return { getForecastProperties, getForecast };
}
