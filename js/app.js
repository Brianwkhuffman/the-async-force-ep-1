//person4------------------------------------------------------
const person4 = new XMLHttpRequest();
function person4Req() {
  let person4Obj = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML =
    "Person 4: " + person4Obj.name;
}
person4.addEventListener("load", person4Req);
person4.open("GET", "https://swapi.co/api/people/4/");
person4.send();

const person4Homeworld = new XMLHttpRequest();
function person4HomeReq() {
  let homeworld = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML =
    "HomeWorld: " + homeworld.name;
}
person4Homeworld.addEventListener("load", person4HomeReq);
person4Homeworld.open("GET", "https://swapi.co/api/planets/1/");
person4Homeworld.send();
//person14------------------------------------------------------
const person14 = new XMLHttpRequest();
function person14Req() {
  let person14Obj = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML =
    "Person 14: " + person14Obj.name;
}
person14.addEventListener("load", person14Req);
person14.open("GET", "https://swapi.co/api/people/14/");
person14.send();

const person14Homeworld = new XMLHttpRequest();
function person14HomeReq() {
  let species = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML =
    "Species: " + species.name;
}
person14Homeworld.addEventListener("load", person14HomeReq);
person14Homeworld.open("GET", "https://swapi.co/api/species/1/");
person14Homeworld.send();
//filmList/planets--------------------------------------------------
const films = new XMLHttpRequest();
const getFilmList = document.getElementById("filmList");

function filmTitleReq() {
  let filmObj = JSON.parse(this.responseText);
  let filmObjLen = filmObj.results.length;
  let filmPlanetArr;
  for (let i = 0; i < filmObjLen; i++) {
    let makeList = document.createElement("li");
    makeList.className = "film";
    getFilmList.appendChild(makeList);
    let makeClass = document.createElement("h2");
    makeClass.className = "filmTitle";
    makeClass.innerHTML = "Film title: " + filmObj.results[i].title;
    makeList.appendChild(makeClass);
    filmPlanetArr = filmObj.results[i].planets;

    for (let j = 0; j < filmPlanetArr.length; j++) {
      const filmPlanets = new XMLHttpRequest();
      const getList = document.getElementsByClassName("filmTitle");
      filmPlanets.addEventListener("load", filmPlanetReq);
      filmPlanets.open("GET", filmPlanetArr[j]);
      filmPlanets.send();

      function filmPlanetReq() {
        const planetName = JSON.parse(this.responseText);
        let makePlanetList = document.createElement("ul");
        makePlanetList.className = "filmPlants";
        getList[i].appendChild(makePlanetList);
        let makeElement = document.createElement("h4");
        makeElement.className = "planetName";
        makeElement.innerHTML = "Planets: " + planetName.name;
        makePlanetList.appendChild(makeElement);
      }
    }
  }
}
films.addEventListener("load", filmTitleReq);
films.open("GET", "https://swapi.co/api/films/");
films.send();
