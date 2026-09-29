package tickets;

import java.util.ArrayList;
import java.util.List;

public class Manager {
    private TicketTracker ticketTracker;

    public Manager() {
        this.ticketTracker = new TicketTracker();
    }

    public void runApp() {
        loadTickets();
        updateTickets();
        ticketTracker.printTicketsLessInfo();
        // ticketTracker.printTicketsMoreInfo();
    }

    public void loadTickets() {
        // Requesters
        Requester requester1 = new Requester(
            2001,
            "Benjamin",
            "Gates",
            "benjamin.gates@example.com",
            "121-343-5656"
        );

        Requester requester2 = new Requester(
            2002,
            "James",
            "Taylor",
            "jt@example.com",
            "333-444-5555"
        );

        Requester requester3 = new Requester(
            2003,
            "Tim",
            "Tebow",
            "tebow.time@example.com",
            "555-555-5555"
        );

        // Tickets
        Ticket ticket1 = new Ticket(
            1,
            "Broken Laptop",
            "My laptop is not starting. I tried with and without the power adapter connected, and in both scenarios it didn't start.",
            TicketCategory.COMPUTERS,
            requester1
        );

        Ticket ticket2 = new Ticket(
            2,
            "Dryer Not Drying Clothes",
            "Our dryer runs, but the clothes do not get dry. It may have to do with lack of heat or airflow.",
            TicketCategory.APPLIANCES,
            requester2
        );

        Ticket ticket3 = new Ticket(
            3,
            "Water Dripping from Ceiling",
            "There is water dripping from the ceiling in our electronics lab. It could be coming from pipes from a kitchen or bathroom in the floor above.",
            TicketCategory.PLUMBING,
            requester3
        );

        Ticket ticket4 = new Ticket(
            4,
            "Electrical Outlets Not Working",
            "The electrical outlets in our electronics lab suddenly stopped provided power this afternoon. We cannot turn on the computers, power supplies, or other electronic devices.",
            TicketCategory.ELECTRICAL,
            requester3
        );

        // Add tickets to the ticket tracker
        ticketTracker.addTicket(ticket1);
        ticketTracker.addTicket(ticket2);
        ticketTracker.addTicket(ticket3);
        ticketTracker.addTicket(ticket4);
    }

    public void updateTickets() {
        // Technicians
        Technician technician1 = new Technician(
            1001,
            "Bill",
            "Smith",
            "bill.smith@examle.com",
            "888-999-1001"
        );

        Technician technician2 = new Technician(
            1002,
            "Rob",
            "Jones",
            "rob.jones@examle.com",
            "888-999-1002"
        );

        Technician technician3 = new Technician(
            1003,
            "Stephanie",
            "Powers",
            "stephanie.powers@examle.com",
            "888-999-1003"
        );

        // Assign categories to technicians
        List<TicketCategory> categories1 = new ArrayList<>();
        List<TicketCategory> categories2 = new ArrayList<>();
        List<TicketCategory> categories3 = new ArrayList<>();

        categories1.add(TicketCategory.MECHANICAL);
        categories1.add(TicketCategory.ELECTRICAL);
        categories1.add(TicketCategory.ELECTRONICS);
        
        categories2.add(TicketCategory.ELECTRONICS);
        categories2.add(TicketCategory.COMPUTERS);
        
        categories3.add(TicketCategory.MECHANICAL);
        categories3.add(TicketCategory.PLUMBING);
        categories3.add(TicketCategory.APPLIANCES);

        technician1.setCategories(categories1);
        technician2.setCategories(categories2);
        technician3.setCategories(categories3);

        // Get tickets
        List<Ticket> tickets = ticketTracker.getTickets();
        Ticket ticket1 = tickets.get(0);
        Ticket ticket2 = tickets.get(1);
        Ticket ticket3 = tickets.get(2);
        Ticket ticket4 = tickets.get(3);
        
        // For each ticket:
        // - Update the status
        // - Update the priority
        // - Assign a technician

        // If we modify these ticket objects,
        // will they be modified in the list of tickets in ticket tracker?
        // Let's test this!
        // Otherwise, we will need a way to change individual tickets
        // or replace the ticket list with a list of updated tickets.

        ticket1.setStatus(TicketStatus.DONE);
        ticket1.setPriority(TicketPriority.HIGH);
        ticket1.setTechnician(technician2);

        ticket2.setStatus(TicketStatus.ONGOING);
        ticket2.setPriority(TicketPriority.LOW);
        ticket2.setTechnician(technician3);

        ticket3.setStatus(TicketStatus.PENDING);
        ticket3.setPriority(TicketPriority.HIGH);
        ticket3.setTechnician(technician3);

        ticket4.setStatus(TicketStatus.TODO);
        ticket4.setPriority(TicketPriority.MEDIUM);
        ticket4.setTechnician(technician1);
    }
}
