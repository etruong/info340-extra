'use strict';

const ANIMALS = {
    cats: ["./img/cat/cat-1.jpg", "./img/cat/cat-2.jpg", "./img/cat/cat-3.jpg", "./img/cat/cat-4.jpg", 
        "./img/cat/cat-5.jpg", "./img/cat/cat-6.jpg"],
    dogs: ["./img/dog/dog-1.jpg", "./img/dog/dog-2.jpg", "./img/dog/dog-3.jpg"],
    fish: ["./img/fish/fish-1.jpg", "./img/fish/fish-2.jpg", "./img/fish/fish-3.jpg", 
        "./img/fish/fish-4.jpg"]
}

// Change the h2 tag content from Created by Elisa Truong to Created by {your name here}

// Create a p tag summarizing the different animals in the zoo (the ANIMALS object should contain all
// the animals that will be in the zoo) append this within the div with the class
// 'container' as the first child
// (hint use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// and https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

// Append a div with the id 'zoo' to the div with the class name 'container' the animal 
// container will contain all the animals
let containerRef = document.querySelector(".container");
let animalContainer = document.createElement("div");
animalContainer.id = "zoo";
containerRef.append(animalContainer);

// Create a function called generateAnimal that with the given animal image location in the
// ANIMALS constants, create and returns a div with the given size and background image 
// * Note make sure to set the background size as cover, background repeat as no repeat
function generateAnimal(imgLocation, size) {
    let animal = document.createElement("div");
    animal.style.backgroundImage = 'url(' + imgLocation + ')';
    animal.style.backgroundSize = "cover";
    animal.style.backgroundRepeat = "no-repeat";
    animal.style.width = size + "px";
    animal.style.height = size + "px";

    return animal;
}

// Make sure the function works by appending a cat to the zoo container, then comment out
// the code in further steps

// let cat = generateAnimal(ANIMALS.cats[0], 100);
// animalContainer.append(cat);

// Create a function called generateAnimalRow that with the given array of
// animal images generates a row of animals and appends them to the parent given
// make sure all the animals have a width and height that can be equally distributed
// with the given parent container (hint use getBoundatingClientRect())
function generateAnimalRow(animals, parent) {
    let size = Math.round(parent.getBoundingClientRect().width / animals.length);
    animals.forEach((animal) => {
        let animalDiv = generateAnimal(animal, size);
        parent.append(animalDiv)
    });
}

// generateAnimalRow(ANIMALS.cats, animalContainer);

// Calling your newly made function, generate all the animals in the
// ANIMALS constant into the zoo container; make sure that each different
// type category of animal is within it's own container 



// Empty out the 'container' div to start the new problem 
// (hint use: https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
document.querySelector(".container").innerHTML = "";


