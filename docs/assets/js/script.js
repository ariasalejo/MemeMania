document.addEventListener('DOMContentLoaded', () => {
  // Usamos la API para obtener 10 memes (puedes ajustar el número cambiando la URL)
  fetch('https://meme-api.herokuapp.com/gimme/10')
    .then(response => response.json())
    .then(data => {
      const memesContainer = document.getElementById('memes-container');
      // La API devuelve un arreglo en data.memes
      data.memes.forEach(meme => {
        // Creamos el elemento de la tarjeta
        const memeCard = document.createElement('article');
        memeCard.classList.add('meme-card');
        memeCard.innerHTML = `
          <img src="${meme.url}" alt="${meme.title}">
          <div class="meme-info">
            <h2>${meme.title}</h2>
            <button class="vote-btn">Votar</button>
          </div>
        `;
        memesContainer.appendChild(memeCard);
      });
    })
    .catch(error => console.error('Error al obtener memes:', error));
});
