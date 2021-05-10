let sources = [
    { name: "TerpLink", description: "A site for UMD students and alumni to find oppurtunities. All official UMD organizations are registered here and many post events as they occur. If you want a place to start looking for clubs, this is it!", link: "terplink.umd.edu" },
    { name: "SPS", description: "The Society of Physics Students is an opportunity to meet other physics majors. Try looking to see if your own major has an organization and support system!", link: "https://sps.physics.umd.edu/" },
    { name: "Student Organization Resource Center", description: "Also known as SORC, they are committed to helping student organizations and students meet. Follow their Facebook for event notifications (there are many during final seasons!)", link: "https://www.facebook.com/MarylandSORC" },
    { name: "SEE", description: "SEE offers prepares tons of events for students through out the semester from movie night to famous guest speakers and more!", link: "https://www.see.umd.edu/" },
    { name: "The Clarice", description: "Do you enjoy the arts? The Clarice has unique shows and projects for creative students!", link: "https://theclarice.umd.edu/"},
    { name: "Gather Town", description: "Want to hang out with friends in a unique way? Host an event? Gather town offers a customizable map with proximity chat and plenty of games!", link: "gather.town"},
    { name: "Facebook", description: "Social media - Many events and organizations advertise on facebook! You can meet new people, join private groups, and get details by searching UMD.", link: "facebook.com" },
    { name: "Instagram", description: "Social media - Try filtering by location or simply searching UMD to find various organizations. Most post stories before events and are open to any DMs for questions!", link: "instagram.com" },
    { name: "Discord", description: "Virtual messaging and video chat platform - A great platform to talk to your friends and video call in one place.", link: "discord.com" },
    { name: "Zoom", description: "Video chatting platform - You might know this for school but there are many functionalities of Zoom as a way to talk to your friends.", link: "zoom.com" }
];

head = ['Name', 'Description', 'Link']

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of head) {
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