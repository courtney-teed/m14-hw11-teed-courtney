let forecast = {"coord":{"lon":-117.16,"lat":32.72},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":292.31,"pressure":1016,"humidity":63,"temp_min":289.85,"temp_max":295.95},"visibility":16093,"wind":{"speed":1.22,"deg":256.502},"clouds":{"all":75},"dt":1543366560,"sys":{"type":1,"id":5142,"message":0.0132,"country":"US","sunrise":1543415428,"sunset":1543452162},"id":5391811,"name":"San Diego","cod":200};

const weatherWrapper = document.getElementById('forecast');

let currentWeather = document.createTextNode(forecast.weather[0].description);
weatherWrapper.appendChild(currentWeather);