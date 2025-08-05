function updateRates() {
    const productSelect = document.getElementById("product").value;
    const applicationRateInput = document.getElementById("applicationRate");
    const body = document.body;

    // Reset background themes
    body.classList.remove("theme-fertilizer", "theme-fiesta", "theme-granular", "theme-grub");

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
        case "grubcontrol":
            applicationRateInput.value = 15000; // Nematodes per 1000 sq ft
            body.classList.add("theme-grub");
            break;
        default:
            applicationRateInput.value = "";
            break;
    }
}

function calculateUsage() {
    const lawnSize = parseFloat(document.getElementById("lawnSize").value);
    const productSelect = document.getElementById("product").value;
    const applicationRate = parseFloat(document.getElementById("applicationRate").value);
    const totalUsed = parseFloat(document.getElementById("totalUsed").value);
    const resultEl = document.getElementById("result");

    if (isNaN(lawnSize) || lawnSize <= 0 || isNaN(applicationRate) || isNaN(totalUsed)) {
        resultEl.innerText = "Please enter valid values.";
        return;
    }

    const expectedUsage = (productSelect === "grubcontrol")
        ? (lawnSize / 1000) * applicationRate
        : lawnSize * applicationRate;

    const variancePercent = ((totalUsed - expectedUsage) / expectedUsage) * 100;

    let status = "";
    if (variancePercent >= -5 && variancePercent <= 5) {
        status = "✅ Within ideal range (-5% to +5%)";
    } else if (variancePercent < -5) {
        status = "⚠️ Under-applied! Consider increasing.";
    } else {
        status = "⚠️ Over-applied! Adjust for efficiency.";
    }

    const unit = productSelect === "grubcontrol" ? "nematodes" : "gal/kg";

    resultEl.innerText =
`Lawn Size: ${lawnSize.toFixed(2)} sq ft
Expected Usage: ${expectedUsage.toFixed(2)} ${unit}
Actual Applied: ${totalUsed.toFixed(2)} ${unit}
Variance: ${variancePercent.toFixed(2)}%
Status: ${status}`;
}