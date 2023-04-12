let header = document.getElementById('title');
let ul = document.getElementById('list-group');
let ol = document.getElementById('list-group2');
let paragraph = document.getElementById('important-info');

// fun function
let colorChanger = () => {
  setInterval(() => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  header.style.color = '#' + randomColor;
  }, 500);
}

// manipulations
header.style.fontSize = '5rem';
colorChanger();
ol.style.backgroundColor = 'green';
ul.style.fontWeight = 'bolder';
paragraph.style.fontFamily = 'Georgia';
paragraph.style.fontSize = '2rem';
paragraph.style.color = 'lightgray';







// functions
