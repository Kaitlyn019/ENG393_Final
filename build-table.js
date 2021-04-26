let sources = [
    { name: "UMD", url: "umd.edu" },
    { name: "hi", url: "hi.edu" },
    { name: "Bowie", url: "Bowie.edu" }
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
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function filterTable() {
    let search = document.getElementById("search").value
    let filteredSources = sources.filter(source => source.toLowerCase().name.includes(search.toLowerCase()) || source.toLowerCase().url.includes(search.toLowerCase()))
    let table = document.querySelector("table");
    table.removeChild(table.children[0])
    let data = Object.keys(filteredSources[0]);
    generateTableHead(table, data);
    generateTable(table, filteredSources);
}

let table = document.querySelector("table");
let data = Object.keys(sources[0]);
generateTableHead(table, data);
generateTable(table, sources);