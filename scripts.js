function updateRates() {
    const productSelect = document.getElementById("product").value;
    const applicationRateInput = document.getElementById("applicationRate");
    const body = document.body;

    // Reset background themes
    body.classList.remove("theme-fertilizer", "theme-fiesta", "theme-granular");

    // Update application rate and theme
    switch (productSelect) {
        case "fertilizer":
            applicationRateInput.value = 2.2;
            body.classList.add("theme-fertilizer");
            break;
        case "fiesta":
            applicationRateInput.value = 0.4;
            body.classList.add("theme-fiesta");
            break;
        case "granular":
            applicationRateInput.value = 0.75;
            body.classList.add("theme-granular");
            break;
        default:
            applicationRateInput.value = "";
            break;
    }
}

function calculateUsage() {
    const lawnSize = parseFloat(document.getElementById("lawnSize").value);
    const applicationRate = parseFloat(document.getElementById("applicationRate").value);
    const totalUsed = parseFloat(document.getElementById("totalUsed").value);
    const resultEl = document.getElementById("result");

    if (isNaN(lawnSize) || lawnSize <= 0 || isNaN(applicationRate) || isNaN(totalUsed)) {
        resultEl.innerText = "Please enter valid values.";
        return;
    }

    const expectedUsage = lawnSize * applicationRate;
    const variancePercent = ((totalUsed - expectedUsage) / expectedUsage) * 100;

    let status = "";
    if (variancePercent >= -5 && variancePercent <= 5) {
        status = "✅ Within ideal range (-5% to +5%)";
    } else if (variancePercent < -5) {
        status = "⚠️ Under-applied! Consider increasing.";
    } else {
        status = "⚠️ Over-applied! Adjust for efficiency.";
    }

    resultEl.innerText =
`Lawn Size: ${lawnSize.toFixed(2)} sq ft
Expected Usage: ${expectedUsage.toFixed(2)} gal/kg
Actual Applied: ${totalUsed.toFixed(2)} gal/kg
Variance: ${variancePercent.toFixed(2)}%
Status: ${status}`;
}

function showCalculator() {
    document.getElementById("calculator").classList.remove("hidden");
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function openCalculatorWindow() {
    window.open("calculator.html", "Calculator", "width=400,height=500");
}