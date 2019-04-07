function loadProject(name) {
    var elem = document.getElementById(name);
	elem.innerHTML = `
        <img src="projects/${name}.png" height="210px" width="1000px" alt="${name}"/>
        <div class="tags">
        <h2 style="padding: 10px;">${name}</h2>
    ` + getTags(name) +
    `
        </div>
    `;
}

function getTags(name) {
    var ret = "";
    var tags = [];
    if(name == "USER DSL"){
        tags = ["Groovy", "Domain Specific Language"];
    }
    else if(name == "Crime Time") {
        tags = ["Construct 2", "HTML5", "Game", "Game Art"];
    }
    
    tags.forEach(addText);
    
    function addText(name, index, array) {
        ret += `<div class="tag ${name}">${name}</div>\n`;
    }
    
    return ret;
}

function makeOctogonBorder() {
	return `
		<div class="topOct"></div>
		<div class="octContent">${name}</div>
		<div class="bottomOct"></div>
	`;
}

function showSkills(show) {
    var elem = document.getElementById("skills");
}