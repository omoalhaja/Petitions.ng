// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// List of government agencies with emails and logos
const agencies = [
    { name: "Federal Ministry of Petroleum Resources", email: "info@petroleumresources.gov.ng", logo: "images/petroleum.png" },
    { name: "Nigerian National Petroleum Corporation (NNPC)", email: "contactus@nnpcgroup.com", logo: "images/nnpc.png" },
    { name: "Federal Ministry of Transport", email: "info@transport.gov.ng", logo: "images/transport.png" },
    { name: "Federal Airports Authority of Nigeria (FAAN)", email: "contact@faan.gov.ng", logo: "images/faan.png" },
    { name: "Federal Ministry of Finance & Economic Development", email: "info@finance.gov.ng", logo: "images/finance.png" },
    { name: "National Emergency Management Agency (NEMA)", email: "info@nema.gov.ng", logo: "images/nema.png" },
    { name: "National Agency for Food and Drug Administration and Control (NAFDAC)", email: "info@nafdac.gov.ng", logo: "images/nafdac.png" },
    { name: "Federal Road Safety Corps (FRSC)", email: "info@frsc.gov.ng", logo: "images/frsc.png" },
    { name: "Nigeria Immigration Service (NIS)", email: "info@immigration.gov.ng", logo: "images/immigration.png" },
    { name: "Federal Fire Service (FFS)", email: "info@fire.gov.ng", logo: "images/fire.png" },
    { name: "Nigeria Security and Civil Defence Corps (NSCDC)", email: "info@nscdc.gov.ng", logo: "images/nscdc.png" },
    { name: "Central Bank of Nigeria (CBN)", email: "info@cbn.gov.ng", logo: "images/cbn.png" },
    { name: "Corporate Affairs Commission (CAC)", email: "info@cac.gov.ng", logo: "images/cac.png" },
    { name: "Economic and Financial Crimes Commission (EFCC)", email: "info@efcc.gov.ng", logo: "images/efcc.png" },
    { name: "Independent Corrupt Practices Commission (ICPC)", email: "info@icpc.gov.ng", logo: "images/icpc.png" },
    { name: "National Human Rights Commission (NHRC)", email: "info@nhrc.gov.ng", logo: "images/nhrc.png" },
    { name: "National Agency for the Prohibition of Trafficking in Persons (NAPTIP)", email: "info@naptip.gov.ng", logo: "images/naptip.png" },
    { name: "National Drug Law Enforcement Agency (NDLEA)", email: "info@ndlea.gov.ng", logo: "images/ndlea.png" },
    { name: "National Youth Service Corps (NYSC)", email: "info@nysc.gov.ng", logo: "images/nysc.png" }
];

// Function to load agencies into the list
function loadAgencies() {
    const agencyList = document.getElementById('agency-list');
    agencyList.innerHTML = "";

    agencies.forEach(agency => {
        const div = document.createElement('div');
        div.classList.add('agency');
        div.innerHTML = `
            <img src="${agency.logo}" alt="${agency.name} Logo">
            <p><strong>${agency.name}</strong></p>
            <a href="mailto:${agency.email}">${agency.email}</a>
        `;
        agencyList.appendChild(div);
    });
}

// Function to filter agencies based on search input
function searchAgencies() {
    const searchInput = document.getElementById('agency-search').value.toLowerCase();
    const agencyList = document.getElementById('agency-list');
    agencyList.innerHTML = "";

    agencies
        .filter(agency => agency.name.toLowerCase().includes(searchInput))
        .forEach(agency => {
            const div = document.createElement('div');
            div.classList.add('agency');
            div.innerHTML = `
                <img src="${agency.logo}" alt="${agency.name} Logo">
                <p><strong>${agency.name}</strong></p>
                <a href="mailto:${agency.email}">${agency.email}</a>
            `;
            agencyList.appendChild(div);
        });
}

// Load agencies on page load
window.onload = loadAgencies;
