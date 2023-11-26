/* Function to get the data from the json file and create el DOM to show the data */
const fetchData = async () => {
  try {
    let resp = await fetch("./data.json");
    const data = await resp.json();
    data.forEach((element) => {
      const body = document.querySelector(".container");
      let div = document.createElement("div");
      div.setAttribute("class", "country");
      div.setAttribute("id", element.name);
      div.addEventListener("click", function () {
        window.open(`./country.html?country=${element.name}`, "_self");
      });

      let divFlag = document.createElement("div");
      divFlag.setAttribute("class", "flag");
      let img = document.createElement("img");
      img.setAttribute("class", "img-flag");
      img.setAttribute("loading", "lazy");
      img.setAttribute("src", element.flag);
      img.setAttribute("alt", element.alpha2Code);

      divFlag.appendChild(img);
      let pCountry = document.createElement("p");
      pCountry.setAttribute("class", "name-of-country");
      pCountry.setAttribute("id", element.name);

      pCountry.textContent = element.name;
      div.appendChild(divFlag);
      div.appendChild(pCountry);
      for (let i = 0; i < 3; i++) {
        let pInfo = document.createElement("p");
        let span = document.createElement("span");
        pInfo.setAttribute("class", "info");
        if (i === 0) {
          pInfo.innerHTML = "Population: ";
          span.innerHTML = element.population;
        }
        if (i === 1) {
          pInfo.setAttribute("id", element.region);
          pInfo.innerHTML = "Region: ";
          span.innerHTML = element.region;
        }
        if (i === 2) {
          pInfo.innerHTML = "Capital: ";
          span.innerHTML = element.capital;
        }
        pInfo.appendChild(span);
        div.appendChild(pInfo);
      }
      body.appendChild(div);
    });
  } catch (error) {
    console.error(error);
  }
};

/* Function to change the mode to light or dark */
let dark = false;
function darkMode() {
  if (!dark) {
    document.body.style.backgroundColor = "#212d38";
    document.querySelector(".head").style.backgroundColor = "#2b3945";
    document.querySelector(".head").style.boxShadow = "none";
    document.querySelector(".head").style.color = "white";

    document.querySelector(".search-input").style.backgroundColor = "#2b3945";
    document.querySelector(".search-input").style.boxShadow = "none";
    document.querySelector(".search-input").style.color = "white";
    document.querySelector(".search-input").style.border = "1px solid #2b3945";

    document.querySelector(".select-part").style.backgroundColor = "#2b3945";
    document.querySelector(".select-part").style.boxShadow = "none";
    document.querySelector(".select-part").style.color = "white";
    document.querySelector(".select-part").style.border = "15px solid #2b3945";

    let nodes = document
      .getElementById("container")
      .getElementsByTagName("div");
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.backgroundColor = "#2b3945";
      nodes[i].style.boxShadow = "none";
      nodes[i].style.color = "white";
    }
    dark = true;
  } else {
    location.reload();
  }
}
/* Function to search on country */
function searchCountry() {
  let country = document.querySelector(".search-input").value;
  if (event.key === "Enter") {
    if (country == "") {
      removeCountries();

      fetchData();
    } else {
      removeCountries();
      getCountry(country);
    }
  }
}

/* Function to see all countries in region */
function selectRegion() {
  let selection = document.querySelector(".select-part").value;
  removeCountries();
  getReion(selection);
}

/* Function to fetch data to special region */
const getReion = async (selection) => {
  try {
    if (selection == "") {
      location.reload();
      darkMode();
    } else {
      let resp = await fetch("./data.json");
      const data = await resp.json();
      data.forEach((element) => {
        if (element.region == selection) {
          const body = document.querySelector(".container");
          let div = document.createElement("div");
          div.setAttribute("class", "country");
          div.setAttribute("id", element.name);
          div.addEventListener("click", function () {
            window.open(`./country.html?country=${element.name}`, "_self");
          });
          let divFlag = document.createElement("div");
          divFlag.setAttribute("class", "flag");
          let img = document.createElement("img");
          img.setAttribute("class", "img-flag");
          img.setAttribute("loading", "lazy");
          img.setAttribute("src", element.flag);
          img.setAttribute("alt", element.alpha2Code);

          divFlag.appendChild(img);
          let pCountry = document.createElement("p");
          pCountry.setAttribute("class", "name-of-country");
          pCountry.setAttribute("id", element.name);

          pCountry.textContent = element.name;
          div.appendChild(divFlag);
          div.appendChild(pCountry);
          for (let i = 0; i < 3; i++) {
            let pInfo = document.createElement("p");
            let span = document.createElement("span");
            pInfo.setAttribute("class", "info");
            if (i === 0) {
              pInfo.innerHTML = "Population: ";
              span.innerHTML = element.population;
            }
            if (i === 1) {
              pInfo.setAttribute("id", element.region);
              pInfo.innerHTML = "Region: ";
              span.innerHTML = element.region;
            }
            if (i === 2) {
              pInfo.innerHTML = "Capital: ";
              span.innerHTML = element.capital;
            }
            pInfo.appendChild(span);
            div.appendChild(pInfo);
          }
          body.appendChild(div);
        }
        if (dark) {
          let nodes = document
            .getElementById("container")
            .getElementsByTagName("div");

          for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.backgroundColor = "#2b3945";
            nodes[i].style.boxShadow = "none";
            nodes[i].style.color = "white";
          }
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

/* Function to fetch data to special country */
const getCountry = async (country) => {
  try {
    let resp = await fetch("./data.json");
    const data = await resp.json();
    data.forEach((element) => {
      if (element.name == country) {
        const body = document.querySelector(".container");
        let div = document.createElement("div");
        div.setAttribute("class", "country");
        div.setAttribute("id", element.name);
        div.addEventListener("click", function () {
          window.open(`./country.html?country=${element.name}`, "_self");
        });
        let divFlag = document.createElement("div");
        divFlag.setAttribute("class", "flag");
        let img = document.createElement("img");
        img.setAttribute("class", "img-flag");
        img.setAttribute("loading", "lazy");
        img.setAttribute("src", element.flag);
        img.setAttribute("alt", element.alpha2Code);

        divFlag.appendChild(img);
        let pCountry = document.createElement("p");
        pCountry.setAttribute("class", "name-of-country");
        pCountry.setAttribute("id", element.name);

        pCountry.textContent = element.name;
        div.appendChild(divFlag);
        div.appendChild(pCountry);
        for (let i = 0; i < 3; i++) {
          let pInfo = document.createElement("p");
          let span = document.createElement("span");
          pInfo.setAttribute("class", "info");
          if (i === 0) {
            pInfo.innerHTML = "Population: ";
            span.innerHTML = element.population;
          }
          if (i === 1) {
            pInfo.setAttribute("id", element.region);
            pInfo.innerHTML = "Region: ";
            span.innerHTML = element.region;
          }
          if (i === 2) {
            pInfo.innerHTML = "Capital: ";
            span.innerHTML = element.capital;
          }
          pInfo.appendChild(span);
          div.appendChild(pInfo);
        }
        body.appendChild(div);
      }
      if (dark) {
        let nodes = document
          .getElementById("container")
          .getElementsByTagName("div");

        for (let i = 0; i < nodes.length; i++) {
          nodes[i].style.backgroundColor = "#2b3945";
          nodes[i].style.boxShadow = "none";
          nodes[i].style.color = "white";
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};

/* Function to remove all countries */
function removeCountries() {
  let nodes = document.querySelector(".container");
  while (nodes.firstChild) {
    nodes.removeChild(nodes.firstChild);
  }
}

fetchData();
