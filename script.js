// script.js
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

function openAgency(agency) {
    window.location.href = `agency.html?name=${agency}`;
}

// Fetch agencies dynamically (example)
const agencies = [
    { name: 'Nigerian Police', logo: 'police-logo.png', email: 'police@nigeria.gov.ng' },
    // Add more agencies here
];

const agencyGrid = document.querySelector('.agency-grid');
agencies.forEach(agency => {
    const card = document.createElement('div');
    card.className = 'agency-card';
    card.innerHTML = `
        <img src="${agency.logo}" alt="${agency.name} Logo">
        <p>${agency.name}</p>
    `;
    card.onclick = () => openAgency(agency.name);
    agencyGrid.appendChild(card);
});
