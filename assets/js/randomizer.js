var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    loop: true,
    grabCursor: true,
  });

  image_array = [
    "berserk.jpg",
    "junji.jpg",
    "parasyte.jpg",
    "tokyo.jpg",
    "neverland.jpg",
    "hs.jpg",
    "hellsing.jpg",
    "gantz.jpg"
    
    ]
    
    function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
    
    // Get an image at the random_index
    selected_image = image_array[random_index]
    
    // Display the image
    document.getElementById('image_shower').src = `./assets/img/${selected_image}`
    }
    