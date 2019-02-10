function searchFunction() {
  // Declare variables
  var input = document.querySelector("#search");
  var filter = input.value.toUpperCase(); 
  var galleryList = document.querySelector(".gallery-container");
  var galleryItem = galleryList.querySelectorAll(".img-container");
  
    for(let i = 0; i < galleryItem.length; i++){
      var captions = galleryItem[i].getAttribute("data-title"); 
        // console.log(captions.toUpperCase());
        if(captions.toUpperCase().search(filter) > -1) {
          galleryItem[i].style.display = ""; 
        } else {
          galleryItem[i].style.display = "none";
        }
    }
  }
