

  var name = localStorage.getItem('name');
  if(name != 'null') {
  alert('Hello ' + name);
  } else {
  var getName = prompt('Your name?');
  localStorage.setItem('name', getName);
  }
