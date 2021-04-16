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

export default createForm;
