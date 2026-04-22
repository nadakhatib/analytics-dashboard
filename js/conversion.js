/* ========================================
   CONVERSION.JS - Conversion pages page
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadConversionPagesList();
    loadConversionBarChart();
    loadPerformanceTable();
});

function loadConversionPagesList() {
    const container = document.getElementById('conversionPagesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    const conversionPages = [
        { name: "Homepage", rate: 30, visitors: "610,706" },
        { name: "Products", rate: 20, visitors: "407,137" },
        { name: "Contact", rate: 15, visitors: "305,353" },
        { name: "Blog", rate: 10, visitors: "203,568" },
        { name: "Pricing", rate: 8, visitors: "162,855" }
    ];
    
    conversionPages.forEach(page => {
        const item = document.createElement('div');
        item.className = 'conversion-item';
        item.innerHTML = `
            <span class="conversion-name">${page.name}</span>
            <span class="conversion-rate">${page.rate}%</span>
        `;
        container.appendChild(item);
    });
}

function loadConversionBarChart() {
    const ctx = document.getElementById('conversionBarChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Homepage", "Products", "Contact", "Blog", "Pricing"],
            datasets: [{
                label: 'Conversion Rate (%)',
                data: [30, 20, 15, 10, 8],
                backgroundColor: '#22c55e',
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
                    max: 35,
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

function loadPerformanceTable() {
    const container = document.getElementById('performanceTable');
    if (!container) return;
    
    const pages = [
        { name: "Homepage", views: "610,706", conversion: "30%", bounce: "45%" },
        { name: "Products", views: "407,137", conversion: "20%", bounce: "52%" },
        { name: "Contact", views: "305,353", conversion: "15%", bounce: "38%" },
        { name: "Blog", views: "203,568", conversion: "10%", bounce: "65%" },
        { name: "Pricing", views: "162,855", conversion: "8%", bounce: "58%" }
    ];
    
    container.innerHTML = `
        <thead>
            <tr><th>Page Name</th><th>Page Views</th><th>Conversion Rate</th><th>Bounce Rate</th></tr>
        </thead>
        <tbody>
            ${pages.map(page => `
                <tr>
                    <td>${page.name}</td>
                    <td>${page.views}</td>
                    <td><span class="rate-badge">${page.conversion}</span></td>
                    <td>${page.bounce}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}