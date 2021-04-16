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

const displayResult = (result) => {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
  const city = document.createElement('h3');
  city.classList.add('list-form');
  resultContainer.appendChild(city);
  city.textContent = result.city;

  const temp = document.createElement('h3');
  temp.classList.add('list-form');
  resultContainer.appendChild(temp);
  temp.textContent = result.temp;

  const tempRange = document.createElement('h3');
  tempRange.classList.add('list-form');
  resultContainer.appendChild(tempRange);
  tempRange.textContent = result.tempRange;

  const pressure = document.createElement('h3');
  pressure.classList.add('list-form');
  resultContainer.appendChild(pressure);
  pressure.textContent = result.pressure;

  const humidity = document.createElement('h3');
  humidity.classList.add('list-form');
  resultContainer.appendChild(humidity);
  humidity.textContent = result.humidity;

  const cloudState = document.createElement('h3');
  cloudState.classList.add('list-form');
  resultContainer.appendChild(cloudState);
  cloudState.textContent = result.cloudState;

  const cloudStateDesc = document.createElement('h3');
  cloudStateDesc.classList.add('list-form');
  resultContainer.appendChild(cloudStateDesc);
  cloudStateDesc.textContent = result.cloudStateDesc;

  const cloudStateIcon = document.createElement('h3');
  cloudStateIcon.classList.add('list-form');
  resultContainer.appendChild(cloudStateIcon);
  cloudStateIcon.textContent = result.cloudStateIcon;
};

