"use strict";

document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json();
    const people = data.results;

    // const maleCharacters = people.filter((person) => person.gender == "male");
    // const femaleCharacters = people.filter((person) => person.gender == "female");

    // const male = maleCharacters.map((m) => m.name);
    // const female = femaleCharacters.map((f) => f.name);

    // console.log(`Male: ${male}`);
    // console.log(`Female: ${female}`);

    // addCharacter("male", male)
    // addCharacter("female", female)

    const maleDropdown = document.getElementById("male-dropdown");
    const femaleDropdown = document.getElementById("female-dropdown");

    people.map((person, index) => {
        const listItem = document.createElement("li");
        const link = document.createElement("button");
        link.className = "dropdown-item";
        link.setAttribute("data-bs-toggle", "offcanvas")
        link.setAttribute("data-bs-target", "#staticBackdrop")
        link.setAttribute("aria-controls", "staticBackdrop")
        link.type = "button"
        link.target= "_blank"
        link.addEventListener("click", () => {
            getInfo(index);
        })
        link.textContent = person.name;
        listItem.appendChild(link);

        if (person.gender === "male") {
            maleDropdown.appendChild(listItem);
        } else if (person.gender === "female") {
            femaleDropdown.appendChild(listItem);
        }
    });

    // for (let i = 0; i < people.length; i++) {
    //     const listItem = document.createElement("li");
    //     const link = document.createElement("a");
    //     link.className = "dropdown-item";
    //     link.href = `https://swapi.dev/api/people/${i+1}`;
    //     link.textContent = people[i].name;
    //     listItem.appendChild(link);

    //     if (people[i].gender === "male") {
    //         maleDropdown.appendChild(listItem);
    //     } else if (people[i].gender === "female") {
    //         femaleDropdown.appendChild(listItem);
    //     }
    // }
});

const getInfo = async (index) => {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json();
    const people = data.results;
    console.log(people[index])
}

// const addCharacter = (gender, names) => {
//     for (let i = 0; i < names.length; i++) {
//         const character = document.createElement("li");
//         character.className = "dropdown-item";
//         character.innerHTML = names[i];

//         const dropdown = document.querySelector(`#${gender} ul`)
//         dropdown.appendChild(character)
//     }
// }