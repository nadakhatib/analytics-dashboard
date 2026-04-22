/* ========================================
   DASHBOARD.JS - Dashboard page specific
   ======================================== */

// Load all data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadKPICards();
    loadTrafficSources();
    loadVisitorTypes();
    loadTopCountries();
    loadTopCities();
    loadTopPages();
    loadWeeklyChart();
});

// Function to load KPI cards
function loadKPICards() {
    const container = document.getElementById('kpiContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    kpiData.forEach(kpi => {
        const card = document.createElement('div');
        card.className = 'kpi-card';
        card.innerHTML = `
            <div class="kpi-info">
                <h4>${kpi.title}</h4>
                <div class="kpi-number">${kpi.value}</div>
                <div class="kpi-change">${kpi.change}</div>
            </div>
            <div class="kpi-icon">
                <i class="fas ${kpi.icon}"></i>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to load traffic sources
function loadTrafficSources() {
    const container = document.getElementById('trafficSources');
    if (!container) return;
    
    container.innerHTML = '';
    
    trafficSourcesData.forEach(source => {
        const item = document.createElement('div');
        item.className = 'traffic-item';
        item.innerHTML = `
            <div class="traffic-name">
                <i class="fas ${source.icon}"></i>
                <span>${source.name}</span>
            </div>
            <div class="traffic-percent">
                ${source.percent}%
            </div>
        `;
        container.appendChild(item);
    });
}

// Function to load visitor types
function loadVisitorTypes() {
    const container = document.getElementById('visitorTypes');
    if (!container) return;
    
    container.innerHTML = '';
    
    visitorTypesData.forEach(visitor => {
        const item = document.createElement('div');
        item.className = 'visitor-item';
        item.innerHTML = `
            <span class="visitor-name">${visitor.name}</span>
            <span class="visitor-value">${visitor.value}</span>
        `;
        container.appendChild(item);
    });
}

// Function to load top countries
function loadTopCountries() {
    const container = document.getElementById('topCountries');
    if (!container) return;
    
    container.innerHTML = '';
    
    topCountriesData.forEach((country, index) => {
        const item = document.createElement('div');
        item.className = 'top-list-item';
        item.innerHTML = `
            <div class="top-list-name">
                <div class="top-list-rank">${index + 1}</div>
                <span>${country.name}</span>
            </div>
            <div class="top-list-percent">${country.percent}%</div>
        `;
        container.appendChild(item);
    });
}

// Function to load top cities
function loadTopCities() {
    const container = document.getElementById('topCities');
    if (!container) return;
    
    container.innerHTML = '';
    
    topCitiesData.forEach((city, index) => {
        const item = document.createElement('div');
        item.className = 'top-list-item';
        item.innerHTML = `
            <div class="top-list-name">
                <div class="top-list-rank">${index + 1}</div>
                <span>${city.name}</span>
            </div>
            <div class="top-list-percent">${city.percent}%</div>
        `;
        container.appendChild(item);
    });
}

// Function to load top pages
function loadTopPages() {
    const container = document.getElementById('topPages');
    if (!container) return;
    
    container.innerHTML = '';
    
    topPagesData.forEach((page, index) => {
        const item = document.createElement('div');
        item.className = 'top-list-item';
        item.innerHTML = `
            <div class="top-list-name">
                <div class="top-list-rank">${index + 1}</div>
                <span>${page.name}</span>
            </div>
            <div class="top-list-percent">${page.percent}%</div>
        `;
        container.appendChild(item);
    });
}

// Function to load weekly chart
function loadWeeklyChart() {
    const ctx = document.getElementById('weeklyChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: weeklyChartData.labels,
            datasets: [{
                label: 'Visit Rate (%)',
                data: weeklyChartData.values,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { family: 'Inter' }
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
                    max: 60,
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