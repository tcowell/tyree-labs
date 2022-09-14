console.log('Started Application.');

function updateElement() {
    console.log('Running the updateElement function!');
    const noteImageElement = document.querySelector('.notecard-thumbnail');
    noteImageElement.src = 'assets/warhol-frog.png';
    console.log(noteImageElement);
  }