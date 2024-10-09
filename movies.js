
function Data() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "https://mocki.io/v1/a6175022-aa40-4726-b842-090492d512db", true); 
  xhr.onload = function() {
      if (xhr.status === 200) {
          const moviesData = JSON.parse(xhr.responseText);
          console.log(moviesData);
          movieCards(moviesData);
      }
  };
  xhr.send();
}





function movieCards(storedData) {
  const flexContainer = document.querySelector('.flex-container');
  for (let i = 0; i < storedData.length; i++)
    {
      const movie = storedData[i]; 
      const movieCard = document.createElement('div');
      movieCard.classList.add('movieCard');



      const imagesSlide = document.createElement('div');
      imagesSlide.id = `movie-${i}`;
      /*imagesSlide.setAttribute('data-bs-ride', 'carousel');*/ //this is use for autoplay animation 
      imagesSlide.className=('carousel');


      const carouselInner = document.createElement('div');
     carouselInner.className = 'carousel-inner';

    
    
     const images=movie.Images;  
      images.forEach((image, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${index === 0  ? 'active' : ''}`;
       
        const img = document.createElement('img');
        img.src = image;
        img.className = 'd-block w-100';
        img.alt = movie.Title;

        itemDiv.appendChild(img);
        carouselInner.appendChild(itemDiv);
    });
    imagesSlide.appendChild(carouselInner);


     const prevButton = document.createElement('button');
    prevButton.className = 'carousel-control-prev';
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', `#movie-${i}`);
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-control-next';
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', `#movie-${i}`);
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';
      
    imagesSlide.appendChild(prevButton);
    imagesSlide.appendChild(nextButton);
  
      const movieInfo = document.createElement('div');
      movieInfo.classList.add('movieInfo')
      movieInfo.innerHTML=`
      <h4 class='title'>${movie.Title}</h4>
      <p >${movie.Rated}|${movie.Runtime}|${movie.Year}</p>
      <p>${movie.imdbRating}</p>
      <p class='plot'>${movie.Plot}</p>
      <p>${movie.Director}</p>
      <p>${movie.Actors}</p>`
      

    

    
      
      movieCard.appendChild(movieInfo);
      movieCard.appendChild(imagesSlide);
      flexContainer.appendChild(movieCard);
     
    }
}


Data()











