//create variables for dom
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.name');
var info = document.querySelector('.info');
var temp = document.querySelector('.temp');
//api variables
// var apiKey = "4e68fd57939ff2714be1395487193b1c";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=afb5b72bbfeb24f2bb505fea559e91cd";
//create event listener for button
button.addEventListener('click', function(){
//fetch the data
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=afb5b72bbfeb24f2bb505fea559e91cd")
  .then(response => response.json())
  // .then(data => console.log(data))
  .then (data => {
    var cityValue = data['name'];
    var tempValue = data['main']['temp'];
    var infoValue = data['weather'][0]['description'];

    city.innerHTML = cityValue;
    temp.innerHTML = tempValue;
    info.innerHTML = infoValue; 
  })
.catch(err => alert("An error has occured"))
localStorage.setItem('history', inputValue.value)

})