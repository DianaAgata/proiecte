

var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('click', function(){
    document.getElementById('display').innerHTML = 'Displaying the degrees in Celsius';
  
    history.pushState({}, '', '#celsius')

})

fahrenheit.addEventListener('click', function(){
    document.getElementById('display').innerHTML = 'Displaying the degrees in Fahrenheit';
    history.pushState({}, '', '#fahrenheit');

})