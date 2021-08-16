export interface Forecast {
  '@context': Array<ContextClass | string>;
  type: 'Feature';
  geometry: PolygonGeometry;
  properties: ForecastProperties;
}

export interface ContextClass {
  '@version': string;
  wx: string;
  geo: string;
  unit: string;
  '@vocab': string;
}

export interface PolygonGeometry {
  type: 'Polygon';
  coordinates: Array<Array<number[]>>;
}

export interface ForecastProperties {
  updated: string;
  units: string;
  forecastGenerator: string;
  generatedAt: string;
  updateTime: string;
  validTimes: string;
  elevation: Elevation;
  periods: Period[];
}

export interface Elevation {
  value: number;
  unitCode: string;
}

export interface Period {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: TemperatureUnit;
  temperatureTrend: null;
  windSpeed: string;
  windDirection: WindDirection;
  /**
   * url to an icon that represents the shortForecast
   */
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export type WindDirection =
  | 'N'
  | 'NNE'
  | 'NE'
  | 'ENE'
  | 'E'
  | 'ESE'
  | 'SE'
  | 'SSE'
  | 'S'
  | 'SSW'
  | 'SW'
  | 'WSW'
  | 'W'
  | 'WNW'
  | 'NW'
  | 'NNW';

export enum TemperatureUnit {
  F = 'F',
  C = 'C',
}

export interface Point {
  '@context': Array<ContextClass | string>;
  id: string;
  type: 'Feature';
  geometry: PointGeometry;
  properties: PointProperties;
}

export interface ContextClass {
  '@version': string;
  wx: string;
  s: string;
  geo: string;
  unit: string;
  '@vocab': string;
  geometry: { [key: string]: string };
  city: string;
  state: string;
  distance: { [key: string]: string };
  bearing: CountyClass;
  value: Value;
  unitCode: { [key: string]: string };
  forecastOffice: CountyClass;
  forecastGridData: CountyClass;
  publicZone: CountyClass;
  county: CountyClass;
}

export interface PointGeometry {
  type: 'Point';
  coordinates: number[];
}

export interface CountyClass {
  '@type': string;
}

export interface Value {
  '@id': string;
}

export interface PointProperties {
  '@id': string;
  '@type': string;
  cwa: string;
  forecastOffice: string;
  gridId: string;
  gridX: number;
  gridY: number;
  forecast: string;
  forecastHourly: string;
  forecastGridData: string;
  observationStations: string;
  relativeLocation: RelativeLocation;
  forecastZone: string;
  county: string;
  fireWeatherZone: string;
  timeZone: string;
  radarStation: string;
}

export interface RelativeLocation {
  type: string;
  geometry: PointGeometry;
  properties: RelativeLocationProperties;
}

export interface RelativeLocationProperties {
  city: string;
  state: string;
  distance: DistanceClass;
  bearing: DistanceClass;
}

export interface DistanceClass {
  value: number;
  unitCode: string;
}
