
var authors = [
  {
    name: "--Frank Sinatra",
    quoteText: "The best revenge is massive success.",
  },
  {
    name: "--Elbert Hubbard",
    quoteText: " Do not take life too seriously. You will not get out alive."
  },
  {
    name: "--Wayne Gretzy",
    quoteText: "You miss 100% of the shots you don't take.",
  },
  {
    name:"--Epictetus",
    quoteText: "It's not what happens to you, but how you react to it that matters."
  },
  {
    name:" --Nelson Mandela",
    quoteText: "Resentment is like drinking poison and waiting for your enemies to die." ,
  },
  {
    name: "--Wayne Gretzy",
    quoteText: "You miss 100% of the shots you don't take.",
  }
];

function Quotes() {
  var randomNum =Math.floor(Math.random() * (authors.length)) ;
  document.getElementById("name").innerHTML= ` ${authors[randomNum].name} `;
  document.getElementById("text").innerHTML= `${authors[randomNum].quoteText}`;
}