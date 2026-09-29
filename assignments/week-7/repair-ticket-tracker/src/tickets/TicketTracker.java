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
        tickets.add(ticket);
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