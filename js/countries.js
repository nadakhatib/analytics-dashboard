/* ========================================
   COUNTRIES.JS - Countries & cities page
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadCountriesList();
    loadCitiesList();
    loadGeoBarChart();
});

function loadCountriesList() {
    const container = document.getElementById('countriesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    topCountriesData.forEach((country, index) => {
        const item = document.createElement('div');
        item.className = 'geo-item';
        item.innerHTML = `
            <div class="geo-name">
                <div class="geo-rank">${index + 1}</div>
                <span>${country.name}</span>
            </div>
            <div class="geo-percent">${country.percent}%</div>
        `;
        container.appendChild(item);
    });
}

function loadCitiesList() {
    const container = document.getElementById('citiesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    topCitiesData.forEach((city, index) => {
        const item = document.createElement('div');
        item.className = 'geo-item';
        item.innerHTML = `
            <div class="geo-name">
                <div class="geo-rank">${index + 1}</div>
                <span>${city.name}</span>
            </div>
            <div class="geo-percent">${city.percent}%</div>
        `;
        container.appendChild(item);
    });
}

function loadGeoBarChart() {
    const ctx = document.getElementById('geoBarChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topCountriesData.map(c => c.name),
            datasets: [{
                label: 'Coverage (%)',
                data: topCountriesData.map(c => c.percent),
                backgroundColor: '#3b82f6',
                borderRadius: 8,
                barPercentage: 0.6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { family: 'Inter' } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}