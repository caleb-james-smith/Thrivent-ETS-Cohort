package tickets;

import java.util.ArrayList;
import java.util.List;

public class TicketTracker {
    private List<Ticket> tickets = new ArrayList<>();

    public TicketTracker() {}

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public void addTicket(Ticket ticket) {
        tickets.add(ticket);
    }
}