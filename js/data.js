/* ========================================
   DATA.JS - All centralized data
   ======================================== */

// KPI Data
const kpiData = [
    { title: "Total Users", value: "2,035,687", icon: "fa-users", change: "+12%" },
    { title: "Avg. Session Duration", value: "96 sec", icon: "fa-clock", change: "+5%" },
    { title: "Pages Per User", value: "2.2", icon: "fa-file", change: "-2%" },
    { title: "Total Page Views", value: "2,354,565", icon: "fa-eye", change: "+18%" },
    { title: "Conversion Rate", value: "13%", icon: "fa-chart-line", change: "+3%" },
    { title: "Duplicate Rate", value: "58%", icon: "fa-repeat", change: "-4%" }
];

// Traffic Sources Data
const trafficSourcesData = [
    { name: "Office", percent: 70, icon: "fa-building" },
    { name: "Mobile", percent: 30, icon: "fa-mobile-alt" },
    { name: "In-person", percent: 0, icon: "fa-user-friends" },
    { name: "Social", percent: 0, icon: "fa-share-alt" }
];

// Visitor Types Data
const visitorTypesData = [
    { name: "Webinar", value: "100%" },
    { name: "Advertising", value: "0%" }
];

// Weekly Chart Data
const weeklyChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    values: [50, 25, 20, 15, 10, 5, 0]
};

// Top Countries
const topCountriesData = [
    { name: "Egypt", percent: 20 },
    { name: "Peru", percent: 13 },
    { name: "South Africa", percent: 11 }
];

// Top Cities
const topCitiesData = [
    { name: "Cairo", percent: 30 },
    { name: "Tanta", percent: 17 },
    { name: "Suez", percent: 11 }
];

// Top Conversion Pages
const topPagesData = [
    { name: "Homepage", percent: 30 },
    { name: "Products", percent: 20 },
    { name: "Contact", percent: 15 }
];