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
    playSound('./assets/aliens/screech03.mp3', ':: Xenomorph');
});

apone.addEventListener('click', () => {
    playSound('./assets/apone/assholes-elbows.mp3', ':: Sergeant Al Apone');
});

bishop.addEventListener('click', () => {
    playSound('./assets/bishop/synthetic.mp3', ':: Lance Bishop 341-B synthetic humanoid');
});

burke.addEventListener('click', () => {
    playSound('./assets/burke/grunt.mp3', ':: Carter J. Burke');
});

ferro.addEventListener('click', () => {
    playSound('./assets/farro/pipe.mp3', ':: Corporal Colette Ferro');
});

frost.addEventListener('click', () => {
    playSound('./assets/frost/bad-feeling.mp3', ':: Private First Class Ricco Frost');
});

hicks.addEventListener('click', () => {
    playSound('./assets/hicks/purpose.mp3', ':: Corporal Dwayne Hicks');
});

hudson.addEventListener('click', () => {
    playSound('./assets/hudson/demoralized.mp3', ':: Private First Class William L. Hudson');
});

techno.addEventListener('click', () => {
    playSound('./assets/misc/fifteen-minutes-safe-distance.mp3', ':: Emergency Broadcast System');
});

newt.addEventListener('click', () => {
    playSound('./assets/newt/shortcut.mp3', ':: Rebecca "Newt" Jorden');
});

ripley.addEventListener('click', () => {
    playSound('./assets/ripley/iqs.mp3', ':: Lieutenant Ellen Ripley');
});

vasquez.addEventListener('click', () => {
    playSound('./assets/vasquez/pendejo.mp3', ':: Private First Class Jenette Vasquez');
});

function playSound(sound, name){
    let audio = new Audio(sound);
    audio.play();
    clickedCharacter.textContent = name;
}

document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        playSound('./assets/aliens/screech03.mp3', ':: Xenomorph');
    } else if (e.key === '2') {
        playSound('./assets/apone/assholes-elbows.mp3', ':: Sergeant Al Apone');
    } else if (e.key === '3') {
        playSound('./assets/bishop/synthetic.mp3', ':: Lance Bishop 341-B synthetic humanoid');
    } else if (e.key === '4') {
        playSound('./assets/burke/grunt.mp3', ':: Carter J. Burke');
    } else if (e.key === '5') {
        playSound('./assets/farro/pipe.mp3', ':: Corporal Colette Ferro');
    } else if (e.key === '6') {
        playSound('./assets/frost/bad-feeling.mp3', ':: Private First Class Ricco Frost');
    } else if (e.key === '7') {
        playSound('./assets/hicks/purpose.mp3', ':: Corporal Dwayne Hicks');
    } else if (e.key === '8') {
        playSound('./assets/hudson/demoralized.mp3', ':: Private First Class William L. Hudson');
    } else if (e.key === '9') {
        playSound('./assets/misc/fifteen-minutes-safe-distance.mp3', ':: Emergency Broadcast System');
    } else if (e.key === '0') {
        playSound('./assets/newt/shortcut.mp3', ':: Rebecca "Newt" Jorden');
    } else if (e.key === '-') {
        playSound('./assets/ripley/iqs.mp3', ':: Lieutenant Ellen Ripley');
    } else if (e.key === '=') {
        playSound('./assets/vasquez/pendejo.mp3', ':: Private First Class Jenette Vasquez');
    }
})