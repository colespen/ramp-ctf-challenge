// ran this script in browser console

const ulElements = document.querySelectorAll("ul.ramp");
let url = "";

ulElements.forEach((ul) => {
  const li = ul.querySelector("li.ramp");
  const div = li.querySelector("div.ramp");
  const span = div.querySelector("span.ramp.value");
  const char = span.getAttribute("value");
  url += char;
});

console.log(url); 