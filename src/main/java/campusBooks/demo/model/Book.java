package campusBooks.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private String isbn;
    @ManyToOne
    @JsonIgnore
    private Campus campus;

    public Book(String title, String description, String isbn, Campus campus) {
        this.title = title;
        this.description = description;
        this.isbn = isbn;
        this.campus = campus;
    }

    public Book() {
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getIsbn() {
        return isbn;
    }

    public Campus getCampus() {
        return campus;
    }

    public long getId() {
        return id;
    }
    public void setCampus(Campus campus) {
        this.campus = campus;
    }
}
