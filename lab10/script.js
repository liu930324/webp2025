var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';

function getFlickrPhotos() {
  const flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

  fetch(flickrUrl)
    .then(res => res.json())
    .then(data => {
      const photos = data.photos.photo;
      const gallery = document.getElementById("gallery");
      gallery.innerHTML = "";

      photos.forEach(photo => {
        const imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = photo.title || "Flickr Photo";
        gallery.appendChild(img);
      });
    })
    .catch(error => {
      console.error("取得圖片失敗", error);
    });
}