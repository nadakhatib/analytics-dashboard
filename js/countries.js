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
                    labels: { 
                        font: { family: 'Inter', size: 12 },
                        boxWidth: 12
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 35,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: { size: 11 }
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}