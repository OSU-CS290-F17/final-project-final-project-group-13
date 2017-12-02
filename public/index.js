// show modal on add click
function showAddEventModal(){
  var showAddEventModal = document.getElementById('add-event-modal');

  showAddEventModal.classList.remove('hidden');
}

var addEventButton = document.getElementById('addEvent');
addEventButton.addEventListener('click', showAddEventModal);



// hide modal on exit click

function hideEventModal(){
  var hideAddEventModal = document.getElementById('add-event-modal');
  hideAddEventModal.classList.add('hidden');
  // call clear fields
}

var closeEventButton = document.getElementById('modal-cancel');
closeEventButton.addEventListener('click', hideEventModal);

var xEventButton = document.getElementById('modal-close');
xEventButton.addEventListener('click', hideEventModal);


// Clear out modal fields

//insert new post function

//parse fields function

//wait until all dom elements have been loaded in
