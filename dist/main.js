/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const container = document.getElementById('container');

const addUnit = (value, unit) => `${value}${unit}`;

const displayErrorMessage = (cityName) => {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
  const city = document.createElement('p');
  city.classList.add('error');
  resultContainer.appendChild(city);
  city.textContent = `Sorry, data for "${cityName}" is unavailable`;
};

const displayResult = (result, tempUnit) => {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
  const city = document.createElement('h3');
  city.classList.add('city');
  resultContainer.appendChild(city);
  city.textContent = result.city;

  const temp = document.createElement('p');
  temp.classList.add('pill');
  resultContainer.appendChild(temp);
  temp.innerHTML = addUnit(result.temp, `&#176;${tempUnit}`);

  const tempRange = document.createElement('p');
  tempRange.classList.add('pill');
  resultContainer.appendChild(tempRange);
  tempRange.innerHTML = addUnit(result.tempRange, `&#176;${tempUnit}`);

  const pressure = document.createElement('p');
  pressure.classList.add('pill');
  resultContainer.appendChild(pressure);
  pressure.textContent = addUnit(result.pressure, 'hPa');

  const humidity = document.createElement('p');
  humidity.classList.add('pill');
  resultContainer.appendChild(humidity);
  humidity.textContent = addUnit(result.humidity, '%');

  const cloudState = document.createElement('p');
  cloudState.classList.add('pill');
  resultContainer.appendChild(cloudState);
  cloudState.textContent = result.cloudState;

  const cloudStateDesc = document.createElement('p');
  cloudStateDesc.classList.add('pill');
  resultContainer.appendChild(cloudStateDesc);
  cloudStateDesc.textContent = result.cloudStateDesc;

  const cloudStateIcon = document.createElement('img');
  cloudStateIcon.classList.add('list-form');
  cloudStateIcon.src = `http://openweathermap.org/img/wn/${result.cloudStateIcon}@2x.png`;
  resultContainer.appendChild(cloudStateIcon);
};

const clearForm = (field) => {
  field.value = '';
};

const createForm = (fn, appId) => {
  let unit = '';
  const formContainer = document.createElement('div');
  container.appendChild(formContainer);
  formContainer.classList.add('form-container');
  formContainer.id = ('form-container');

  const form = document.createElement('form');
  form.classList.add('form');
  formContainer.appendChild(form);

  const city = document.createElement('input');
  city.classList.add('input-text');
  city.placeholder = 'Enter City';
  form.appendChild(city);

  const tempWraper = document.createElement('div');
  tempWraper.classList.add('temp-wrapper');
  form.appendChild(tempWraper);

  const kelvinWraper = document.createElement('span');
  kelvinWraper.classList.add('temp-unit');
  tempWraper.appendChild(kelvinWraper);

  const tempKelvinLabel = document.createElement('label');
  tempKelvinLabel.textContent = 'Kelvin';
  tempKelvinLabel.setAttribute('for', 'kelvin');
  kelvinWraper.appendChild(tempKelvinLabel);

  const tempKelvin = document.createElement('input');
  tempKelvin.type = 'radio';
  tempKelvin.name = 'temp';
  tempKelvin.value = 'standard';
  tempKelvin.checked = true;
  tempKelvin.id = 'kelvin';
  kelvinWraper.appendChild(tempKelvin);

  const celciusWrapper = document.createElement('span');
  celciusWrapper.classList.add('temp-unit');
  tempWraper.appendChild(celciusWrapper);

  const tempCelciusLabel = document.createElement('label');
  tempCelciusLabel.textContent = 'Celcius';
  tempCelciusLabel.setAttribute('for', 'celcius');
  celciusWrapper.appendChild(tempCelciusLabel);

  const tempCelcius = document.createElement('input');
  tempCelcius.type = 'radio';
  tempCelcius.name = 'temp';
  tempCelcius.value = 'metric';
  tempCelcius.id = 'celcius';
  celciusWrapper.appendChild(tempCelcius);

  const tempUnit = () => {
    if (tempCelcius.checked) {
      unit = 'C';
      return tempCelcius.value;
    }
    unit = 'K';
    return tempKelvin.value;
  };

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'check forecast';
  btn.addEventListener('click', async () => {
    try {
      const result = await fn(city.value, tempUnit(), appId);
      displayResult(result, unit);
    } catch (error) {
      displayErrorMessage(city.value);
    }
    clearForm(city);
  });
  form.appendChild(btn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);


/***/ }),

