const convertButton = document.getElementById("convertButton");
const temperatureInput = document.getElementById("temperatureInput");
const fromScale = document.getElementById("fromScale");
const toScale = document.getElementById("toScale");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        resultElement.textContent = "Invalid input";
        return;
    }

    const from = fromScale.value;
    const to = toScale.value;

    let convertedTemperature;
    if (from === "celsius") {
        if (to === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (to === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else if (to === "rankine") {
            convertedTemperature = (temperature + 273.15) * 9/5;
        }
    } else if (from === "fahrenheit") {
        if (to === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (to === "kelvin") {
            convertedTemperature = (temperature + 459.67) * 5/9;
        } else if (to === "rankine") {
            convertedTemperature = temperature + 459.67;
        }
    } else if (from === "kelvin") {
        if (to === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (to === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) - 459.67;
        } else if (to === "rankine") {
            convertedTemperature = temperature * 9/5;
        }
    } else if (from === "rankine") {
        if (to === "celsius") {
            convertedTemperature = (temperature - 491.67) * 5/9;
        } else if (to === "fahrenheit") {
            convertedTemperature = temperature - 459.67;
        } else if (to === "kelvin") {
            convertedTemperature = temperature * 5/9;
        }
    } else {
        resultElement.textContent = "Conversion not supported";
        return;
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${to}`;
});
