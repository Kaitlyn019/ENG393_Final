let sources = [
    { name: "Facebook", description: "Social media", link: "facebook.com" },
    { name: "Instagram", description: "Social media", link: "instagram.com" },
    { name: "Discord", description: "Virtual messaging and video chat platform", link: "discord.com" },
    { name: "Zoom", description: "Video chatting platform", link: "zoom.com" },
    { name: "TerpLink", description: "A site for UMD students and alumni to find oppurtunities", link: "terplink.umd.edu" },
    { name: "Society of Physics Students", description: "The society of physics students", link: "sps.physics.umd.edu" },
    { name: "Student Organization Resources Center", description: "The student orginization resource center at UMD", link: "thestamp.umd.edu/student_org_resource_center_sorc" },
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let a = document.createElement('a');
            let text = document.createTextNode(element[key]);
            a.appendChild(text);
            a.title = element[key];
            a.href = "https://"+element[key];
            if (key == "link") {
                cell.appendChild(a);
            }
            else {
                cell.appendChild(text);
            }
        }
    }
}

function filterTable() {
    let search = document.getElementById("search").value
    let filteredSources = sources.filter(source => source.name.toLowerCase().includes(search.toLowerCase()) || source.description.toLowerCase().includes(search.toLowerCase()) || source.link.toLowerCase().includes(search.toLowerCase()))
    let table = document.querySelector("table");
    table.removeChild(table.children[0])
    let data = Object.keys(sources[0]);
    generateTableHead(table, data);
    generateTable(table, filteredSources);
}

let table = document.querySelector("table");
let data = Object.keys(sources[0]);
generateTableHead(table, data);
generateTable(table, sources);