const createForm = (fn, appId) => {
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
      return tempCelcius.value;
    } return tempKelvin.value;
  };

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'check forecast';
  btn.addEventListener('click', async () => {
    console.log(tempUnit());
    const result = await fn(city.value, tempUnit(), appId);
    displayResult(result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvd2VhdGhlcl9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsRzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQixLQUFLLG1CQUFtQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUYsS0FBSyxTQUFTLEtBQUssU0FBUyxNQUFNLElBQUksZUFBZTtBQUN4STtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDcEI5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDWjs7QUFFL0I7O0FBRUEsNkNBQVUsQ0FBQyxpREFBYzs7QUFFekIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuY29uc3QgZGlzcGxheVJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgY29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjaXR5LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIGNpdHkudGV4dENvbnRlbnQgPSByZXN1bHQuY2l0eTtcblxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICB0ZW1wLnRleHRDb250ZW50ID0gcmVzdWx0LnRlbXA7XG5cbiAgY29uc3QgdGVtcFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGVtcFJhbmdlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcFJhbmdlKTtcbiAgdGVtcFJhbmdlLnRleHRDb250ZW50ID0gcmVzdWx0LnRlbXBSYW5nZTtcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcmVzc3VyZTtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICByZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHJlc3VsdC5odW1pZGl0eTtcblxuICBjb25zdCBjbG91ZFN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY2xvdWRTdGF0ZS5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGUpO1xuICBjbG91ZFN0YXRlLnRleHRDb250ZW50ID0gcmVzdWx0LmNsb3VkU3RhdGU7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjbG91ZFN0YXRlRGVzYy5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGVEZXNjKTtcbiAgY2xvdWRTdGF0ZURlc2MudGV4dENvbnRlbnQgPSByZXN1bHQuY2xvdWRTdGF0ZURlc2M7XG5cbiAgY29uc3QgY2xvdWRTdGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjbG91ZFN0YXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcbiAgcmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkU3RhdGVJY29uKTtcbiAgY2xvdWRTdGF0ZUljb24udGV4dENvbnRlbnQgPSByZXN1bHQuY2xvdWRTdGF0ZUljb247XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKGZuLCBhcHBJZCkgPT4ge1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICBmb3JtQ29udGFpbmVyLmlkID0gKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb3JtJyk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNpdHkucGxhY2Vob2xkZXIgPSAnRW50ZXIgQ2l0eSc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eSk7XG5cbiAgY29uc3QgdGVtcEtlbHZpbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGVtcEtlbHZpbkxhYmVsLnRleHRDb250ZW50ID0gJ0tlbHZpbic7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGVtcEtlbHZpbkxhYmVsKTtcblxuICBjb25zdCB0ZW1wS2VsdmluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGVtcEtlbHZpbi50eXBlID0gJ3JhZGlvJztcbiAgdGVtcEtlbHZpbi5uYW1lID0gJ3RlbXAnO1xuICB0ZW1wS2VsdmluLnZhbHVlID0gJ3N0YW5kYXJkJztcbiAgdGVtcEtlbHZpbi5jaGVja2VkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wS2VsdmluKTtcblxuICBjb25zdCB0ZW1wQ2VsY2l1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGVtcENlbGNpdXNMYWJlbC50ZXh0Q29udGVudCA9ICdDZWxjaXVzJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wQ2VsY2l1c0xhYmVsKTtcblxuICBjb25zdCB0ZW1wQ2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRlbXBDZWxjaXVzLnR5cGUgPSAncmFkaW8nO1xuICB0ZW1wQ2VsY2l1cy5uYW1lID0gJ3RlbXAnO1xuICB0ZW1wQ2VsY2l1cy52YWx1ZSA9ICdtZXRyaWMnO1xuICBmb3JtLmFwcGVuZENoaWxkKHRlbXBDZWxjaXVzKTtcblxuICBjb25zdCB0ZW1wVW5pdCA9ICgpID0+IHtcbiAgICBpZiAodGVtcENlbGNpdXMuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIHRlbXBDZWxjaXVzLnZhbHVlO1xuICAgIH0gcmV0dXJuIHRlbXBLZWx2aW4udmFsdWU7XG4gIH07XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdjaGVjayBmb3JlY2FzdCc7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZW1wVW5pdCgpKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbihjaXR5LnZhbHVlLCB0ZW1wVW5pdCgpLCBhcHBJZCk7XG4gICAgZGlzcGxheVJlc3VsdChyZXN1bHQpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImNvbnN0IHByb2Nlc3NEYXRhID0gKGpzb24pID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICByZXN1bHRzLmNpdHkgPSBqc29uLm5hbWU7XG4gIHJlc3VsdHMudGVtcCA9IGpzb24ubWFpbi50ZW1wO1xuICByZXN1bHRzLnRlbXBSYW5nZSA9IGAke2pzb24ubWFpbi50ZW1wX21pbn0gLSAke2pzb24ubWFpbi50ZW1wX21heH1gO1xuICByZXN1bHRzLnByZXNzdXJlID0ganNvbi5tYWluLnByZXNzdXJlO1xuICByZXN1bHRzLmh1bWlkaXR5ID0ganNvbi5tYWluLmh1bWlkaXR5O1xuICByZXN1bHRzLmNsb3VkU3RhdGUgPSBqc29uLndlYXRoZXJbMF0ubWFpbjtcbiAgcmVzdWx0cy5jbG91ZFN0YXRlRGVzYyA9IGpzb24ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgcmVzdWx0cy5jbG91ZFN0YXRlSWNvbiA9IGpzb24ud2VhdGhlclswXS5pY29uO1xuXG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuY29uc3QgZ2V0Q2l0eVdlYXRoZXIgPSBhc3luYyAoY2l0eSwgdW5pdCwgYXBwSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwcElkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcHJvY2Vzc0RhdGEoanNvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaXR5V2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldENpdHlXZWF0aGVyIGZyb20gJy4vd2VhdGhlcl9hcGknO1xuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBhcHBJZCA9ICdmMjUyNmFhYmVlYjc3N2FkM2ZiYjc3Nzg0MmI3YzUxZSc7XG5cbmNyZWF0ZUZvcm0oZ2V0Q2l0eVdlYXRoZXIsIGFwcElkKTtcblxuLy8gY29uc29sZS5sb2coZ2V0Q2l0eVdlYXRoZXIoJ2xvbmRvbicsICdtZXRyaWMnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9