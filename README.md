Weather Monitoring System API
Overview
This API suite enables effective weather data management and forecasting. It offers CRUD operations, weather forecast fetching based on geographic coordinates, and setting min/max temperature thresholds for alerts.

Key Features
Basic CRUD Operations: Manage weather data entries.
Weather Forecast Fetching: Access real-time weather information by city name or coordinates.
Temperature Alerts: Set and receive alerts based on temperature thresholds.
Getting Started
Prerequisites: Ensure you have Node.js and a database (e.g., MongoDB) installed.
Installation: Clone the repository and run npm install to install dependencies.
Environment Setup: Set your environment variables in a .env file, including your database connection and any third-party API keys (e.g., OpenWeatherMap API key).
Running the Application
Start the server with npm start. The API will be available at http://localhost:3000.
API Endpoints
addLocation: Save searched location data.

Method: POST
Endpoint: /location/add
Body: { "name": "Location Name", "lat": Latitude, "lon": Longitude }
getAllLocations: Fetch all saved locations.

Method: GET
Endpoint: /location/getAll
getWeatherForecast: Retrieve weather forecast.

Method: GET
Endpoint: /weather/forecast
Query Params: lat, lon, days
saveMinMaxTemp: Set temperature alerts.

Method: POST
Endpoint: /temp/setMinMax
Body: { "min_temp": MinTemp, "max_temp": MaxTemp, "lat": Latitude, "lon": Longitude }
getMinMaxTemp: Get temperature data with deviations.

Method: GET
Endpoint: /temp/getMinMax
Support
For any issues or questions, refer to our FAQ or contact support.

This README provides a basic guide to get started with the Weather Monitoring System API, covering installation, setup, and usage of key endpoints. Adjust and 
