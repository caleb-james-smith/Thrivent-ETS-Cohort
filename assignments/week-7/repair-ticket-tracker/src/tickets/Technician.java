package tickets;

import java.util.ArrayList;
import java.util.List;

public class Technician extends User {
    private List<TicketCategory> categories = new ArrayList<>();

    public Technician(int id, String firstName, String lastName, String email, String phoneNumber) {
        super(id, firstName, lastName, email, phoneNumber);
    }

    public List<TicketCategory> getCategories() {
        return categories;
    }

    public void setCategories(List<TicketCategory> categories) {
        this.categories = categories;
    }
}
