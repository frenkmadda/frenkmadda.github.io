
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
        const imageUrl = dog.message;

        // Verifica se l'URL dell'immagine è valido
        const img = new Image();
        img.onload = function () {
            // L'immagine è stata caricata con successo
            dogDiv.innerHTML = `
                <h3>Take this dog to TUUUM 🐶 🐶 🐶</h3>
                <img src="${imageUrl}" style="width:400px; height:300px alt="doggy 🐶"/>
            `;
        };
        img.onerror = function () {
            // L'immagine non è stata caricata con successo, usa un'immagine locale di default
            dogDiv.innerHTML = `
                <h3>The King decided to visit you ❤️❤️❤️</h3>
                <img src="src/choppy.jpg" style="width:400px; height:300px alt="default doggy 🐶"/>
            `;
        };
        img.src = imageUrl;
    })
        });
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
  

