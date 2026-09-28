package tickets;

import java.util.ArrayList;
import java.util.List;

public class Technician extends User {
    List<TicketCategory> categories = new ArrayList<>();

    public Technician(String firstName, String lastName, String email, String phoneNumber) {
        super(firstName, lastName, email, phoneNumber);
    }
}
