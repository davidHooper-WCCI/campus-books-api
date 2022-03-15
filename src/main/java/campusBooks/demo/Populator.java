package campusBooks.demo;

import campusBooks.demo.model.Book;
import campusBooks.demo.model.Campus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import campusBooks.demo.repos.BookRepository;
import campusBooks.demo.repos.CampusRepository;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private BookRepository bookRepo;
    @Autowired
    private CampusRepository campusRepo;

    @Override
    public void run(String... args) throws Exception {
        Campus campus1 = new Campus("Columbus","Java");
        campusRepo.save(campus1);
        Book book1 = new Book("Head First Java","Learn java the easy way","123456",campus1);
        bookRepo.save(book1);
    }
}
