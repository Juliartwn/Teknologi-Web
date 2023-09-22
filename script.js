function toggleCalculator() {
    var calculatorSelect = document.getElementById("calculatorSelect");
    var fibonacciCalculator = document.getElementById("fibonacciCalculator");
    var volumeCalculator = document.getElementById("volumeCalculator");

    if (calculatorSelect.value === "fibonacci") {
        fibonacciCalculator.style.display = "block";
        volumeCalculator.style.display = "none";
    } else if (calculatorSelect.value === "volume") {
        fibonacciCalculator.style.display = "none";
        volumeCalculator.style.display = "block";
    } else {
        fibonacciCalculator.style.display = "none";
        volumeCalculator.style.display = "none";
    }
}

function hitungFibonacci() {
    const inputNilai = document.getElementById("fibonacciInput").value;
    const resultElement = document.getElementById("fibonacciResult");

    if (inputNilai < 1) {
        resultElement.textContent = "Nilai harus lebih besar dari 0";
        return;
    }

    let fibArray = [0, 1];

    for (let i = 2; i <= inputNilai; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    resultElement.textContent = fibArray.join(", ");
}

function hitungVolume() {
    var shapeSelect = document.getElementById("shapeSelect");
    var volumeResult = document.getElementById("volumeResult");
    var selectedShape = shapeSelect.value;
    var volume = 0;

    if (selectedShape === "kubus") {
        var sisi = parseFloat(document.getElementById("kubusSisi").value);
        volume = Math.pow(sisi, 3); 
    } else if (selectedShape === "balok") {
        var panjang = parseFloat(document.getElementById("balokPanjang").value);
        var lebar = parseFloat(document.getElementById("balokLebar").value);
        var tinggi = parseFloat(document.getElementById("balokTinggi").value);
        volume = panjang * lebar * tinggi; 
    } else if (selectedShape === "tabung") {
        var radius = parseFloat(document.getElementById("tabungRadius").value);
        var tinggi = parseFloat(document.getElementById("tabungTinggi").value);
        volume = Math.PI * Math.pow(radius, 2) * tinggi; 
    }

    volumeResult.textContent = volume.toFixed(2); 
}

function toggleInputFields() {
    var shapeSelect = document.getElementById("shapeSelect");
    var kubusInput = document.getElementById("kubusInput");
    var balokInput = document.getElementById("balokInput");
    var tabungInput = document.getElementById("tabungInput");

    if (shapeSelect.value === "kubus") {
        kubusInput.style.display = "block";
        balokInput.style.display = "none";
        tabungInput.style.display = "none";
    } else if (shapeSelect.value === "balok") {
        kubusInput.style.display = "none";
        balokInput.style.display = "block";
        tabungInput.style.display = "none";
    } else if (shapeSelect.value === "tabung") { 
        kubusInput.style.display = "none";
        balokInput.style.display = "none";
        tabungInput.style.display = "block";
    } else {
        kubusInput.style.display = "none";
        balokInput.style.display = "none";
        tabungInput.style.display = "none";
    }
}

