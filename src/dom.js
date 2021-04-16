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

export default createForm;
