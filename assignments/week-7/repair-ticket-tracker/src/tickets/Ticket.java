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

    public Ticket(int id, String title, String description, TicketCategory category, Requester requester) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.status = TicketStatus.TODO;
        this.priority = null;
        this.requester = requester;
        this.technician = null;
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

    public void setStatus(TicketStatus newStatus) {
        status = newStatus;
    }

    public void setPriority(TicketPriority newPriority) {
        priority = newPriority;
    }

    public void setTechnician(Technician newTechnician) {
        technician = newTechnician;
    }

    public boolean isClosed() {
        return status == TicketStatus.DONE;
    }

    public void printTicketSummary() {
        // Default info
        String priorityInfo = "Unassigned";
        String technicianInfo = "Unassigned";

        // Confirm not null before updating info
        if (priority != null) {
            priorityInfo = priority.toString();
        }
        
        // Confirm not null before updating info
        if (technician != null) {
            technicianInfo = technician.getEmail();
        }

        System.out.println("Ticket #" + id);
        System.out.println(" - Title: " + title);
        System.out.println(" - Description: " + description);
        System.out.println(" - Category: " + category);
        System.out.println(" - Status: " + status);
        System.out.println(" - Priority: " + priorityInfo);
        System.out.println(" - Requester: " + requester.getEmail());
        System.out.println(" - Technician: " + technicianInfo);
    }
}
