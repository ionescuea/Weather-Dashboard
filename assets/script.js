var APIkey = "52c625840c387d8152e1ad6057a27880";
var lat = 0
var lon = 0
var searchButton = document.querySelector("#searchButton");

// clear history div content
$("#history").html("");

// load url from local storage and update page content
function loadFromHistory() {
  getData(localStorage.getItem(this.innerHTML))
}

// add history button and create event listener
function addHistoryButton (key) {
  var btn = document.createElement('button');
  btn.innerHTML = key;
  document.querySelector("#history").appendChild(btn);
  btn.setAttribute("class", "btn btn-secondary mb-3 history-button")
  btn.addEventListener('click', loadFromHistory);
}

// add history buttons with data from local storage
Object.keys(localStorage).forEach(function(key){
  addHistoryButton(key)
});



function getCity () {
  var longLatURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  getData(longLatURL)
}

function getData(longLatURL) {
  console.log(longLatURL)

  fetch(longLatURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // add history button if not in local storage then add/update local storage
      if (!localStorage.getItem(data.city.name)) {
        addHistoryButton(data.city.name);
      }
      localStorage.setItem(data.city.name, longLatURL);

      var city = data.city.name;
      $("#city").text(data.city.name);
      console.log(city);260504
  
      // Date One
      var date = data.list[0].dt_txt;
      date = dayjs(data.list[0].dt_txt).format("D/MM/YYYY");
      $("#dateOne").text(date);
      console.log(date)
      var clouds = data.list[0].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconOne").attr('src', iconurl);
      var temp = (data.list[0].main.temp - 273.15).toFixed(2);
      $("#tempOne").text(temp);
      console.log(temp);
      var wind = data.list[0].wind.speed;
      $("#windOne").text(data.list[0].wind.speed);
      console.log(wind);
      var humidity = data.list[0].main.humidity;
      $("#humidityOne").text(data.list[0].main.humidity);
      console.log(humidity);
  
      // Date Two
      var date = data.list[7].dt_txt;
      date = dayjs(data.list[7].dt_txt).format("D/MM/YYYY");
      $("#dateTwo").text(date);
      console.log(date)
      var clouds = data.list[7].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconTwo").attr('src', iconurl);
      var temp = (data.list[7].main.temp - 273.15).toFixed(2);
      $("#tempTwo").text(temp);
      console.log(temp);
      var wind = data.list[7].wind.speed;
      $("#windTwo").text(data.list[7].wind.speed);
      console.log(wind);
      var humidity = data.list[7].main.humidity;
      $("#humidityTwo").text(data.list[7].main.humidity);
      console.log(humidity);
  
      // Date Three
      var date = data.list[15].dt_txt;
      date = dayjs(data.list[15].dt_txt).format("D/MM/YYYY");
      $("#dateThree").text(date);
      console.log(date)
      var clouds = data.list[15].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconThree").attr('src', iconurl);
      var temp = (data.list[15].main.temp - 273.15).toFixed(2);
      $("#tempThree").text(temp);
      console.log(temp);
      var wind = data.list[15].wind.speed;
      $("#windThree").text(data.list[15].wind.speed);
      console.log(wind);
      var humidity = data.list[15].main.humidity;
      $("#humidityThree").text(data.list[15].main.humidity);
      console.log(humidity);
  
      // Date Four    
      var date = data.list[23].dt_txt;
      date = dayjs(data.list[23].dt_txt).format("D/MM/YYYY");
      $("#dateFour").text(date);
      console.log(date)
      var clouds = data.list[23].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconFour").attr('src', iconurl);
      var temp = (data.list[23].main.temp - 273.15).toFixed(2);
      $("#tempFour").text(temp);
      console.log(temp);
      var wind = data.list[23].wind.speed;
      $("#windFour").text(data.list[23].wind.speed);
      console.log(wind);
      var humidity = data.list[23].main.humidity;
      $("#humidityFour").text(data.list[23].main.humidity);
      console.log(humidity);
  
      // Date Five
      var date = data.list[31].dt_txt;
      date = dayjs(data.list[31].dt_txt).format("D/MM/YYYY");
      $("#dateFive").text(date);
      console.log(date)
      var clouds = data.list[31].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconFive").attr('src', iconurl);
      var temp = (data.list[31].main.temp - 273.15).toFixed(2);
      $("#tempFive").text(temp);
      console.log(temp);
      var wind = data.list[31].wind.speed;
      $("#windFive").text(data.list[31].wind.speed);
      console.log(wind);
      var humidity = data.list[31].main.humidity;
      $("#humidityFive").text(data.list[31].main.humidity);
      console.log(humidity);
      
      // Date Six            
      var date = data.list[39].dt_txt;
      date = dayjs(data.list[39].dt_txt).format("D/MM/YYYY");
      $("#dateSix").text(date);
      console.log(date)
      var clouds = data.list[39].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + clouds + ".png";
      $("#iconSix").attr('src', iconurl);
      var temp = (data.list[39].main.temp - 273.15).toFixed(2);
      $("#tempSix").text(temp);
      console.log(temp);
      var wind = data.list[39].wind.speed;
      $("#windSix").text(data.list[39].wind.speed);
      console.log(wind);
      var humidity = data.list[39].main.humidity;
      $("#humiditySix").text(data.list[39].main.humidity);
      console.log(humidity);
    });
}

function getLatLong () {
  var searchInput = document.querySelector("#searchInput");
  var cityNameURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=1&appid=${APIkey}`;

  fetch(cityNameURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lat = data[0].lat;
      lon = data[0].lon;
    }).then(getCity)
}

function updateData() {
  getLatLong()
}

searchButton.addEventListener("click", updateData);

