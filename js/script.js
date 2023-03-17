// Games data
const games = [
    {
      name: 'Pac-Man',
      image: 'pac-man.png',
      description: 'Eat all the pellets and avoid the ghosts in this classic arcade game.',
      rating: 4.5
    },
    {
      name: 'Tetris',
      image: 'tetris.png',
      description: 'Arrange falling blocks to create horizontal lines and score points in this addicting puzzle game.',
      rating: 4.3
    },
    // Add more games here...
  ];
  
  // Display about message when About button is clicked
  const aboutButton = document.querySelector('#about-button');
  
  aboutButton.addEventListener('click', () => {
    alert('Unblocked Games99 is a website that offers a variety of free online games that are unblocked by school or work filters. Enjoy!');
  });
  
  // Display games on the website
  const gameGrid = document.querySelector('.game-grid');
  
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    
    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameCard.appendChild(gameImage);
    
    const gameName = document.createElement('h2');
    gameName.textContent = game.name;
    gameCard.appendChild(gameName);
    
    const gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;
    gameCard.appendChild(gameDescription);
    
    const gameRating = document.createElement('p');
    gameRating.textContent = `Rating: ${game.rating}`;
    gameCard.appendChild(gameRating);
    
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-button');
    favoriteButton.textContent = 'Add to favorites';
    gameCard.appendChild(favoriteButton);
    
    gameGrid.appendChild(gameCard);
  }
  
  // Filter games based on search term
  const searchBar = document.querySelector('#search-bar');
  searchBar.addEventListener('keyup', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach((gameCard) => {
      const gameName = gameCard.querySelector('h2').textContent.toLowerCase();
      
      if (gameName.includes(searchTerm)) {
        gameCard.style.display = 'block';
      } else {
        gameCard.style.display = 'none';
      }
    });
  });
  
  // Save favorite games to local storage
  const favoriteButtons = document.querySelectorAll('.favorite-button');
  favoriteButtons.forEach((favoriteButton) => {
    const gameName = favoriteButton.parentElement.querySelector('h2').textContent;
    
    favoriteButton.addEventListener('click', () => {
      let favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
      
      if (!favoriteGames.includes(gameName)) {
        favoriteGames.push(gameName);
        localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
      }
    });
  });
  
  // Display favorite games on the website
  const favoriteGamesList = document.querySelector('#favorite-games-list');
  const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
  
  favoriteGames.forEach((favoriteGame) => {
    const listItem = document.createElement('li');
    listItem.textContent = favoriteGame;
    favoriteGamesList.appendChild(listItem);
  });

// JavaScript code
function search_animal() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
