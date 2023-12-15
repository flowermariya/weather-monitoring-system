# Weather Monitoring System API

## Overview
This API provides effective weather data management and forecasting, including CRUD operations, weather forecasts by coordinates, and temperature alert settings.

## Features
- CRUD Operations for weather data.
- Weather Forecast by city or coordinates.
- Temperature Alerts based on min/max thresholds.

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up `.env` with database and API keys.

## Running the Application
Run `npm start`. The API is at `http://localhost:3000`.

## Endpoints
### addLocation
- POST `/location/add`
- Body: `{ "name": "Location Name", "lat": Latitude, "lon": Longitude }`

### getAllLocations
- GET `/location/getAll`

### getWeatherForecast
- GET `/weather/forecast`
- Params: `lat`, `lon`, `days`

### saveMinMaxTemp
- POST `/temp/setMinMax`
- Body: `{ "min_temp": MinTemp, "max_temp": MaxTemp, "lat": Latitude, "lon": Longitude }`

### getMinMaxTemp
- GET `/temp/getMinMax`

## Support
For support, refer to the FAQ or contact us.

