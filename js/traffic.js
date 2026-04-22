/* ========================================
   TRAFFIC.JS - Traffic sources page
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadTrafficDetails();
    loadTrafficDonutChart();
    loadTrafficLineChart();
});

// Load traffic details with progress bars
function loadTrafficDetails() {
    const container = document.getElementById('trafficDetails');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Use data from data.js
    trafficSourcesData.forEach(source => {
        const visitors = Math.round((source.percent / 100) * 2035687);
        
        const item = document.createElement('div');
        item.className = 'traffic-detail-item';
        item.innerHTML = `
            <div class="traffic-detail-name">
                <i class="fas ${source.icon}"></i>
                <span>${source.name}</span>
            </div>
            <div class="traffic-detail-stats">
                <div class="traffic-detail-percent">${source.percent}%</div>
                <div class="traffic-detail-count">${visitors.toLocaleString()} visitors</div>
                <div class="progress-bar-full">
                    <div class="progress-fill-full" style="width: ${source.percent}%"></div>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

// Donut Chart
function loadTrafficDonutChart() {
    const ctx = document.getElementById('trafficDonutChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: trafficSourcesData.map(s => s.name),
            datasets: [{
                data: trafficSourcesData.map(s => s.percent),
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: 'Inter', size: 12 },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

// Line Chart - Traffic Over Time
function loadTrafficLineChart() {
    const ctx = document.getElementById('trafficLineChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: weeklyChartData.labels,
            datasets: [
                {
                    label: 'Office',
                    data: [65, 68, 70, 72, 70, 68, 70],
                    borderColor: '#3b82f6',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 4
                },
                {
                    label: 'Mobile',
                    data: [30, 28, 25, 23, 25, 27, 30],
                    borderColor: '#10b981',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 4
                }
            ]
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
                    max: 100,
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