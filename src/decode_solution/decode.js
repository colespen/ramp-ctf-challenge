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
// decoded URL: https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f
// secret: "profane"
