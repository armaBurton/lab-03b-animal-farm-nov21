// import functions
const aliensArray = ['aliens', 'apone', 'bishop', 'burke', 'ferro', 'frost', 'hicks', 'hudson', 'techno', 'newt', 'ripley', 'vasquez'];

const aliens = document.getElementById('aliens');
const apone = document.getElementById('apone');
const bishop = document.getElementById('bishop');
const burke = document.getElementById('burke');
const ferro = document.getElementById('ferro');
const frost = document.getElementById('frost');
const hicks = document.getElementById('hicks');
const hudson = document.getElementById('hudson');
const techno = document.getElementById('techno');
const newt = document.getElementById('newt');
const ripley = document.getElementById('ripley');
const vasquez = document.getElementById('vasquez');

const clickedCharacter = document.getElementById('clicked-character');

aliens.addEventListener('click', () => {
    let audio = new Audio('./assets/aliens/screech01.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Xenomorph';
});

apone.addEventListener('click', () => {
    let audio = new Audio('./assets/apone/assholes-elbows.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Sergeant Al Apone';
});

bishop.addEventListener('click', () => {
    let audio = new Audio('./assets/bishop/synthetic.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Lance Bishop 341-B synthetic humanoid';
});

burke.addEventListener('click', () => {
    let audio = new Audio('./assets/burke/grunt.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Carter J. Burke';
});

ferro.addEventListener('click', () => {
    let audio = new Audio('./assets/ferro/pipe.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Corporal Colette Ferro';
});

frost.addEventListener('click', () => {
    let audio = new Audio('./assets/frost/bad-feeling.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Private First Class Ricco Frost';
});

hicks.addEventListener('click', () => {
    let audio = new Audio('./assets/hicks/purpose.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Corporal Dwayne Hicks';
});

hudson.addEventListener('click', () => {
    let audio = new Audio('./assets/hudson/demoralized.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Private First Class William L. Hudson';
});

techno.addEventListener('click', () => {
    let audio = new Audio('./assets/misc/fifteen-minutes-safe-distance.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Emergency Broadcast System';
});

newt.addEventListener('click', () => {
    let audio = new Audio('./assets/newt/shortcut.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Rebecca "Newt" Jorden';
});

ripley.addEventListener('click', () => {
    let audio = new Audio('./assets/ripley/iqs.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Lieutenant Ellen Ripley';
});

vasquez.addEventListener('click', () => {
    let audio = new Audio('./assets/vasquez/pendejo.mp3');
    audio.play();
    clickedCharacter.textContent = ':: Private First Class Jenette Vasquez';
});


// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
