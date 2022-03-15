package campusBooks.demo.repos;

import campusBooks.demo.model.Campus;
import org.springframework.data.repository.CrudRepository;

public interface CampusRepository extends CrudRepository<Campus,Long> {
}
