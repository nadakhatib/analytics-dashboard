/* ========================================
   VISITORS.JS - Visitor types page
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadVisitorsPieChart();
    loadVisitorsMetrics();
});

// Pie Chart for Visitor Types
function loadVisitorsPieChart() {
    const ctx = document.getElementById('visitorsPieChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: visitorTypesData.map(v => v.name),
            datasets: [{
                data: [100, 0],
                backgroundColor: ['#3b82f6', '#e2e8f0'],
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
                    labels: { font: { family: 'Inter' } }
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

// Load performance metrics
function loadVisitorsMetrics() {
    const container = document.getElementById('visitorsMetrics');
    if (!container) return;
    
    const metrics = [
        { name: "Total Webinar Attendees", value: "2,035,687" },
        { name: "Conversion Rate", value: "13%" },
        { name: "Avg. Session Duration", value: "96 sec" },
        { name: "Pages Per Session", value: "2.2" }
    ];
    
    container.innerHTML = '';
    
    metrics.forEach(metric => {
        const item = document.createElement('div');
        item.className = 'metric-item';
        item.innerHTML = `
            <span class="metric-name">${metric.name}</span>
            <span class="metric-value">${metric.value}</span>
        `;
        container.appendChild(item);
    });
}