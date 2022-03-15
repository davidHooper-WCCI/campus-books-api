package campusBooks.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Campus {

    @Id
    @GeneratedValue
    private long id;
    private String location;
    private String techStack;
    @OneToMany(mappedBy = "campus")
    private Collection<Book> books;

    public Campus(String location, String techStack) {
        this.location = location;
        this.techStack = techStack;
    }

    public Campus() {
    }

    public String getLocation() {
        return location;
    }

    public String getTechStack() {
        return techStack;
    }

    public Collection<Book> getBooks() {
        return books;
    }

    public long getId() {
        return id;
    }
}
