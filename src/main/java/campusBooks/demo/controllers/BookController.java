package campusBooks.demo.controllers;

import campusBooks.demo.model.Book;
import campusBooks.demo.repos.BookRepository;
import campusBooks.demo.repos.CampusRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
     private BookRepository bookRepo;
     private CampusRepository campusRepo;

    public BookController(BookRepository bookRepo, CampusRepository campusRepo) {
        this.bookRepo = bookRepo;
        this.campusRepo = campusRepo;
    }
    @GetMapping("/books")
    public Iterable<Book> getBooks(){
        return bookRepo.findAll();
    }

    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable long id){
        return bookRepo.findById(id).get();
    }

}
