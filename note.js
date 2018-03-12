

  var name = localStorage.getItem('name');
  if(name != 'null') {
  alert('Hello ' + My Honey);
  } else {
  var getName = prompt('Your name?');
  localStorage.setItem('name', getName);
  }
