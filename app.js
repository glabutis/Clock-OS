
function clock(){
  var today = new Date()
  var hours = today.getHours();
  var minutes = today.getMinutes();
  if(hours < 10){
    hours = "0" + hours;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(hours > 12){
    hours = hours - 12;
  }


  var day = today.getDay();


  if (day == 0){
    document.getElementById('daySpan').innerHTML =  "Sunday, " ;
  }

   else if(day == 1){
    document.getElementById('daySpan').innerHTML = "Monday, ";
  }

  else if (day == 2){
    document.getElementById('daySpan').innerHTML = "Tuesday, ";
  }

  else if (day == 3){
    document.getElementById('daySpan').innerHTML = "Wednesday, ";
  }

  else if (day == 4){
    document.getElementById('daySpan').innerHTML = "Thursday, ";
  }

  else if (day == 5){
    document.getElementById('daySpan').innerHTML = "Friday, ";
  }

  else if (day == 6){
    document.getElementById('daySpan').innerHTML = "Saturday, ";
  };


  var month = today.getMonth() + 1;
  var date = today.getDate();

  if (month == 1){
    document.getElementById('dateSpan').innerHTML = "January " + date;
  }

  else if (month == 2){
    document.getElementById('dateSpan').innerHTML = "February " + date;
  }

  else if (month == 3){
    document.getElementById('dateSpan').innerHTML = "March " + date;
  }

  else if (month == 4){
    document.getElementById('dateSpan').innerHTML = "April " + date;
  }

  else if (month == 5){
    document.getElementById('dateSpan').innerHTML = "May " + date;
  }

  else if (month == 6){
    document.getElementById('dateSpan').innerHTML = "June " + date;
  }

  else if (month == 7){
    document.getElementById('dateSpan').innerHTML = "July " + date;
  }

  else if (month == 8){
    document.getElementById('dateSpan').innerHTML = "August " + date;
  }

  else if (month == 9){
    document.getElementById('dateSpan').innerHTML = "September " + date;
  }

  else if (month == 10){
    document.getElementById('dateSpan').innerHTML = "October " + date;
  }

  else if (month == 11){
    document.getElementById('dateSpan').innerHTML = "November " + date;
  }

  else if (month == 12){
    document.getElementById('dateSpan').innerHTML = "December " + date;
  }


  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ": " + minutes;

  var time = today.getHours();



  console.log(month + "-" + date);
};


setInterval(clock, 1);


$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Granville,us&units=imperial&appid=07ba952437cab3ad2d10c383306e3e56',
function(data){
  var temp = data.main.temp
  var intTemp = Math.round(temp)
  var nameOfCity = data.name;
  document.getElementById("temp").innerHTML = intTemp + "&#8457;";
  document.getElementById("nameOfCity").innerHTML = nameOfCity;
});


//07ba952437cab3ad2d10c383306e3e56
