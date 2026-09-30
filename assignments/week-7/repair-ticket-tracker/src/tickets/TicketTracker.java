package tickets;

import java.util.ArrayList;
import java.util.List;

public class TicketTracker {
    private List<Ticket> tickets;

    public TicketTracker() {
        this.tickets = new ArrayList<>();
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public void addTicket(Ticket ticket) {
        // Do not allow a ticket to be added if the id is already in use
        for (Ticket t : tickets) {
            if (t.getId() == ticket.getId()) {
                throw new IllegalArgumentException("Cannot add ticket to list of tickets because id = " + ticket.getId() + " is already in use");
            }
        }
        tickets.add(ticket);
        System.out.println(" - Added ticket id = " + ticket.getId() + " to tickets");
    }

    public int getNumTickets() {
        return tickets.size();
    }

    public int getNumOpenTickets() {
        int num_open = 0;

        for (Ticket ticket : tickets) {
            if (!ticket.isClosed()) {
                num_open += 1;
            }
        }

        return num_open;
    }

    public int getNumClosedTickets() {
        int num_closed = 0;

        for (Ticket ticket : tickets) {
            if (ticket.isClosed()) {
                num_closed += 1;
            }
        }

        return num_closed;
    }

    public void printSummary() {
        System.out.println();
        System.out.println("Number of Tickets:");
        System.out.println(" - Total: " + getNumTickets());
        System.out.println(" - Open: " + getNumOpenTickets());
        System.out.println(" - Closed: " + getNumClosedTickets());
        System.out.println();
    }

    public void printTicketsLessInfo() {
        for (Ticket ticket : tickets) {
            ticket.printLessInfo();
        }
    }
    
    public void printTicketsMoreInfo() {
        for (Ticket ticket : tickets) {
            ticket.printMoreInfo();
        }
    }
}