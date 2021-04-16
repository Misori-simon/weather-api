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
  const city = document.createElement('h3');
  city.classList.add('list-form');
  resultContainer.appendChild(city);
  city.textContent = `Sorry, data for ${cityName} is unavailable`;
};

const displayResult = (result, tempUnit) => {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
  const city = document.createElement('h3');
  city.classList.add('list-form');
  resultContainer.appendChild(city);
  city.textContent = result.city;

  const temp = document.createElement('p');
  temp.classList.add('list-form');
  resultContainer.appendChild(temp);
  temp.innerHTML = addUnit(result.temp, `&#176;${tempUnit}`);

  const tempRange = document.createElement('p');
  tempRange.classList.add('list-form');
  resultContainer.appendChild(tempRange);
  tempRange.innerHTML = addUnit(result.tempRange, `&#176;${tempUnit}`);

  const pressure = document.createElement('p');
  pressure.classList.add('list-form');
  resultContainer.appendChild(pressure);
  pressure.textContent = addUnit(result.pressure, 'hPa');

  const humidity = document.createElement('p');
  humidity.classList.add('list-form');
  resultContainer.appendChild(humidity);
  humidity.textContent = addUnit(result.humidity, '%');

  const cloudState = document.createElement('p');
  cloudState.classList.add('list-form');
  resultContainer.appendChild(cloudState);
  cloudState.textContent = result.cloudState;

  const cloudStateDesc = document.createElement('p');
  cloudStateDesc.classList.add('list-form');
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
  form.classList.add('list-form');
  formContainer.appendChild(form);

  const city = document.createElement('input');
  city.placeholder = 'Enter City';
  form.appendChild(city);

  const tempKelvinLabel = document.createElement('label');
  tempKelvinLabel.textContent = 'Kelvin';
  form.appendChild(tempKelvinLabel);

  const tempKelvin = document.createElement('input');
  tempKelvin.type = 'radio';
  tempKelvin.name = 'temp';
  tempKelvin.value = 'standard';
  tempKelvin.checked = true;
  form.appendChild(tempKelvin);

  const tempCelciusLabel = document.createElement('label');
  tempCelciusLabel.textContent = 'Celcius';
  form.appendChild(tempCelciusLabel);

  const tempCelcius = document.createElement('input');
  tempCelcius.type = 'radio';
  tempCelcius.name = 'temp';
  tempCelcius.value = 'metric';
  form.appendChild(tempCelcius);

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
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${appId}`, { mode: 'cors' });
  const json = await response.json();
  return processData(json);
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

// console.log(getCityWeather('london', 'metric'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvd2VhdGhlcl9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLG9DQUFvQyxNQUFNLEVBQUUsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEVBQUUsU0FBUzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EseURBQXlELEVBQUUsU0FBUzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekgxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUIsS0FBSyxtQkFBbUI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GLEtBQUssU0FBUyxLQUFLLFNBQVMsTUFBTSxJQUFJLGVBQWU7QUFDeEk7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQ3BCOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ1o7O0FBRS9COztBQUVBLDZDQUFVLENBQUMsaURBQWM7O0FBRXpCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cbmNvbnN0IGFkZFVuaXQgPSAodmFsdWUsIHVuaXQpID0+IGAke3ZhbHVlfSR7dW5pdH1gO1xuXG5jb25zdCBkaXNwbGF5RXJyb3JNZXNzYWdlID0gKGNpdHlOYW1lKSA9PiB7XG4gIGNvbnN0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2l0eS5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICBjaXR5LnRleHRDb250ZW50ID0gYFNvcnJ5LCBkYXRhIGZvciAke2NpdHlOYW1lfSBpcyB1bmF2YWlsYWJsZWA7XG59O1xuXG5jb25zdCBkaXNwbGF5UmVzdWx0ID0gKHJlc3VsdCwgdGVtcFVuaXQpID0+IHtcbiAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjaXR5LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIGNpdHkudGV4dENvbnRlbnQgPSByZXN1bHQuY2l0eTtcblxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIHRlbXAuaW5uZXJIVE1MID0gYWRkVW5pdChyZXN1bHQudGVtcCwgYCYjMTc2OyR7dGVtcFVuaXR9YCk7XG5cbiAgY29uc3QgdGVtcFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZW1wUmFuZ2UuY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIHJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wUmFuZ2UpO1xuICB0ZW1wUmFuZ2UuaW5uZXJIVE1MID0gYWRkVW5pdChyZXN1bHQudGVtcFJhbmdlLCBgJiMxNzY7JHt0ZW1wVW5pdH1gKTtcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJlc3N1cmUuY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIHJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSk7XG4gIHByZXNzdXJlLnRleHRDb250ZW50ID0gYWRkVW5pdChyZXN1bHQucHJlc3N1cmUsICdoUGEnKTtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIHJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYWRkVW5pdChyZXN1bHQuaHVtaWRpdHksICclJyk7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY2xvdWRTdGF0ZS5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGUpO1xuICBjbG91ZFN0YXRlLnRleHRDb250ZW50ID0gcmVzdWx0LmNsb3VkU3RhdGU7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNsb3VkU3RhdGVEZXNjLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRTdGF0ZURlc2MpO1xuICBjbG91ZFN0YXRlRGVzYy50ZXh0Q29udGVudCA9IHJlc3VsdC5jbG91ZFN0YXRlRGVzYztcblxuICBjb25zdCBjbG91ZFN0YXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjbG91ZFN0YXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgY2xvdWRTdGF0ZUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmVzdWx0LmNsb3VkU3RhdGVJY29ufUAyeC5wbmdgO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRTdGF0ZUljb24pO1xufTtcblxuY29uc3QgY2xlYXJGb3JtID0gKGZpZWxkKSA9PiB7XG4gIGZpZWxkLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKGZuLCBhcHBJZCkgPT4ge1xuICBsZXQgdW5pdCA9ICcnO1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICBmb3JtQ29udGFpbmVyLmlkID0gKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNpdHkucGxhY2Vob2xkZXIgPSAnRW50ZXIgQ2l0eSc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eSk7XG5cbiAgY29uc3QgdGVtcEtlbHZpbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGVtcEtlbHZpbkxhYmVsLnRleHRDb250ZW50ID0gJ0tlbHZpbic7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGVtcEtlbHZpbkxhYmVsKTtcblxuICBjb25zdCB0ZW1wS2VsdmluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGVtcEtlbHZpbi50eXBlID0gJ3JhZGlvJztcbiAgdGVtcEtlbHZpbi5uYW1lID0gJ3RlbXAnO1xuICB0ZW1wS2VsdmluLnZhbHVlID0gJ3N0YW5kYXJkJztcbiAgdGVtcEtlbHZpbi5jaGVja2VkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wS2VsdmluKTtcblxuICBjb25zdCB0ZW1wQ2VsY2l1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGVtcENlbGNpdXNMYWJlbC50ZXh0Q29udGVudCA9ICdDZWxjaXVzJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wQ2VsY2l1c0xhYmVsKTtcblxuICBjb25zdCB0ZW1wQ2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRlbXBDZWxjaXVzLnR5cGUgPSAncmFkaW8nO1xuICB0ZW1wQ2VsY2l1cy5uYW1lID0gJ3RlbXAnO1xuICB0ZW1wQ2VsY2l1cy52YWx1ZSA9ICdtZXRyaWMnO1xuICBmb3JtLmFwcGVuZENoaWxkKHRlbXBDZWxjaXVzKTtcblxuICBjb25zdCB0ZW1wVW5pdCA9ICgpID0+IHtcbiAgICBpZiAodGVtcENlbGNpdXMuY2hlY2tlZCkge1xuICAgICAgdW5pdCA9ICdDJztcbiAgICAgIHJldHVybiB0ZW1wQ2VsY2l1cy52YWx1ZTtcbiAgICB9XG4gICAgdW5pdCA9ICdLJztcbiAgICByZXR1cm4gdGVtcEtlbHZpbi52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuLnRleHRDb250ZW50ID0gJ2NoZWNrIGZvcmVjYXN0JztcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbihjaXR5LnZhbHVlLCB0ZW1wVW5pdCgpLCBhcHBJZCk7XG4gICAgICBkaXNwbGF5UmVzdWx0KHJlc3VsdCwgdW5pdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoY2l0eS52YWx1ZSk7XG4gICAgfVxuICAgIGNsZWFyRm9ybShjaXR5KTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XG4iLCJjb25zdCBwcm9jZXNzRGF0YSA9IChqc29uKSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSB7fTtcbiAgcmVzdWx0cy5jaXR5ID0ganNvbi5uYW1lO1xuICByZXN1bHRzLnRlbXAgPSBqc29uLm1haW4udGVtcDtcbiAgcmVzdWx0cy50ZW1wUmFuZ2UgPSBgJHtqc29uLm1haW4udGVtcF9taW59IC0gJHtqc29uLm1haW4udGVtcF9tYXh9YDtcbiAgcmVzdWx0cy5wcmVzc3VyZSA9IGpzb24ubWFpbi5wcmVzc3VyZTtcbiAgcmVzdWx0cy5odW1pZGl0eSA9IGpzb24ubWFpbi5odW1pZGl0eTtcbiAgcmVzdWx0cy5jbG91ZFN0YXRlID0ganNvbi53ZWF0aGVyWzBdLm1haW47XG4gIHJlc3VsdHMuY2xvdWRTdGF0ZURlc2MgPSBqc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIHJlc3VsdHMuY2xvdWRTdGF0ZUljb24gPSBqc29uLndlYXRoZXJbMF0uaWNvbjtcblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmNvbnN0IGdldENpdHlXZWF0aGVyID0gYXN5bmMgKGNpdHksIHVuaXQsIGFwcElkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHthcHBJZH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHByb2Nlc3NEYXRhKGpzb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2l0eVdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRDaXR5V2VhdGhlciBmcm9tICcuL3dlYXRoZXJfYXBpJztcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vZG9tJztcblxuY29uc3QgYXBwSWQgPSAnZjI1MjZhYWJlZWI3NzdhZDNmYmI3Nzc4NDJiN2M1MWUnO1xuXG5jcmVhdGVGb3JtKGdldENpdHlXZWF0aGVyLCBhcHBJZCk7XG5cbi8vIGNvbnNvbGUubG9nKGdldENpdHlXZWF0aGVyKCdsb25kb24nLCAnbWV0cmljJykpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==