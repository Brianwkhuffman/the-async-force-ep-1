//person4------------------------------------------------------
const person4 = new XMLHttpRequest();
function person4Req() {
  let person4Obj = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML =
    "Person 4: " + person4Obj.name;
  //request for p4 homeworld
  const person4Homeworld = new XMLHttpRequest();
  person4Homeworld.addEventListener("load", person4HomeReq);
  person4Homeworld.open("GET", person4Obj.homeworld);
  person4Homeworld.send();
  function person4HomeReq() {
    let homeworld = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML =
      "HomeWorld: " + homeworld.name;
  }
}

person4.addEventListener("load", person4Req);
person4.open("GET", "https://swapi.co/api/people/4/");
person4.send();
//person14------------------------------------------------------
const person14 = new XMLHttpRequest();
function person14Req() {
  let person14Obj = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML =
    "Person 14: " + person14Obj.name;
  //request for p14 homeworld
  const person14Species = new XMLHttpRequest();
  person14Species.addEventListener("load", person14HomeReq);
  person14Species.open("GET", person14Obj.species);
  person14Species.send();
  function person14HomeReq() {
    let species = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML =
      "Species: " + species.name;
  }
}
person14.addEventListener("load", person14Req);
person14.open("GET", "https://swapi.co/api/people/14/");
person14.send();
//filmList/planets--------------------------------------------------
const films = new XMLHttpRequest();
const getHTML = document.getElementById("filmList");

function filmTitleReq() {
  let filmObj = JSON.parse(this.responseText);
  let filmObjLen = filmObj.results.length;
  let filmPlanetArr;
  for (let i = 0; i < filmObjLen; i++) {
    let filmList = document.createElement("li");
    filmList.className = "film";
    getHTML.appendChild(filmList);
    let filmTitleElement = document.createElement("h2");
    filmTitleElement.className = "filmTitle";
    filmTitleElement.innerHTML = "Film title: " + filmObj.results[i].title;
    filmList.appendChild(filmTitleElement);
    filmPlanetArr = filmObj.results[i].planets;

    for (let j = 0; j < filmPlanetArr.length; j++) {
      const filmPlanets = new XMLHttpRequest();
      const getList = document.getElementsByClassName("filmTitle");
      filmPlanets.addEventListener("load", filmPlanetReq);
      filmPlanets.open("GET", filmPlanetArr[j]);
      filmPlanets.send();

      function filmPlanetReq() {
        const planetName = JSON.parse(this.responseText);
        let planetList = document.createElement("ul");
        planetList.className = "filmPlants";
        getList[i].appendChild(planetList);
        let planetElement = document.createElement("h4");
        planetElement.className = "planetName";
        planetElement.innerHTML = "Planets: " + planetName.name;
        planetList.appendChild(planetElement);
      }
    }
  }
}
films.addEventListener("load", filmTitleReq);
films.open("GET", "https://swapi.co/api/films/");
films.send();
