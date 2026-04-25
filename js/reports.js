/* ========================================
   REPORTS.JS - Reports page
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadSummaryCards();
    loadWeeklyReport();
});

function loadSummaryCards() {
    const container = document.getElementById('summaryCards');
    if (!container) return;
    
    const summaries = [
        { title: "Total Visitors", value: "2,035,687" },
        { title: "Conversion Rate", value: "13%" },
        { title: "Avg. Session", value: "96 sec" },
        { title: "Pages/Visit", value: "2.2" }
    ];
    
    container.innerHTML = '';
    
    summaries.forEach(summary => {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
            <h4>${summary.title}</h4>
            <div class="summary-value">${summary.value}</div>
        `;
        container.appendChild(card);
    });
}

function loadWeeklyReport() {
    const container = document.getElementById('weeklyReport');
    if (!container) return;
    
    const weeklyData = [
        { week: "Week 1", visitors: "450,000", conversion: "12%", bounce: "48%" },
        { week: "Week 2", visitors: "520,000", conversion: "13%", bounce: "47%" },
        { week: "Week 3", visitors: "490,000", conversion: "14%", bounce: "45%" },
        { week: "Week 4", visitors: "575,687", conversion: "13%", bounce: "46%" }
    ];
    
    container.innerHTML = `
        <thead>
            <tr>
                <th>Week</th>
                <th>Visitors</th>
                <th>Conversion Rate</th>
                <th>Bounce Rate</th>
            </tr>
        </thead>
        <tbody>
            ${weeklyData.map(week => `
                <tr>
                    <td>${week.week}</td>
                    <td>${week.visitors}</td>
                    <td>${week.conversion}</td>
                    <td>${week.bounce}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

// Export functions
function exportReport(type) {
    if (type === 'PDF') {
        alert('📄 PDF export feature - Would generate PDF report');
    } else if (type === 'CSV') {
        alert('📊 CSV export feature - Would download CSV file');
    } else if (type === 'PRINT') {
        window.print();
    }
}

function applyDateRange() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate) {
        alert(`📅 Report filtered from ${startDate} to ${endDate}`);
    } else {
        alert('⚠️ Please select both start and end dates');
    }
}