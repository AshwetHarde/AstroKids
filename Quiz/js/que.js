
// creating an array and passing the number, questions, options, and answers
const questions = [
    {
   numb: 1,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      
      "Mars",
      "Saturn",
	"Venus",
      "Jupiter"
    ]
  },
    {
    numb: 2,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    options: [
      "Mars",
      "Earth",
      "Jupiter",
      "Mercury"
    ]
  },
    {
    numb: 3,
    question: "Which celestial body is Earth's natural satellite?",
    answer: "Moon",
    options: [
      "Sun",
 	"Moon",
      "Mars",
      "Venus"
    ]
  },
    {
    numb: 4,
    question: "What is a group of stars forming a recognizable pattern called?",
    answer: "Constellation",
    options: [
      "Galaxy",
      "Constellation",
      "Nebula",
      "Meteor"
    ]
  },
    {
    numb: 5,
    question: "Which dwarf planet is farthest from the Sun in our solar system?",
    answer: "Pluto",
    options: [
      "Ceres",
      "Eris",
      "Haumea",
 	"Pluto"
    ]
  },
 {
    numb: 6,
    question: "What is the name of the closest star to Earth?",
    answer: "Sun",
    options: [
      "Proxima Centauri",
      "Sirius",
      "Betelgeuse",
      "Sun"
    ]
  },
{
    numb: 7,
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    answer: "Venus",
    options: [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ]
  },

