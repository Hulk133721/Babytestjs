let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
planets.push("Pluto");
console.log("The amount of planets in our solar system: " + planets.length);


    let string = ``;
    string += "<ul>"
    for (let index = 0; index < planets.length; index++) {
        const element = planets[index];
        string += `<li>${element}</li>`;
    }
    string += "</ul>"
    
document.body.innerHTML = string;