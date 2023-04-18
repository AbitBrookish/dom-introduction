const avatar = document.querySelector("#img");
const title = document.querySelector("#header");
const table = document.querySelector("#table__anime");
const column = document.querySelectorAll(".table__anime-header");
const data = document.querySelectorAll(".table__anime-data");


avatar.setAttribute("style", "width: 250px");
title.setAttribute("style", "font-size: 40px; color: blue");
table.setAttribute("style", "border: 1px solid black; background-color: rgba(0,0,0,0.5)");

column.forEach( item => {
  item.setAttribute("style", "padding: 16px");
});

data.forEach( item => {
  item.setAttribute("style", "padding: 16px");
});