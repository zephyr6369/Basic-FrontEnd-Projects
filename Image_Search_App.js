function searchImages() {
  let query = document.getElementById('searchInput').value;
  let results = document.getElementById('results');
  results.textContent = '';

  if (!query) {
    results.textContent = 'Please enter a search term';
    return;
  }

  let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=zCRo1GRS5DGGExaGSvpMAc-UhyB8_6s93pHXLpAGr4I`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
      if (data.results.length === 0) {
        results.textContent = 'No images found';
        return;
      }

      for (let i = 0; i < data.results.length; i++) {
        let photo = data.results[i];
       //console.log(data.results);
        let card = document.createElement('div');
        card.className = 'bg-white p-2 rounded-lg w-64';

        let img = document.createElement('img');
        img.src = photo.urls.small;
        //console.log(photo.urls.small);
        img.alt = 'Image';
        //console.log(img.alt);
        img.className = 'w-full h-40 rounded';

        let caption = document.createElement('p');
        caption.textContent = photo.alt_description;
        caption.className = 'text-sm mt-2 text-center';

        card.appendChild(img);
        card.appendChild(caption);
        results.appendChild(card);
      }
    });
}
 