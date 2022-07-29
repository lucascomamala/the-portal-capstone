// Array of film objects
const films = [
{
  title: 'Fire of Love',
  img: './media/films/fire_of_love.jpg',
  director: 'Sara Dosa',
  desc: 'For two decades, the daring French volcanologist couple - Katia and Maurice Krafft - were seduced by the thrill and danger of this elemental love triangle.',
  alt: 'Fire of Love poster image',
}, {
  title: 'Gentle',
  img: './media/films/gentle.jpg',
  director: 'Anna Eszter Nemes',
  desc: 'Once the spray tan and stage makeup are washed away after her latest bodybuilding competition, Edina is immediately back at the gym.',
  alt: 'Gentle poster image',
}, {
  title: 'When You Finish Saving the World',
  img: './media/films/save_the_world.jpg',
  director: 'Jesse Eisenberg',
  desc: 'From his bedroom home studio, high school student Ziggy performs original folk-rock songs for an adoring online fan base.',
  alt: 'When You Finish Saving the World poster image',
}, {
  title: 'You Won\'t Be Alone',
  img: './media/films/alone.jpg',
  director: 'Goran Stolevski',
  desc: 'In an isolated mountain village in 19th-century Macedonia, a young girl is taken from her mother and transformed into a witch by an ancient, shape-shifting spirit.',
  alt: 'Fire of Love poster image',
}, {
  title: 'Call Jane',
  img: './media/films/call_jane.jpg',
  director: 'Phyllis Nagy',
  desc: 'Chicago, 1968. As a city and the nation are poised on the brink of violent political upheaval, suburban housewife Joy leads an ordinary life with her husband and daughter.',
  alt: 'Call Jane poster image',
}, {
  title: 'Emergency',
  img: './media/films/emergency.jpg',
  director: 'Carey Williams',
  desc: 'Straight-A college student Kunle and his laid-back best friend, Sean, are about to have the most epic night of their lives.',
  alt: 'Emergency poster image',
}, {
  title: 'A Love Song',
  img: './media/films/love_song.jpg',
  director: 'Max Walker-Silverman',
  desc: 'After unhitching her camper at a lakeside in the mountains, Faye finds her rhythm cooking meals, retrieving crawfish from a trap, and scanning her old box radio for a station.',
  alt: 'A Love Song poster image',
}, {
  title: 'After Yang',
  img: './media/films/after_yang.jpeg',
  director: 'Kogonada',
  desc: 'When Yang — a lifelike, artificially intelligent android that Jake and Kyra buy as a companion for their adopted daughter — abruptly stops functioning, Jake just wants him repaired quickly and cheaply.',
  alt: 'After Yang poster image',
}, {
  title: 'Watcher',
  img: './media/films/watcher.jpeg',
  director: 'Chloe Okuno',
  desc: 'Julia joins her husband when he relocates to his family’s native Romania for a new job. Having recently abandoned her acting career, she finds herself frequently alone and unoccupied.',
  alt: 'Watcher poster image',
}, {
  title: 'Navalny',
  img: './media/films/navalny.jpg',
  director: 'Daniel Roher',
  desc: 'In August 2020, a plane traveling from Siberia to Moscow made an emergency landing. One of its passengers, Russian opposition leader Alexei Navalny, was deathly ill.',
  alt: 'Navalny poster image',
}, {
  title: 'Descendant',
  img: './media/films/descendant.jpeg',
  director: 'Margaret Brown',
  desc: 'History exists beyond what is written. The Africatown residents in Mobile, Alabama, have shared stories about their origins for generations.',
  alt: 'Descendant poster image',
}, {
  title: 'Utama',
  img: './media/films/utama.jpg',
  director: 'Alejandro Loayza Grisi',
  desc: 'Time seems to move slowly far out on the cracked, dry land of the Bolivian Altiplano, where an elderly Quechua couple, Virginio and Sisa, carry on a humble routine.',
  alt: 'Utama poster image',
}, {
  title: 'Klondike',
  img: './media/films/klondike.jpeg',
  director: 'Maryna Er Gorbach',
  desc: 'July 2014. Expectant parents Irka and Tolik live in the Donetsk region of eastern Ukraine near the Russian border, disputed territory in the early days of the Donbas war.',
  alt: 'Klondike poster image',
}, {
  title: 'Calendar Girls',
  img: './media/films/calendar_girls.jpeg',
  director: 'Maria Loohufvud & Love Martinsen',
  desc: 'Whether they’re performing at an animal rescue center benefit, a church fundraiser, or a shrimp parade, the Calendar Girls give it all they’ve got.',
  alt: 'Calendar Girls poster image',
}, {
  title: 'Sirens',
  img: './media/films/sirens.jpeg',
  director: 'Rita Baghdadi',
  desc: 'True to their name, Slave to Sirens — the first and only all-woman thrash metal band in the Middle East — are utterly magnetic.',
  alt: 'Sirens poster image',
}, {
  title: 'La Guerra Civil',
  img: './media/films/guerra_civil.jpeg',
  director: 'Eva Longoria Bastón',
  desc: 'For Mexican and Mexican American communities, boxing is more than a sport. From ring walk-ins to trunks, opponents take full advantage of the theatrical spectacle, narrating their histories and the stories of their individual fanbases.',
  alt: 'La Guerra Civil poster image',
},
];

const tree = document.createDocumentFragment();
const btnMore = document.getElementById('btn-more');
const btnLess = document.getElementById('btn-less');
const container = document.getElementById('films');

let filmCounter = 0;

let div1;
let div2;
let img;
let div3;
let h3;
let h4;
let div4;
let p;

function expandShowcase() {
  // Create and append the tree for one film twice
  for (let i = 0; i < 2; i += 1) {
    div1 = document.createElement('div');
    div1.setAttribute('class', 'films');
    div2 = document.createElement('div');
    div2.setAttribute('class', 'film-img-wrapper');
    img = document.createElement('img');
    img.src = films[filmCounter].img;
    img.alt = films[filmCounter].alt;
    div2.appendChild(img);
    div1.appendChild(div2);
    div3 = document.createElement('div');
    div3.setAttribute('class', 'film-details');
    h3 = document.createElement('h3');
    h3.textContent = films[filmCounter].title;
    h4 = document.createElement('h4');
    h4.textContent = films[filmCounter].director;
    div4 = document.createElement('div');
    div4.setAttribute('class', 'separator2');
    p = document.createElement('p');
    p.textContent = films[filmCounter].desc;
    div3.appendChild(h3);
    div3.appendChild(h4);
    div3.appendChild(div4);
    div3.appendChild(p);
    div1.appendChild(div3);
    tree.appendChild(div1);
    container.appendChild(tree);
    filmCounter += 1;

    if (filmCounter >= films.length) {
      btnMore.style.display = 'none';
      btnLess.style.display = 'block';
      break;
    }
  }
}

function collapseShowcase() {
  for (let i = filmCounter - 1; i >= 2; i -= 1) {
    container.removeChild(container.children[i]);
  }
  filmCounter = 2;
  btnMore.style.display = 'block';
  btnLess.style.display = 'none';
}

// Event listeners for buttons
btnMore.addEventListener('click', expandShowcase);
btnLess.addEventListener('click', collapseShowcase);

// Load two at the start
window.addEventListener('load', () => {
  for (let i = 0; i < 3; i += 1) {
    expandShowcase();
  }
});
