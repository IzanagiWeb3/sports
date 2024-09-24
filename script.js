// Function to calculate Maximum Heart Rate (MHR)
function calculateMHR(age) {
    return 220 - age;
}

// Function to calculate heart rate zones
function calculateHeartRateZones() {
    const age = document.getElementById("age").value;
    const MHR = calculateMHR(age);

    const zones = {
        "Zone 1 (Recovery)": [0.50, 0.60],
        "Zone 2 (Endurance)": [0.60, 0.70],
        "Zone 3 (Aerobic)": [0.70, 0.80],
        "Zone 4 (Anaerobic)": [0.80, 0.90],
        "Zone 5 (Maximum Effort)": [0.90, 1.00]
    };

    const heartRateZonesList = document.getElementById("heartRateZones");
    heartRateZonesList.innerHTML = ''; // Clear previous results

    for (const zone in zones) {
        const [lower, upper] = zones[zone];
        const lowerHR = Math.round(MHR * lower);
        const upperHR = Math.round(MHR * upper);
        const listItem = document.createElement("li");
        listItem.textContent = `${zone}: ${lowerHR} - ${upperHR} bpm`;
        heartRateZonesList.appendChild(listItem);
    }
}