{
    numb: 8,
    question: "What causes the seasons on Earth?",
    answer: "Tilt of the Earth's axis",
    options: [
      "Distance from the Sun",
      "Tilt of the Earth's axis",
      "Rotation speed",
      "Number of moons"
    ]
  },
{
    numb: 9,
    question: "What is the name of the galaxy that contains our solar system?",
    answer: "Milky Way",
    options: [
      "Andromeda",
      "Triangulum",
      "Milky Way",
      "Orion"
    ]
  },
{
    numb: 10,
    question: "What is the name of the closest known star system to our solar system?",
    answer: "Alpha Centauri",
    options: [
      "Proxima Centauri",
      "Sirius",
	"Betelgeuse",
      "Alpha Centauri"
      
    ]
  },
{
  numb: 11,
  question: "What is the smallest planet in our solar system?",
  answer: "Mercury",
  options: ["Venus", "Mars", "Earth", "Mercury"]
},
{
  numb: 12,
  question: "Which planet is known as the 'Blue Planet'?",
  answer: "Earth",
  options: ["Mars", "Jupiter", "Earth", "Uranus"]
},
{
  numb: 13,
  question: "What is the largest moon in our solar system?",
  answer: "Ganymede",
  options: ["Titan", "Io", "Europa", "Ganymede"]
},
{
  numb: 14,
  question: "What is the hottest planet in our solar system?",
  answer: "Venus",
  options: ["Mercury", "Venus", "Mars", "Earth"]
},
{
  numb: 15,
  question: "Which planet is known as the 'Ringed Planet'?",
  answer: "Saturn",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"]
},
{
  numb: 16,
  question: "What is the Great Red Spot on Jupiter?",
  answer: "A giant storm",
  options: ["A volcano", "A desert", "A giant storm", "A canyon"]
},
{
  numb: 17,
  question: "Which planet is known as the 'Ice Giant'?",
  answer: "Uranus",
  options: ["Neptune", "Uranus", "Pluto", "Eris"]
},
{
  numb: 18,
  question: "Which spacecraft was the first to reach interstellar space?",
  answer: "Voyager 1",
  options: ["Voyager 2", "Pioneer 10", "New Horizons", "Voyager 1"]
},
{
  numb: 19,
  question: "What is the name of the largest volcano in the solar system?",
  answer: "Olympus Mons",
  options: ["Mauna Kea", "Mount Everest", "Olympus Mons", "Mount Vesuvius"]
},
{
  numb: 20,
  question: "Which moon of Saturn is known for its geysers of water ice?",
  answer: "Enceladus",
  options: ["Titan", "Enceladus", "Iapetus", "Rhea"]
},
{
  numb: 21,
  question: "Who was the first human to journey into space?",
  answer: "Yuri Gagarin",
  options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"]
},
{
  numb: 22,
  question: "Which planet is known as the 'Red Giant'?",
  answer: "Betelgeuse",
  options: ["Antares", "Betelgeuse", "Arcturus", "VY Canis Majoris"]
},
{
  numb: 23,
  question: "What is the Kuiper Belt?",
  answer: "A region of the solar system beyond Neptune",
  options: [
    "A ring around Saturn",
    "A region of the solar system beyond Neptune",
    "A group of asteroids",
    "A belt of comets"
  ]
},
{
  numb: 24,
  question: "What is the primary component of Jupiter's atmosphere?",
  answer: "Hydrogen",
  options: ["Oxygen", "Methane", "Helium", "Hydrogen"]
},
{
  numb: 25,
  question: "Which spacecraft successfully landed on Mars in 2021 to search for signs of past life?",
  answer: "Perseverance Rover",
  options: ["Curiosity Rover", "Opportunity Rover", "Perseverance Rover", "Spirit Rover"]
},
{
  numb: 26,
  question: "What is the name of the second-largest moon in our solar system?",
  answer: "Titan",
  options: ["Io", "Europa", "Titan", "Ganymede"]
},
{
  numb: 27,
  question: "Who formulated the laws of planetary motion?",
  answer: "Johannes Kepler",
  options: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Tycho Brahe"]
},
{
  numb: 28,
  question: "Which space telescope was launched in 1990 and has provided valuable images of the universe?",
  answer: "Hubble Space Telescope",
  options: ["Chandra X-ray Observatory", "Spitzer Space Telescope", "Hubble Space Telescope", "James Webb Space Telescope"]
},
{
  numb: 29,
  question: "What is the Great Red Spot on Jupiter?",
  answer: "A giant storm",
  options: ["A desert", "A giant storm", "A mountain range", "A high-pressure zone"]
},
{
  numb: 30,
  question: "What is the primary source of energy for stars like the Sun?",
  answer: "Nuclear fusion",
  options: ["Gravitational contraction", "Chemical reactions", "Nuclear fission", "Nuclear fusion"]
},
{
  numb: 31,
  question: "What is the largest moon of Neptune?",
  answer: "Triton",
  options: ["Enceladus", "Titan", "Ganymede", "Triton"]
},
{
  numb: 32,
  question: "Which spacecraft was the first to successfully land on the Moon?",
  answer: "Apollo 11",
  options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 16"]
},
{
  numb: 33,
  question: "What is the name of the first artificial Earth satellite?",
  answer: "Sputnik 1",
  options: ["Explorer 1", "Vanguard 1", "Sputnik 1", "Telstar 1"]
},
{
  numb: 34,
  question: "Who was the first woman to travel into space?",
  answer: "Valentina Tereshkova",
  options: ["Yuri Gagarin", "John Glenn", "Valentina Tereshkova", "Sally Ride"]
},
{
  numb: 35,
  question: "In which year was the Hubble Space Telescope launched?",
  answer: "1990",
  options: ["1985", "1990", "1995", "2000"]
},
{
  numb: 36,
  question: "What is the purpose of the Mars Rovers, Spirit and Opportunity?",
  answer: "Study the Martian surface and geology",
  options: ["Search for signs of past life", "Study the Martian atmosphere", "Study the Martian surface and geology", "Search for water ice"]
},
{
  numb: 37,
  question: "Who is known as the 'Father of Rocketry'?",
  answer: "Konstantin Tsiolkovsky",
  options: ["Wernher von Braun", "Robert H. Goddard", "Konstantin Tsiolkovsky", "Hermann Oberth"]
},
{
  numb: 38,
  question: "Which space agency launched the Chandrayaan-2 mission to explore the Moon?",
  answer: "ISRO",
  options: ["NASA", "ESA", "ISRO", "Roscosmos"]
},
{
  numb: 39,
  question: "What is the name of ISRO's Mars Orbiter Mission launched in 2013?",
  answer: "Mangalyaan",
  options: ["Chandrayaan", "Mangalyaan", "Aditya-L1", "Astrosat"]
},
{
  numb: 40,
  question: "Which Indian satellite is dedicated to educational services?",
  answer: "EDUSAT",
  options: ["INSAT-3DR", "GSAT-15", "EDUSAT", "CARTOSAT-2"]
},
{
  numb: 41,
  question: "Which ISRO mission was India's first interplanetary mission?",
  answer: "Mars Orbiter Mission (Mangalyaan)",
  options: ["Chandrayaan-1", "Mars Orbiter Mission (Mangalyaan)", "Astrosat", "Aditya-L1"]
},
{
  numb: 42,
  question: "What is the name of India's first satellite?",
  answer: "Aryabhata",
  options: ["INSAT-1B", "Aryabhata", "Rohini", "IRS-1A"]
},
{
  numb: 43,
  question: "Which satellite series is dedicated to remote sensing by ISRO?",
  answer: "IRS (Indian Remote Sensing)",
  options: ["GSAT (Geostationary Satellite)", "CARTOSAT", "INSAT", "IRS (Indian Remote Sensing)"]
},
{
  numb: 44,
  question: "What does the acronym 'ISRO' stand for?",
  answer: "Indian Space Research Organisation",
  options: [
    "International Space Research Organization",
    "Indian Satellite Research Organization",
    "Indian Space Research Observatory",
    "Indian Space Research Organisation"
  ]
},
{
  numb: 45,
  question: "Which Indian space telescope is dedicated to astronomical observations?",
  answer: "Astrosat",
  options: ["INSAT-3DR", "EDUSAT", "CARTOSAT", "Astrosat"]
},
{
  numb: 46,
  question: "Which ISRO mission aimed to explore the Moon's south polar region?",
  answer: "Chandrayaan-2",
  options: ["Mangalyaan", "Chandrayaan-1", "Aditya-L1", "Chandrayaan-2"]
},
{
  numb: 47,
  question: "What is the name of ISRO's spaceport in Andhra Pradesh?",
  answer: "Sriharikota Range (SHAR)",
  options: ["Vikram Sarabhai Space Centre (VSSC)", "Satish Dhawan Space Centre (SDSC)", "Sriharikota Range (SHAR)", "Udhagamandalam Space Centre (USC)"]
},
{
  numb: 48,
  question: "Which mission made India the first Asian nation to reach Martian orbit?",
  answer: "Mars Orbiter Mission (Mangalyaan)",
  options: ["Chandrayaan-1", "Astrosat", "Mars Orbiter Mission (Mangalyaan)", "INSAT-3DR"]
},
{
  numb: 49,
  question: "What is the name of the Indian crewed space mission planned by ISRO?",
  answer: "Gaganyaan",
  options: ["Aditya-L1", "Gaganyaan", "Chandrayaan-3", "RISAT"]
},
{
  numb: 50,
  question: "Which ISRO satellite series is dedicated to meteorological observations?",
  answer: "INSAT (Indian National Satellite System)",
  options: ["IRS (Indian Remote Sensing)", "CARTOSAT", "GSAT (Geostationary Satellite)", "INSAT (Indian National Satellite System)"]
},
{
  numb: 51,
  question: "Which ISRO satellite was dedicated to the study of the ionosphere?",
  answer: "INSAT-3DR",
  options: ["Aryabhata", "INSAT-3DR", "RISAT", "GSAT (Geostationary Satellite)"]
},
{
  numb: 52,
  question: "What is the primary objective of ISRO's Aditya-L1 mission?",
  answer: "Studying the Sun",
  options: ["Studying the Sun", "Exploring Mars", "Observing distant galaxies", "Mapping Earth's surface"]
},
{
  numb: 53,
  question: "Which satellite is part of ISRO's RISAT series for all-weather surveillance?",
  answer: "RISAT-1",
  options: ["CARTOSAT", "Astrosat", "RISAT-1", "INSAT-3DR"]
},
{
  numb: 54,
  question: "Which ISRO mission aimed to study the Earth's surface and atmosphere?",
  answer: "CARTOSAT-3",
  options: ["Chandrayaan-2", "Mars Orbiter Mission (Mangalyaan)", "CARTOSAT-3", "INSAT-3DR"]
},
{
  numb: 55,
  question: "Which Indian space telescope is dedicated to providing education through satellite communication?",
  answer: "EDUSAT",
  options: ["EDUSAT", "INSAT-3DR", "Astrosat", "RISAT"]
},
{
  numb: 56,
  question: "Which ISRO satellite series is focused on communication purposes?",
  answer: "GSAT (Geostationary Satellite)",
  options: ["IRS (Indian Remote Sensing)", "CARTOSAT", "INSAT (Indian National Satellite System)", "GSAT (Geostationary Satellite)"]
},
{
  numb: 57,
  question: "What is the name of ISRO's space research center located in Thiruvananthapuram?",
  answer: "Vikram Sarabhai Space Centre (VSSC)",
  options: ["Udhagamandalam Space Centre (USC)", "Sriharikota Range (SHAR)", "Vikram Sarabhai Space Centre (VSSC)", "Satish Dhawan Space Centre (SDSC)"]
},
{
  numb: 58,
  question: "Which ISRO mission aims to explore the dynamics of Earth's upper atmosphere?",
  answer: "Aditya-L1",
  options: ["Aditya-L1", "Gaganyaan", "Chandrayaan-3", "RISAT-2"]
},
{
  numb: 59,
  question: "What is the name of the first Indian satellite launched by ISRO?",
  answer: "Aryabhata",
  options: ["INSAT-1B", "Rohini", "Aryabhata", "IRS-1A"]
},
{
  numb: 60,
  question: "Which ISRO mission aimed to study the lunar surface and exosphere?",
  answer: "Chandrayaan-1",
  options: ["Mangalyaan", "Chandrayaan-1", "Astrosat", "Aditya-L1"]
},
{
  numb: 61,
  question: "What is the Kuiper Belt?",
  answer: "A region of the Solar System beyond Neptune, containing many small icy bodies.",
  options: ["A group of satellites around Earth", "A region of the Solar System beyond Neptune, containing many small icy bodies.", "A galaxy cluster", "A comet"]
},
{
  numb: 62,
  question: "Which spacecraft made the first successful landing on Mars?",
  answer: "Viking 1",
  options: ["Curiosity", "Viking 1", "Opportunity", "Mars Pathfinder"]
},
{
  numb: 63,
  question: "What is the Oort Cloud?",
  answer: "A hypothetical region of space containing a reservoir of icy bodies.",
  options: ["A group of asteroids between Mars and Jupiter", "A moon of Neptune", "A hypothetical region of space containing a reservoir of icy bodies.", "A large galaxy"]
},
{
  numb: 64,
  question: "Which planet is known as the 'Gas Giant'?",
  answer: "Jupiter",
  options: ["Saturn", "Neptune", "Jupiter", "Uranus"]
},
{
  numb: 65,
  question: "What is the name of the farthest known dwarf planet in our solar system?",
  answer: "Eris",
  options: ["Eris", "Pluto", "Haumea", "Ceres"]
},
{
  numb: 66,
  question: "Which galaxy is the Milky Way's closest neighbor?",
  answer: "Andromeda",
  options: ["Andromeda", "Triangulum", "Orion", "Messier 87"]
},
{
  numb: 67,
  question: "What is a light-year?",
  answer: "The distance that light travels in one year.",
  options: ["The time it takes for light to travel one meter", "The distance that light travels in one year.", "A unit of brightness", "The time it takes for light to orbit the Sun"]
},
{
  numb: 68,
  question: "What is a supernova?",
  answer: "An exploding star that increases in brightness many thousands of times.",
  options: ["An exploding star that increases in brightness many thousands of times.", "A type of galaxy", "A comet passing close to the Sun", "A type of black hole"]
},
{
  numb: 69,
  question: "Which telescope is famous for its observations in the Infrared spectrum?",
  answer: "Hubble Space Telescope",
  options: ["Kepler Space Telescope", "Chandra X-ray Observatory", "Hubble Space Telescope", "James Webb Space Telescope"]
},
{
  numb: 70,
  question: "What is a pulsar?",
  answer: "A highly-magnetized rotating neutron star that emits beams of electromagnetic radiation.",
  options: ["A type of galaxy", "A region with intense gravitational pull", "A highly-magnetized rotating neutron star that emits beams of electromagnetic radiation.", "A type of comet"]
},
{
  numb: 71,
  question: "Which moon of Jupiter is known for its intense volcanic activity?",
  answer: "Io",
  options: ["Io", "Europa", "Ganymede", "Callisto" ]
},
{
  numb: 72,
  question: "What is the primary function of the International Space Station (ISS)?",
  answer: "Conduct scientific research in microgravity.",
  options: ["Space tourism", "Military operations", "Conduct scientific research in microgravity.", "Deep space exploration"]
},
{
  numb: 73,
  question: "Who was the first human to journey into space?",
  answer: "Yuri Gagarin",
  options: ["Yuri Gagarin", "Neil Armstrong",  "Buzz Aldrin", "John Glenn"]
},
{
  numb: 74,
  question: "What is the name of the largest volcano on Mars?",
  answer: "Olympus Mons",
  options: ["Mauna Kea", "Mount Everest", "Olympus Mons", "Mount Vesuvius"]
},
{
  numb: 75,
  question: "Which spacecraft made the first successful soft landing on Venus?",
  answer: "Venera 7",
  options: ["Venera 7","Pioneer Venus", "Magellan",  "Venus Express"]
},
{
  numb: 76,
  question: "What is the name of the phenomenon where light is temporarily bent around a massive object?",
  answer: "Gravitational lensing",
  options: ["Gravitational lensing", "Optical refraction",  "Solar flares", "Quantum entanglement"]
},
{
  numb: 77,
  question: "Which planet has the Great Red Spot, a giant storm that has raged for at least 350 years?",
  answer: "Jupiter",
  options: ["Jupiter", "Saturn", "Uranus",  "Neptune"]
},
{
  numb: 78,
  question: "What is the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
  answer: "Sputnik 1",
  options: ["Explorer 1", "Hubble", "Sputnik 1", "Telstar"]
},
{
  numb: 79,
  question: "What is the name of the space agency of India?",
  answer: "ISRO (Indian Space Research Organisation)",
  options: ["NASA", "ESA (European Space Agency)", "ISRO (Indian Space Research Organisation)", "CNSA (China National Space Administration)"]
},
{
  numb: 80,
  question: "Which spacecraft holds the record for the farthest human-made object from Earth?",
  answer: "Voyager 1",
  options: ["New Horizons", "Voyager 1", "Cassini", "Pioneer 10"]
},
{
  numb: 81,
  question: "What is the purpose of the James Webb Space Telescope?",
  answer: "To study the universe in infrared wavelengths.",
  options: ["To search for extraterrestrial life", "To study black holes", "To study the universe in infrared wavelengths.", "To explore the outer planets"]
},
{
  numb: 82,
  question: "What is the event horizon of a black hole?",
  answer: "The boundary surrounding a black hole beyond which nothing can escape its gravitational pull.",
  options: ["The surface of a black hole", "The boundary surrounding a black hole beyond which nothing can escape its gravitational pull.", "A burst of radiation from a black hole", "The time when a black hole forms"]
},
{
  numb: 83,
  question: "Which moon of Saturn is known for its intriguing hexagonal-shaped cloud pattern at its north pole?",
  answer: "Titan",
  options: ["Enceladus", "Rhea", "Mimas", "Titan"]
},
{
  numb: 84,
  question: "What is the name of the first American woman in space?",
  answer: "Sally Ride",
  options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Christa McAuliffe"]
},
{
  numb: 85,
  question: "Which spacecraft made the first successful landing on the Moon?",
  answer: "Luna 2",
  options: ["Apollo 11", "Luna 2", "Chang'e 3", "Surveyor 1"]
},
{
  numb: 86,
  question: "What is the primary goal of the Mars Science Laboratory mission?",
  answer: "To explore Mars' habitability and the possibility of life.",
  options: ["To search for signs of ancient civilizations on Mars", "To study the geology of Mars' moons", "To explore Mars' habitability and the possibility of life.", "To test new propulsion technologies"]
},
{
  numb: 87,
  question: "What is the name of the first artificial satellite of Earth?",
  answer: "Sputnik 1",
  options: ["Sputnik 1","Explorer 1", "Hubble", "Telstar"]
},
{
  numb: 88,
  question: "Which planet is often called the 'Evening Star' or 'Morning Star'?",
  answer: "Venus",
  options: ["Mercury", "Venus", "Mars", "Jupiter"]
},
{
  numb: 89,
  question: "What is the largest moon of Neptune?",
  answer: "Triton",
  options: ["Nereid", "Proteus", "Triton", "Larissa"]
},
{
  numb: 90,
  question: "Which spacecraft made the first successful soft landing on Mars?",
  answer: "Viking 1",
  options: ["Viking 1","Curiosity", , "Opportunity", "Mars Pathfinder"]
},
{
  numb: 91,
  question: "What is the primary purpose of the Hubble Space Telescope?",
  answer: "Observing distant galaxies and nebulae.",
  options: ["Studying black holes", "Monitoring space weather", "Observing distant galaxies and nebulae.", "Mapping asteroids in the asteroid belt"]
},
{
  numb: 92,
  question: "What is the largest volcano on Earth?",
  answer: "Mauna Loa",
  options: ["Mount Vesuvius", "Mount Everest", "Mauna Loa", "Kilauea"]
},
{
  numb: 93,
  question: "Which spacecraft studied the giant planet Jupiter and its moons from 1995 to 2003?",
  answer: "Galileo",
  options: ["Galileo","Cassini", "New Horizons", "Voyager 2" ]
},
{
  numb: 94,
  question: "What is the name of the brightest star in the night sky?",
  answer: "Sirius",
  options: ["Vega", "Betelgeuse", "Alpha Centauri", "Sirius"]
},
{
  numb: 95,
  question: "What is the name of the second-largest planet in our solar system, known for its stunning ring system?",
  answer: "Saturn",
  options: ["Saturn","Jupiter", "Mars",  "Uranus"]
},
{
  numb: 96,
  question: "What is the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
  answer: "Sputnik 1",
  options: ["Explorer 1", "Hubble", "Sputnik 1", "Telstar"]
},
{
  numb: 97,
  question: "Which moon of Saturn is known for its intriguing hexagonal-shaped cloud pattern at its north pole?",
  answer: "Titan",
  options: ["Enceladus", "Rhea", "Mimas", "Titan"]
},
{
  numb: 98,
  question: "What is the name of the first American woman in space?",
  answer: "Sally Ride",
  options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Christa McAuliffe"]
},
{
  numb: 99,
  question: "Which spacecraft made the first successful landing on the Moon?",
  answer: "Luna 2",
  options: ["Luna 2","Apollo 11",  "Chang'e 3", "Surveyor 1"]
},
{
  numb: 100,
  question: "What is the primary goal of the Mars Science Laboratory mission?",
  answer: "To explore Mars' habitability and the possibility of life.",
  options: ["To explore Mars' habitability and the possibility of life.","To search for signs of ancient civilizations on Mars", "To study the geology of Mars' moons",  "To test new propulsion technologies"]
},


  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

