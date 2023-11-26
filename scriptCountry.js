/* Function to change the mode to light or dark */
let dark = false;
function darkMode() {
  if (!dark) {
    document.body.style.backgroundColor = "#212d38";
    document.querySelector(".head").style.backgroundColor = "#2b3945";
    document.querySelector(".head").style.boxShadow = "none";
    document.querySelector(".head").style.color = "white";

    document.querySelector(".back").style.backgroundColor = "#2b3945";
    document.querySelector(".back").style.boxShadow = "none";
    document.querySelector(".back").style.color = "white";

    document.querySelector(".country-info").style.color = "white";

    let nodes = document
      .getElementById("border-col")
      .getElementsByTagName("div");
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.backgroundColor = "#2b3945";
      nodes[i].style.boxShadow = "none";
      nodes[i].style.color = "white";
    }

    document.querySelector(".borders").style.backgroundColor = "#2b3945";
    document.querySelector(".borders").style.boxShadow = "none";
    document.querySelector(".borders").style.color = "white";
    dark = true;
  } else {
    location.reload();
  }
}

const fetchData = async () => {
  try {
    let resp = await fetch("./data.json");
    const data = await resp.json();
    data.forEach((element) => {
      if (element.name == NameOfCountry()) {
        document
          .querySelector(".country-flag-img")
          .setAttribute("src", element.flag);
        document.querySelector(".name-of-country").innerHTML = element.name;
        document.querySelector(".native-name").innerHTML =
          "Native Name: " + element.nativeName;
        document.querySelector(".population").innerHTML =
          "Population: " + element.population;
        document.querySelector(".region").innerHTML =
          "Region: " + element.region;
        document.querySelector(".sub-region").innerHTML =
          "Sub Region: " + element.subregion;
        document.querySelector(".capital").innerHTML =
          "Capital: " + element.capital;
        document.querySelector(".top-level-domain").innerHTML =
          "Top Level Domain: " + element.topLevelDomain;
        document.querySelector(".currencies").innerHTML =
          "Currencies: " + element.currencies[0].name;
        element.languages.forEach((lang) => {
          document.querySelector(".languages").innerHTML +=
            " " + lang.name + " ";
        });
        const body = document.querySelector(".border-col");
        element.borders.forEach((border) => {
          let div = document.createElement("div");
          div.setAttribute("class", "borders");
          div.innerHTML = border;
          body.appendChild(div);
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

function NameOfCountry() {
  let url = decodeURIComponent(document.location.href),
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (let i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  let country = data.country;
  let countrySpace = country.replace(/%20/g, " ");
  return countrySpace;
}

fetchData();
