function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("d MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
    losAngelesDateElement.innerHTML = losAngelesTime.format("DD MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
  }

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("d MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
    londonDateElement.innerHTML = londonTime.format("DD MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  //Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("d MMMM YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
    aucklandDateElement.innerHTML = aucklandTime.format("DD MMMM YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <h2>${cityName}</h2>
      <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
      <div class="time">${cityTime.format("HH:mm:ss")}</div>
      </div>
     `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
