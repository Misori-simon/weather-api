import getCityWeather from './weather_api';
import createForm from './dom';

const appId = 'f2526aabeeb777ad3fbb777842b7c51e';

createForm(getCityWeather, appId);

// console.log(getCityWeather('london', 'metric'));
