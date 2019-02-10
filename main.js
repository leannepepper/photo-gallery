const searchInput = document.querySelector("#search");

function searchFunction() {

  const input = document.querySelector("#search");
  const filter = input.value.toUpperCase(); 
  const galleryList = document.querySelector(".gallery-container");
  const galleryItem = galleryList.querySelectorAll(".img-container");
  
    for(let i = 0; i < galleryItem.length; i++){
      const captions = galleryItem[i].getAttribute("data-title") 
      const isFiltered = captions.toUpperCase().search(filter) > -1
      galleryItem[i].style.display = isFiltered ? "" : "none"; 
    }
  }
  searchInput.addEventListener('keydown', searchFunction); 