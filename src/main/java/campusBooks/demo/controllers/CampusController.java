package campusBooks.demo.controllers;

import campusBooks.demo.model.Book;
import campusBooks.demo.model.Campus;
import campusBooks.demo.repos.BookRepository;
import campusBooks.demo.repos.CampusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class CampusController {

    private CampusRepository campusRepo;
    private BookRepository bookRepo;

    public CampusController(CampusRepository campusRepo, BookRepository bookRepo) {
        this.campusRepo = campusRepo;
        this.bookRepo = bookRepo;
    }

    @GetMapping("/campuses")
    public Iterable<Campus> getCampuses(){
        return campusRepo.findAll();
    }

    @GetMapping("/campuses/{id}")
    public Campus getCampus(@PathVariable long id){
        return campusRepo.findById(id).get();
    }
    @PostMapping("/campuses/{id}/addBook")
    public Campus addBookToCampus(@PathVariable long id, @RequestBody Book book){
        Campus campus = campusRepo.findById(id).get();
        book.setCampus(campus);
        bookRepo.save(book);
        return campus;
    }

}
