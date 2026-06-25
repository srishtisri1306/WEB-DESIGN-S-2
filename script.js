function convertTemperature() {
    let celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML =
            "Please enter a valid temperature.";
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").innerHTML =
        celsius + " °C = " + fahrenheit.toFixed(2) + " °F";
}