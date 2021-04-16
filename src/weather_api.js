const processData = (json) => {
  const results = {};
  results.city = json.name;
  results.temp = json.main.temp;
  results.tempRange = `${json.main.temp_min} - ${json.main.temp_max}`;
  results.pressure = json.main.pressure;
  results.humidity = json.main.humidity;
  results.cloudState = json.weather[0].main;
  results.cloudStateDesc = json.weather[0].description;
  results.cloudStateIcon = json.weather[0].icon;

  return results;
};

const getCityWeather = async (city, unit) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=f2526aabeeb777ad3fbb777842b7c51e`, { mode: 'cors' });
  const json = await response.json();
  return processData(json);
};

export default getCityWeather;
