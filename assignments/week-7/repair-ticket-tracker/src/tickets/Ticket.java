package tickets;

public class Ticket {
    private int id;
    private String title;
    private String description;

    private TicketCategory category;
    private TicketStatus status;
    private TicketPriority priority;

    private Requester requester;
    private Technician technician;

    public Ticket(int id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TicketCategory getCategory() {
        return category;
    }

    public TicketStatus getStatus() {
        return status;
    }

    public TicketPriority getPriority() {
        return priority;
    }

    public Requester getRequester() {
        return requester;
    }

    public Technician getTechnician() {
        return technician;
    }

    public void printTicketSummary() {
        System.out.println("Ticket #" + id);
        System.out.println(" - Title: " + title);
        System.out.println(" - Description: " + description);
    }
}
