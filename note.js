

  var name = localStorage.getItem('name');
  if(name != 'null') {
  alert('Hello ' + My Honey);
  } else {
  var getName = prompt('Your name?');
  localStorage.setItem('name', getName);
  }

  <script>
  function myFunction() {
      var para = document.createElement("P");
      var t = document.createTextNode("This is a paragraph.");
      para.appendChild(t);
      document.getElementById("myDIV").appendChild(para);
  }
  </script>
