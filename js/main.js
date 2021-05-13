//initilize and add the map
function initMap() {
  //your location
  const loc={ lat: -34.397, lng: 150.644 };
  //centered map on location
 const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center:loc
  });
  //the market postioned at location
  const marker = new google.maps.Marker({position:loc,map:map});
}

// Sticky menu background i.e for height >150, the navbar will become transparent while scrolling down
window.addEventListener('scroll',function(){
  if (window.scrollY>150){
    document.querySelector('#navbar').style.opacity=0.9;  
  } else{
    document.querySelector('#navbar').style.opacity=1;
  }
});

// Smooth Scrolling/
$('#navbar a, .btn').on('click', function(event) {
if(this.hash !== '') {
  event.preventDefault();

  const hash = this.hash;

  $('html,body').animate(
  {
    scrollTop: $(hash).offset().top -100
  },
  800 
  );
}
});
// 800 is the milisecond speed of scrolling
// and -100 is done for displaying of the heading which was hidden, on clicking the home,who,what etc;