function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var url = 'https://graphql.anilist.co',
  options = {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer' + accessToken,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          query: query
      })
  };
fetch(url, options).then(handleResponse, handleError);
function handleResponse (response) {
  console.log(response);
}
const base_url = "'https://graphql.anilist.co";
function searchAnime(event){
event.preventDefault();
const form = new FormData(this);
const query = form.get("search");
console.log(query);
fetch('${base_url}/=${query}')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.warn(err.message));
}
function pageLoaded(){
const form = document.getElementById('search_form');
form.addEventListener("submit", searchAnime);
}