/***/ "./src/weather_api.js":
/*!****************************!*\
  !*** ./src/weather_api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const getCityWeather = async (city, unit, appId) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${appId}`, { mode: 'cors' });
    const json = await response.json();
    return processData(json);
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCityWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_api */ "./src/weather_api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const appId = 'f2526aabeeb777ad3fbb777842b7c51e';

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(_weather_api__WEBPACK_IMPORTED_MODULE_0__.default, appId);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvd2VhdGhlcl9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLG9DQUFvQyxNQUFNLEVBQUUsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEVBQUUsU0FBUzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EseURBQXlELEVBQUUsU0FBUzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFJMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CLEtBQUssbUJBQW1CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLEtBQUssU0FBUyxLQUFLLFNBQVMsTUFBTSxJQUFJLGVBQWU7QUFDM0k7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDeEI5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDWjs7QUFFL0I7O0FBRUEsNkNBQVUsQ0FBQyxpREFBYyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5jb25zdCBhZGRVbml0ID0gKHZhbHVlLCB1bml0KSA9PiBgJHt2YWx1ZX0ke3VuaXR9YDtcblxuY29uc3QgZGlzcGxheUVycm9yTWVzc2FnZSA9IChjaXR5TmFtZSkgPT4ge1xuICBjb25zdCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY2l0eS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBgU29ycnksIGRhdGEgZm9yIFwiJHtjaXR5TmFtZX1cIiBpcyB1bmF2YWlsYWJsZWA7XG59O1xuXG5jb25zdCBkaXNwbGF5UmVzdWx0ID0gKHJlc3VsdCwgdGVtcFVuaXQpID0+IHtcbiAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjaXR5LmNsYXNzTGlzdC5hZGQoJ2NpdHknKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICBjaXR5LnRleHRDb250ZW50ID0gcmVzdWx0LmNpdHk7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdwaWxsJyk7XG4gIHJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgdGVtcC5pbm5lckhUTUwgPSBhZGRVbml0KHJlc3VsdC50ZW1wLCBgJiMxNzY7JHt0ZW1wVW5pdH1gKTtcblxuICBjb25zdCB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRlbXBSYW5nZS5jbGFzc0xpc3QuYWRkKCdwaWxsJyk7XG4gIHJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wUmFuZ2UpO1xuICB0ZW1wUmFuZ2UuaW5uZXJIVE1MID0gYWRkVW5pdChyZXN1bHQudGVtcFJhbmdlLCBgJiMxNzY7JHt0ZW1wVW5pdH1gKTtcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJlc3N1cmUuY2xhc3NMaXN0LmFkZCgncGlsbCcpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGFkZFVuaXQocmVzdWx0LnByZXNzdXJlLCAnaFBhJyk7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ3BpbGwnKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBhZGRVbml0KHJlc3VsdC5odW1pZGl0eSwgJyUnKTtcblxuICBjb25zdCBjbG91ZFN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjbG91ZFN0YXRlLmNsYXNzTGlzdC5hZGQoJ3BpbGwnKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGUpO1xuICBjbG91ZFN0YXRlLnRleHRDb250ZW50ID0gcmVzdWx0LmNsb3VkU3RhdGU7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNsb3VkU3RhdGVEZXNjLmNsYXNzTGlzdC5hZGQoJ3BpbGwnKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGVEZXNjKTtcbiAgY2xvdWRTdGF0ZURlc2MudGV4dENvbnRlbnQgPSByZXN1bHQuY2xvdWRTdGF0ZURlc2M7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2xvdWRTdGF0ZUljb24uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIGNsb3VkU3RhdGVJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3Jlc3VsdC5jbG91ZFN0YXRlSWNvbn1AMngucG5nYDtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGVJY29uKTtcbn07XG5cbmNvbnN0IGNsZWFyRm9ybSA9IChmaWVsZCkgPT4ge1xuICBmaWVsZC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgY3JlYXRlRm9ybSA9IChmbiwgYXBwSWQpID0+IHtcbiAgbGV0IHVuaXQgPSAnJztcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgZm9ybUNvbnRhaW5lci5pZCA9ICgnZm9ybS1jb250YWluZXInKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2l0eS5jbGFzc0xpc3QuYWRkKCdpbnB1dC10ZXh0Jyk7XG4gIGNpdHkucGxhY2Vob2xkZXIgPSAnRW50ZXIgQ2l0eSc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eSk7XG5cbiAgY29uc3QgdGVtcFdyYXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wV3JhcGVyLmNsYXNzTGlzdC5hZGQoJ3RlbXAtd3JhcHBlcicpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRlbXBXcmFwZXIpO1xuXG4gIGNvbnN0IGtlbHZpbldyYXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAga2VsdmluV3JhcGVyLmNsYXNzTGlzdC5hZGQoJ3RlbXAtdW5pdCcpO1xuICB0ZW1wV3JhcGVyLmFwcGVuZENoaWxkKGtlbHZpbldyYXBlcik7XG5cbiAgY29uc3QgdGVtcEtlbHZpbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGVtcEtlbHZpbkxhYmVsLnRleHRDb250ZW50ID0gJ0tlbHZpbic7XG4gIHRlbXBLZWx2aW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdrZWx2aW4nKTtcbiAga2VsdmluV3JhcGVyLmFwcGVuZENoaWxkKHRlbXBLZWx2aW5MYWJlbCk7XG5cbiAgY29uc3QgdGVtcEtlbHZpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRlbXBLZWx2aW4udHlwZSA9ICdyYWRpbyc7XG4gIHRlbXBLZWx2aW4ubmFtZSA9ICd0ZW1wJztcbiAgdGVtcEtlbHZpbi52YWx1ZSA9ICdzdGFuZGFyZCc7XG4gIHRlbXBLZWx2aW4uY2hlY2tlZCA9IHRydWU7XG4gIHRlbXBLZWx2aW4uaWQgPSAna2VsdmluJztcbiAga2VsdmluV3JhcGVyLmFwcGVuZENoaWxkKHRlbXBLZWx2aW4pO1xuXG4gIGNvbnN0IGNlbGNpdXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjZWxjaXVzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZW1wLXVuaXQnKTtcbiAgdGVtcFdyYXBlci5hcHBlbmRDaGlsZChjZWxjaXVzV3JhcHBlcik7XG5cbiAgY29uc3QgdGVtcENlbGNpdXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRlbXBDZWxjaXVzTGFiZWwudGV4dENvbnRlbnQgPSAnQ2VsY2l1cyc7XG4gIHRlbXBDZWxjaXVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2VsY2l1cycpO1xuICBjZWxjaXVzV3JhcHBlci5hcHBlbmRDaGlsZCh0ZW1wQ2VsY2l1c0xhYmVsKTtcblxuICBjb25zdCB0ZW1wQ2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRlbXBDZWxjaXVzLnR5cGUgPSAncmFkaW8nO1xuICB0ZW1wQ2VsY2l1cy5uYW1lID0gJ3RlbXAnO1xuICB0ZW1wQ2VsY2l1cy52YWx1ZSA9ICdtZXRyaWMnO1xuICB0ZW1wQ2VsY2l1cy5pZCA9ICdjZWxjaXVzJztcbiAgY2VsY2l1c1dyYXBwZXIuYXBwZW5kQ2hpbGQodGVtcENlbGNpdXMpO1xuXG4gIGNvbnN0IHRlbXBVbml0ID0gKCkgPT4ge1xuICAgIGlmICh0ZW1wQ2VsY2l1cy5jaGVja2VkKSB7XG4gICAgICB1bml0ID0gJ0MnO1xuICAgICAgcmV0dXJuIHRlbXBDZWxjaXVzLnZhbHVlO1xuICAgIH1cbiAgICB1bml0ID0gJ0snO1xuICAgIHJldHVybiB0ZW1wS2VsdmluLnZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udHlwZSA9ICdidXR0b24nO1xuICBidG4udGV4dENvbnRlbnQgPSAnY2hlY2sgZm9yZWNhc3QnO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKGNpdHkudmFsdWUsIHRlbXBVbml0KCksIGFwcElkKTtcbiAgICAgIGRpc3BsYXlSZXN1bHQocmVzdWx0LCB1bml0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShjaXR5LnZhbHVlKTtcbiAgICB9XG4gICAgY2xlYXJGb3JtKGNpdHkpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImNvbnN0IHByb2Nlc3NEYXRhID0gKGpzb24pID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICByZXN1bHRzLmNpdHkgPSBqc29uLm5hbWU7XG4gIHJlc3VsdHMudGVtcCA9IGpzb24ubWFpbi50ZW1wO1xuICByZXN1bHRzLnRlbXBSYW5nZSA9IGAke2pzb24ubWFpbi50ZW1wX21pbn0gLSAke2pzb24ubWFpbi50ZW1wX21heH1gO1xuICByZXN1bHRzLnByZXNzdXJlID0ganNvbi5tYWluLnByZXNzdXJlO1xuICByZXN1bHRzLmh1bWlkaXR5ID0ganNvbi5tYWluLmh1bWlkaXR5O1xuICByZXN1bHRzLmNsb3VkU3RhdGUgPSBqc29uLndlYXRoZXJbMF0ubWFpbjtcbiAgcmVzdWx0cy5jbG91ZFN0YXRlRGVzYyA9IGpzb24ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgcmVzdWx0cy5jbG91ZFN0YXRlSWNvbiA9IGpzb24ud2VhdGhlclswXS5pY29uO1xuXG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuY29uc3QgZ2V0Q2l0eVdlYXRoZXIgPSBhc3luYyAoY2l0eSwgdW5pdCwgYXBwSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwcElkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb2Nlc3NEYXRhKGpzb24pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2l0eVdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRDaXR5V2VhdGhlciBmcm9tICcuL3dlYXRoZXJfYXBpJztcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vZG9tJztcblxuY29uc3QgYXBwSWQgPSAnZjI1MjZhYWJlZWI3NzdhZDNmYmI3Nzc4NDJiN2M1MWUnO1xuXG5jcmVhdGVGb3JtKGdldENpdHlXZWF0aGVyLCBhcHBJZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9