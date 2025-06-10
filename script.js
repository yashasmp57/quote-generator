const quotes = [
  "10 rupai pepsi nam hudgi tumba sexyy",
  "insta gram figure tick ali daga***",
  "nan friend yenkta nenu akondu vantta",
  "ok prendss byeee"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
