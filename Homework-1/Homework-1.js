// temp, is the temperature, and type is either fahrenheit or celcius
function getTemperature(temp, type) {
    // F -> C = (F - 32) * .5556
    // C -> F = (C * 1.8) + 32
    let fahrenheit = (temp - 32) * .5556;
    let celsius = (temp * 1.8) + 32;
    if(type === "fahrenheit") {
        return fahrenheit;
    } else {
        return celsius;
    }
    return 0;
}

getTemperature(35, 'fahrenheit') // celcius -> fahrenheit = 89.6
getTemperature(35, 'celcius') // fahrenheit -> celcius = 0