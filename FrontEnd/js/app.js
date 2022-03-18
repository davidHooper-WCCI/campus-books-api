import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
import campusView from "./campusView.js";
//import { campuses } from "./campusesJson.js";
const containerEl = document.querySelector(".container");

function makeHomeView() {
    fetch("http://localhost:8080/campuses")
        .then(res => res.json())
        .then(campuses => {
            makeHomeViewFromJSON(campuses);
        })
}

function makeHomeViewFromJSON(campuses) {
    console.log(campuses)
    containerEl.innerHTML = header();
    containerEl.innerHTML += home(campuses);
    containerEl.innerHTML += footer();

    const campusEl = containerEl.querySelectorAll(".campus");

    campusEl.forEach(campus => {
        let campusIdEl = campus.querySelector(".id_field");
        const campusH2 = campus.querySelector(".campus-location");
        campusH2.addEventListener("click", () => {
            campuses.forEach(campusJson => {
                if (campusJson.id == campusIdEl.value) {
                    makeCampusView(campusJson);
                }
            })
            // alert("You clicked me: " + campusIdEl.value);
        })
        const deleteButton = campus.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            fetch("http://localhost:8080/campuses/" + campusIdEl.value, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(newCampuses => {
                    makeHomeViewFromJSON(newCampuses);
                })
        })
        const updateButton = campus.querySelector(".update-button");
        updateButton.addEventListener("click", () => {
            const updateInput = campus.querySelector(".update-tech-stack");
            fetch("http://localhost:8080/campuses/" + campusIdEl.value, {
                    method: 'PATCH',
                    body: updateInput.value
                })
                .then(res => res.json())
                .then(newCampuses => {
                    makeHomeViewFromJSON(newCampuses);
                })
        })
    })
}

function makeCampusView(campus) {
    // fetch("http://localhost:8080/campuses/" + campusId)
    //     .then(res => res.json())
    //     .then(campus => {
    console.log(campus);
    containerEl.innerHTML = header();
    containerEl.innerHTML += campusView(campus);
    containerEl.innerHTML += footer();

    const backButton = containerEl.querySelector(".back-navigation");
    backButton.addEventListener("click", () => {
        makeHomeView();
    })

    const bookNameInput = containerEl.querySelector(".bookNameInput");
    const bookDescriptionInput = containerEl.querySelector(".bookDescriptionInput");
    const bookISBNInput = containerEl.querySelector(".bookISBNInput");

    const addBookBtn = containerEl.querySelector(".addBookButton");
    addBookBtn.addEventListener("click", () => {
        const newBookJson = {
            "title": bookNameInput.value,
            "description": bookDescriptionInput.value,
            "isbn": bookISBNInput.value
        }
        fetch(`http://localhost:8080/campuses/${campus.id}/addBook`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBookJson)
            })
            .then(res => res.json())
            .then(campus => {
                makeCampusView(campus);
            })
    })
    // })
}

makeHomeView();