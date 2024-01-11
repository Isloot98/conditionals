// Check the age against all the movie ratings. 
// Add an age and a movieRating variable and write a set of if, if else, and else statements to log out whether someone is allowed in to the cinema to watch a movie. 
// The UK ratings are U, PG, 12, 15, and 18.

let age = 10;
let movieRating = "PG";
let h1 = document.querySelector("h1");
let parentPresent = true;


const body = document.querySelector("body");

function checkMovie() {
    // Get values from input fields
    let age = parseInt(document.getElementById("age").value);
    let movieRating = document.getElementById("movieRating").value;
    let parentPresent = document.getElementById("parentPresent").checked;

    // Clear previous results
    document.body.querySelectorAll('h2').forEach(element => element.remove());


const canIWatchU = () => {
    if (movieRating === "U" && age > 0) {
        const h2 = document.createElement("h2");
        h2.textContent = "You can watch U rated movies!";
        body.appendChild(h2);
    }
}

canIWatchU();

const canIWatchPG = () => {
    if (movieRating === "PG") {
        const h2 = document.createElement("h2");
        if (age < 12 && parentPresent) {
            h2.textContent = "You can watch PG rated movies!";
        } else if (age < 12 && !parentPresent) {
            h2.textContent = "You cannot watch PG rated movies!";
        } else {
            h2.textContent = "You can watch PG rated movies!";
        }
        body.appendChild(h2);
    }
}

canIWatchPG();

const canIWatch12 = () => {
    if (movieRating === "12") {
        const h2 = document.createElement("h2");
        if (age >= 12) {
            h2.textContent = "You can watch 12 rated movies!";
        } else {
            h2.textContent = "You cannot watch 12 rated movies!";
        }
        body.appendChild(h2);
    }
}

canIWatch12();

const canIWatch15 = () => {
    if (movieRating === "15") {
        const h2 = document.createElement("h2");
        if (age >= 15) {
            h2.textContent = "You can watch 15 rated movies!";
        } else {
            h2.textContent = "You cannot watch 15 rated movies!";
        }
        body.appendChild(h2);
    }
}

canIWatch15();

const canIWatch18 = () => {
    if (movieRating === "18") {
        const h2 = document.createElement("h2");
        if (age > 17) {
            h2.textContent = "You can watch 18 rated movies!";
        } else {
            h2.textContent = "You cannot watch 18 rated movies!";
        }
        body.appendChild(h2);
    }
}
canIWatch18();
}