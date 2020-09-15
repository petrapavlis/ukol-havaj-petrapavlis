'use strict';

console.log('funguju!');

// domaci ukol

let osoba1 = {
    jmeno: 'Alena',
    uspory: 53000,
};

let osoba2 = {
    jmeno: 'Karolína',
    uspory: 68000,
};

const minimum = 100000;
const minimumOsoba = 50000;

// funkce, ktera zjisti a vypise celkovy stav
const naHavaj = (osoba1, osoba2) => {
    const mameCelkem = osoba1.uspory + osoba2.uspory;
    const zbyvaNasetrit = minimum - mameCelkem;
    if (mameCelkem >= minimum) {
        return console.log(`Holky: "Bombaaa, máme našetřeno ${mameCelkem} peněz a můžeme vyrazit na Havaj!"`);
    }
    else {
        return console.log(`Holky: "Ach jo, ještě musíme schrastit ${zbyvaNasetrit} peněz."`)
    }
}
console.log(naHavaj(osoba1, osoba2))


// funkce, ktere zjisti a vypisa stav jednotlivych osob
const alenaNaHavaj = (osoba1) => {
    const osoba1Nasetrit = minimumOsoba - osoba1.uspory;
    if (osoba1.uspory >= minimumOsoba) {
        return (`${osoba1.jmeno}: "Aloha! Peněz je dost a můžu jet."`);
    }
    else {
        return (`${osoba1.jmeno}: "Na Havaj mi chybí ještě ${osoba1Nasetrit} peněz."`);
    }
}
console.log(alenaNaHavaj(osoba1))

const karolinaNaHavaj = (osoba2) => {
    const osoba2Nasetrit = minimumOsoba - osoba2.uspory;
    if (osoba2.uspory >= minimumOsoba) {
        return (`${osoba2.jmeno}: "Aloha! Peněz je dost a můžu jet."`);
    }
    else {
        return (`${osoba2.jmeno}: "Na Havaj mi chybí ještě ${osoba2Nasetrit} peněz."`);
    }
}
console.log(karolinaNaHavaj(osoba2))


// mimo domaci ukol - jen takove zkouseni si...

// kliknutim na tlacitko prida hlasku v bubline podle stavu penez

const bubliny = () => {
    const bublina1 = document.querySelector('.bublina1')
    const bublina2 = document.querySelector('.bublina2')
    const bublina3 = document.querySelector('.bublina3')
    const bublina4 = document.querySelector('.bublina4')
    const mameCelkem = osoba1.uspory + osoba2.uspory;

    if (mameCelkem >= minimum) {
        return [bublina1.style.visibility = 'visible', bublina2.style.visibility = 'visible']
    }
    else {
        return [bublina3.style.visibility = 'visible', bublina4.style.visibility = 'visible']
    }
}
const tlacitko = document.querySelector('.tlacitko');
tlacitko.addEventListener('click', bubliny);


// na kliknuti kamkoliv spusti a stopne audio
const hudboHrej = (event) => {
    const audio = document.querySelector('audio');
    return audio.paused ? audio.play() : audio.pause();
};
document.body.addEventListener('click', hudboHrej);

