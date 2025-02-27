// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// List of government agencies with emails
const agencies = [
    { name: "Federal Ministry of Petroleum Resources", email: "info@petroleumresources.gov.ng" },
    { name: "Nigerian National Petroleum Corporation (NNPC)", email: "contactus@nnpcgroup.com" },
    { name: "Federal Ministry of Transport", email: "info@transport.gov.ng" },
    { name: "Federal Airports Authority of Nigeria (FAAN)", email: "contact@faan.gov.ng" },
    { name: "Federal Ministry of Finance & Economic Development", email: "info@finance.gov.ng" },
    { name: "National Emergency Management Agency (NEMA)", email: "info@nema.gov.ng" },
    { name: "National Agency for Food and Drug Administration and Control (NAFDAC)", email: "info@nafdac.gov.ng" },
    { name: "Federal Road Safety Corps (FRSC)", email: "info@frsc.gov.ng" },
    { name: "Nigeria Immigration Service (NIS)", email: "info@immigration.gov.ng" },
    { name: "Federal Fire Service (FFS)", email: "info@fire.gov.ng" },
    { name: "Nigeria Security and Civil Defence Corps (NSCDC)", email: "info@nscdc.gov.ng" },
    { name: "Central Bank of Nigeria (CBN)", email: "info@cbn.gov.ng" },
    { name: "Corporate Affairs Commission (CAC)", email: "info@cac.gov.ng" },
    { name: "Economic and Financial Crimes Commission (EFCC)", email: "info@efcc.gov.ng" },
    { name: "Independent Corrupt Practices Commission (ICPC)", email: "info@icpc.gov.ng" },
    { name: "National Human Rights Commission (NHRC)", email: "info@nhrc.gov.ng" },
    { name: "National Agency for the Prohibition of Trafficking in Persons (NAPTIP)", email: "info@naptip.gov.ng" },
    { name: "National Drug Law Enforcement Agency (NDLEA)", email: "info@ndlea.gov.ng" },
    { name: "National Youth Service Corps (NYSC)", email: "info@nysc.gov.ng" }
];

// Function to load agencies into the list
function loadAgencies() {
    const agencyList = document.getElementById('agency-list');
    agencyList.innerHTML = ""; // Clear previous content

    agencies.forEach(agency => {
        const div = document.createElement('div');
        div.classList.add('agency');
        div.innerHTML = `
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
    agencyList.innerHTML = ""; // Clear list before filtering

    agencies
        .filter(agency => agency.name.toLowerCase().includes(searchInput))
        .forEach(agency => {
            const div = document.createElement('div');
            div.classList.add('agency');
            div.innerHTML = `
                <p><strong>${agency.name}</strong></p>
                <a href="mailto:${agency.email}">${agency.email}</a>
            `;
            agencyList.appendChild(div);
        });
}

// Load agencies on page load
window.onload = loadAgencies;
