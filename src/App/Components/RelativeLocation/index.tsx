import React from 'react';

import { PointProperties } from '../Utils/forecast';

export default function RelativeLocation(props: PointProperties): React.ReactElement {
  return (
    <div className="RelativeLocation">
      <h4 className="CityState">
        {props.relativeLocation.properties.city}, {props.relativeLocation.properties.state}
      </h4>
      <h6>{props.timeZone}</h6>
    </div>
  );
}
