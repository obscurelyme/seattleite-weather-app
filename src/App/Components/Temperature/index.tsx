import React from 'react';

import { Period } from '../Utils/forecast';

type TemperatureProps = Pick<Period, 'temperature' | 'temperatureUnit'>;

export default function Temperature({ temperature, temperatureUnit }: TemperatureProps): React.ReactElement {
  return (
    <span>
      {temperature}&#176; {temperatureUnit}
    </span>
  );
}
