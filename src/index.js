
let quoteDiv = document.getElementById('quotes')
fetch('https://api.kanye.rest')
.then(res=>res.json())
.then(quote=>{
    quoteDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let quoteButton = document.getElementById('give-quote')
quoteButton.addEventListener('click',evt=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(quote=>{
        quoteDiv.innerHTML = `<p> ${quote.quote} </p>`
    })
})

let dogButton = document.getElementById('give-dog')
dogButton.addEventListener('click',evt=>{
    let dogDiv = document.getElementById('dog-pic')
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(dog=>{
            dogDiv.innerHTML = `<h3>Take this dog to TUUUM 🐶 🐶 🐶</h3>
            <img src="${dog.message}" alt="can't fetch a doggy 🐶"/>`
        });
    })
let jokeButton = document.getElementById('give-joke')
jokeButton.addEventListener('click',evt=>{
    fetch("https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-319")
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        quoteDiv.innerHTML = data.joke;
      });
})
  

