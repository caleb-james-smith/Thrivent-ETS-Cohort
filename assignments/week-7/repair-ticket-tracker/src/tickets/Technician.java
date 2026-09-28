package tickets;

import java.util.ArrayList;
import java.util.List;

public class Technician extends User {
    private List<TicketCategory> categories = new ArrayList<>();

    public Technician(String firstName, String lastName, String email, String phoneNumber) {
        super(firstName, lastName, email, phoneNumber);
    }

    public List<TicketCategory> getCategories() {
        return categories;
    }

    public void setCategories(List<TicketCategory> newCategories) {
        categories = newCategories;
    }
}
