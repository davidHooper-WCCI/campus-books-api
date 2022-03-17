export default function campusView(campus) {
    return `
    <main class="main-content">
        <section class="campus-library">
            <header class="campus-library-header">
                <h2 class="campus-library-header__location">${campus.location}</h2>
                <h3 class="campus-library-header__tech-stack">${campus.techStack}</h3>
            </header>
            <section class="campus-books">
                ${
                    campus.books.map(book => {
                    return `<h3 class="book-title">${book.title}</h3>`;
                }).join("")
                }
                
            </section>
            <div class="NewBookDiv">
                <input type="text" placeholder="Book Name" class="bookNameInput" \>
                <input type="text" placeholder="Book Description" class="bookDescriptionInput" \>
                <input type="text" placeholder="Book ISBN" class="bookISBNInput" \>
                  
                <button class="addBookButton">Add book"</button>
            </div>
            <a class="back-navigation">back to campus listings</a>
        </section>
    </main>`;
}