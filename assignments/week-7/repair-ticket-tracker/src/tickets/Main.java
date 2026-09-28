package tickets;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        printHeader();

        Technician technician = new Technician(
            1001,
            "Bill",
            "Smith",
            "bill.smith@examle.com",
            "777-888-9999"
        );

        Requester requester = new Requester(
            2001,
            "Benjamin",
            "Gates",
            "benjamin.gates@example.com",
            "121-343-5656"
        );

        Ticket ticket = new Ticket(
            1,
            "Broken Laptop",
            "My laptop is not starting. I tried with and without the power adapter connected, and in both scenarios it didn't start.",
            TicketCategory.COMPUTERS,
            requester
        );

        List<TicketCategory> categories = new ArrayList<>();
        categories.add(TicketCategory.ELECTRONICS);
        categories.add(TicketCategory.COMPUTERS);
        technician.setCategories(categories);

        ticket.setStatus(TicketStatus.ONGOING);
        ticket.setPriority(TicketPriority.HIGH);
        ticket.setTechnician(technician);
        
        ticket.printTicketSummary();
    }
    

    public static void printHeader() {
        System.out.println("---------------------");
        System.out.println("Repair Ticket Tracker");
        System.out.println("---------------------");
    }
}
