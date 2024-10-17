function updateBandVisibility() {
    const bandCount = parseInt(document.getElementById('jumlah-band').value);

    document.getElementById('band3').style.display = bandCount >= 3 ? 'block' : 'none';
    document.getElementById('band4').style.display = bandCount >= 4 ? 'block' : 'none';
    document.getElementById('band5').style.display = bandCount >= 5 ? 'block' : 'none';
    document.getElementById('band6').style.display = bandCount === 6 ? 'block' : 'none';
}

function calculateResistor() {
    const band1Value = parseInt(document.getElementById('band1-color').value);
    const band2Value = parseInt(document.getElementById('band2-color').value);
    const band3Value = parseInt(document.getElementById('band3-color').value) || 0;
    const multiplierValue = parseFloat(document.getElementById('multiplier-color').value);
    const toleranceValue = parseFloat(document.getElementById('tolerance-color').value);
    const temperatureValue = parseInt(document.getElementById('temperature-color').value);
    const bandCount = parseInt(document.getElementById('jumlah-band').value);
    let resistanceValue ;
// // Calculate resistance value
if (bandCount == 6) {

    resistanceValue = ((band1Value * 100) + (band2Value * 10) + band3Value) * multiplierValue;
    document.getElementById('result').textContent = `Resistance: ${resistanceValue} Ω ± ${toleranceValue}% ${temperatureValue} ppm/K `;
} 
else if(bandCount == 5){
    resistanceValue = ((band1Value * 100) + (band2Value * 10) + band3Value) * multiplierValue;
    document.getElementById('result').textContent = `Resistance: ${resistanceValue} Ω ± ${toleranceValue}%`;
}
else if(bandCount == 4){
    resistanceValue = ((band1Value * 10) + band2Value) * multiplierValue;
    document.getElementById('result').textContent = `Resistance: ${resistanceValue} Ω ± ${toleranceValue}% ${bandCount}`;
}
else {
    resistanceValue = ((band1Value * 10) + band2Value) * multiplierValue;
    document.getElementById('result').textContent = `Resistance: ${resistanceValue} Ω ${bandCount}`;
}


// Display the result
//document.getElementById('result').textContent = `Resistance: ${resistanceValue} Ω ± ${toleranceValue}% ${temperatureValue} ppm/K ${bandCount}`;

// Update resistor bands visually
document.getElementById('band1').style.backgroundColor = getColor(band1Value);
document.getElementById('band2').style.backgroundColor = getColor(band2Value);
document.getElementById('band3').style.backgroundColor = getColor(band3Value);
document.getElementById('band4').style.backgroundColor = getColorFromMultiplier(multiplierValue);
document.getElementById('band5').style.backgroundColor = getToleranceColor(toleranceValue);
document.getElementById('band5').style.backgroundColor = getToleranceColor(temperatureValue);
}

function getColor(value) {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white","gold","silver"];
    return colors[value];
}

function getColorFromMultiplier(value) {
const multiplierColors = {
1: "black",
10: "brown",
100: "red",
1000: "orange",
10000: "yellow",
100000: "green",
1000000: "blue",
10000000: "violet",
100000000: "gray",
1000000000: "white",
0.1: "gold",
0.01: "silver"
};
return multiplierColors[value];
}


function getToleranceColor(value) {
    const toleranceColors = {
1: "brown",
2: "red",
0.05: "orange",
0.02: "yellow",
0.5: "green",
0.25: "blue",
0.1: "violet",
0.01: "gray",
5:"gold",
10:"silver"
    };
    return toleranceColors[value];


}

function getTemperatur(value) {
    const temperatures = {
250:"black",
100: "brown",
50: "red",
15: "orange",
25: "yellow",
20: "green",
10: "blue",
5: "violet",
1: "gray"


    };
    return temperatures[value];
}