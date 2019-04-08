function loadProject(name) {
    var elem = document.getElementById(name);
	elem.innerHTML = `
        <a href="#${name}">
        <div class="preview" onclick="clickProject('${name}');">
        <img src="projects/${name}.png" alt="${name}"/>
        </div>
        </a>
        <div class="tags">
    ` + getTags(name) +
    `
        </div>
    `;
}

function getTags(name) {
    var ret = "";
    var tags = [];
    if(name == "USER DSL"){
        tags = ["Groovy", "DSL"];
    }
    else if(name == "Crime Time") {
        tags = ["Construct-2", "HTML5", "Game", "Game-Art"];
    }
    
    tags.forEach(addText);
    
    function addText(name, index, array) {
        ret += `<a href="#"><div class="tag ${name}" onclick="pressTag('${name}')">${name}</div></a>\n`;
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

function clickProject(id) {
    var elem = document.getElementById(id);
    elem.classList.toggle("grow");
    var preview = elem.getElementsByClassName("preview");
    preview[0].classList.toggle("view");
}

function pressTag(name) {
    var tags = document.getElementsByClassName(name);
    var i;
    for(i = 0; i < tags.length; ++i) {
        tags[i].classList.toggle("clicked");
    }
}