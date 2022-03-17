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
            console.log(campuses)
            containerEl.innerHTML = header();
            containerEl.innerHTML += home(campuses);
            containerEl.innerHTML += footer();

            const campusEl = containerEl.querySelectorAll(".campus");

            campusEl.forEach(campus => {
                campus.addEventListener("click", () => {
                    let campusIdEl = campus.querySelector(".id_field")
                    // alert("You clicked me: " + campusIdEl.value);
                    makeCampusView(campusIdEl.value);
                })
            })
        })
}

function makeCampusView(campusId) {
    fetch("http://localhost:8080/campuses/" + campusId)
        .then(res => res.json())
        .then(campus => {
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
                const newBookJson = 
                {
                    "title": bookNameInput.value,
                    "description": bookDescriptionInput.value,
                    "isbn": bookISBNInput.value
                }
                fetch(`http://localhost:8080/campuses/${campusId}/addBook`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newBookJson)
                  })
                  .then(res => res.json())
                  .then(campus => {
                      makeCampusView(campus.id);
                  })
            })
        })
}

makeHomeView();